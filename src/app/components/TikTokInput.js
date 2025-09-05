// src/app/components/TikTokInput.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TikTokInput = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [autoProcessing, setAutoProcessing] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Function to extract TikTok URL from text that might contain promotional content
  const extractTikTokUrl = (text) => {
    const patterns = [
      /https?:\/\/(?:www\.)?tiktok\.com\/@[^\/\s]*\/video\/\d+[^\s]*/g,
      /https?:\/\/(?:www\.)?tiktok\.com\/t\/[A-Za-z0-9]+[^\s]*/g,
      /https?:\/\/vm\.tiktok\.com\/[A-Za-z0-9]+[^\s]*/g,
      /https?:\/\/vm\.tiktok\.com\/\d+[^\s]*/g,
      /https?:\/\/vt\.tiktok\.com\/[A-Za-z0-9]+[^\s]*/g,
      /https?:\/\/m\.tiktok\.com\/v\/\d+\.html[^\s]*/g,
      /https?:\/\/[^\/]*tiktok\.com\/[^\s]*/g
    ];

    console.log("Extracting URL from text:", text);
    
    for (const pattern of patterns) {
      const matches = text.match(pattern);
      if (matches && matches.length > 0) {
        let url = matches[0];
        url = url.replace(/[.,!?;]+$/, '');
        console.log("Extracted URL:", url);
        return url;
      }
    }

    const cleanText = text.trim();
    if (isValidTikTokUrl(cleanText)) {
      return cleanText;
    }

    return text;
  };

  // Function to validate TikTok URL
  const isValidTikTokUrl = (url) => {
    const tikTokPatterns = [
      /tiktok\.com/,
      /douyin/,
      /vm\.tiktok\.com/,
      /vt\.tiktok\.com/,
      /m\.tiktok\.com/
    ];
    
    return tikTokPatterns.some(pattern => pattern.test(url));
  };

  // Function to clean and format URL for better success rate
  const cleanTikTokUrl = (url) => {
    let cleanUrl = url.trim();
    
    cleanUrl = extractTikTokUrl(cleanUrl);
    
    if (cleanUrl.includes('?')) {
      cleanUrl = cleanUrl.split('?')[0];
      console.log("Removed query parameters, clean URL:", cleanUrl);
    }
    
    if (cleanUrl.includes('#')) {
      cleanUrl = cleanUrl.split('#')[0];
      console.log("Removed fragments, clean URL:", cleanUrl);
    }
    
    if (!cleanUrl.startsWith('http')) {
      cleanUrl = 'https://' + cleanUrl;
    }
    
    cleanUrl = cleanUrl.replace(/\/+$/, '');
    
    console.log("Final cleaned URL:", cleanUrl);
    return cleanUrl;
  };

  const fetchData = async () => {
    setLoading(true);
    setError("");
    setAutoProcessing(false);
    
    try {
      const tiktokUrl = url.trim();
      console.log("=== FRONTEND DEBUG ===");
      console.log("1. Original URL:", tiktokUrl);
      
      if (!tiktokUrl) {
        throw new Error("Please enter a TikTok URL");
      }

      if (!isValidTikTokUrl(tiktokUrl)) {
        throw new Error("Please enter a valid TikTok URL (tiktok.com, vm.tiktok.com, etc.)");
      }
      
      const cleanedUrl = cleanTikTokUrl(tiktokUrl);
      console.log("2. Cleaned URL:", cleanedUrl);
      console.log("3. Encoded URL:", encodeURIComponent(cleanedUrl));
      
      const apiUrl = `/api/tiktok?url=${encodeURIComponent(cleanedUrl)}`;
      console.log("4. Final API URL:", apiUrl);
      
      const res = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log("5. Response status:", res.status);
      
      const json = await res.json();
      
      console.log("6. FULL API RESPONSE:");
      console.log(JSON.stringify(json, null, 2));
      
      if (!res.ok) {
        if (res.status === 400) {
          throw new Error(json.error || 'Invalid request. Please check your TikTok URL.');
        } else if (res.status === 404) {
          throw new Error('Video not found. The video might have been deleted or is private.');
        } else if (res.status === 500) {
          throw new Error('Server error. Please try again in a moment.');
        } else {
          throw new Error(`HTTP error! status: ${res.status} - ${json.error || 'Unknown error'}`);
        }
      }
      
      if (json.status === "error" || json.error) {
        throw new Error(json.error || json.message || "Failed to fetch video data");
      }

      if (!json.result) {
        throw new Error("No video data found. The video might be private or restricted.");
      }

      const hasVideo = json.result.videoSD || json.result.videoHD || json.result.video_hd || json.result.videoWatermark;
      const hasAudio = json.result.music;
      
      if (!hasVideo && !hasAudio) {
        throw new Error("No downloadable content found. The video might be protected or unavailable.");
      }

      setData(json);
      setError("");
      
      toast.success("Video loaded successfully!", {
        position: "bottom-center",
        autoClose: 2000,
      });
      
    } catch (error) {
      console.error("=== FETCH ERROR ===", error);
      
      let errorMessage = error.message || "An error occurred while fetching data";
      
      toast.error(errorMessage, {
        position: "bottom-center",
        autoClose: 5000,
      });
      
      setData(null);
      setError(error.message);
    }
    setLoading(false);
  };

  const handlePaste = async () => {
    if (!isClient || !navigator.clipboard) {
      toast.error("Clipboard access not available", { position: "bottom-center", autoClose: 3000 });
      return;
    }

    try {
      const text = await navigator.clipboard.readText();
      console.log("=== PASTE PROCESSING ===");
      console.log("Pasted raw text:", text);
      
      const extractedUrl = extractTikTokUrl(text);
      const cleanedUrl = cleanTikTokUrl(extractedUrl);
      
      console.log("Extracted URL:", extractedUrl);
      console.log("Cleaned URL:", cleanedUrl);
      
      setUrl(cleanedUrl);
      
      if (cleanedUrl && isValidTikTokUrl(cleanedUrl)) {
        const isPromotionalContent = (
          text.length > cleanedUrl.length + 15 &&
          (
            text.toLowerCase().includes('tiktok lite') ||
            text.toLowerCase().includes('download tiktok') ||
            text.toLowerCase().includes('shared via') ||
            text.toLowerCase().includes('this post is') ||
            text.includes('://www.tiktok.com/tiktoklite') ||
            text.split(' ').length > 8
          )
        );
        
        console.log("Is promotional content:", isPromotionalContent);
        
        if (isPromotionalContent) {
          console.log("Auto-processing promotional content...");
          setAutoProcessing(true);
          
          toast.success("TikTok URL extracted! Starting download automatically...", {
            position: "bottom-center",
            autoClose: 2500,
          });
          
          setTimeout(() => {
            console.log("Executing auto fetchData...");
            fetchData();
          }, 1200);
          
        } else {
          console.log("Direct URL pasted, no auto-processing");
          toast.success("Valid TikTok URL pasted! Click Download to process.", {
            position: "bottom-center",
            autoClose: 1500,
          });
        }
      } else if (text && text.includes('tiktok')) {
        toast.error("Could not extract a valid TikTok URL from the pasted content.", {
          position: "bottom-center",
          autoClose: 2500,
        });
      }
    } catch (err) {
      console.error("Paste error:", err);
      toast.error("Clipboard access denied", { position: "bottom-center", autoClose: 3000 });
    }
  };

  const cancelAutoProcessing = () => {
    setAutoProcessing(false);
    toast.info("Auto-processing cancelled", {
      position: "bottom-center",
      autoClose: 1000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (autoProcessing) {
      toast.info("Auto-processing in progress...", {
        position: "bottom-center",
        autoClose: 1000,
      });
      return;
    }
    
    const currentUrl = url.trim();
    console.log("=== FORM SUBMISSION ===");
    console.log("Form submission - URL value:", currentUrl);
    
    if (currentUrl && currentUrl.length > 100 && currentUrl.includes('tiktok')) {
      const extractedUrl = extractTikTokUrl(currentUrl);
      if (extractedUrl !== currentUrl) {
        setUrl(extractedUrl);
        toast.info("Extracted TikTok URL from shared content", {
          position: "bottom-center",
          autoClose: 1500,
        });
        setTimeout(() => fetchData(), 500);
        return;
      }
    }
    
    fetchData();
  };

  const handleInputChange = (e) => {
    const newUrl = e.target.value;
    console.log("Input changed:", newUrl);
    setUrl(newUrl);
    
    if (error) {
      setError("");
    }

    if (newUrl && newUrl.length > 50 && newUrl.includes('tiktok')) {
      const extractedUrl = extractTikTokUrl(newUrl);
      const cleanedUrl = cleanTikTokUrl(extractedUrl);
      
      const isPromotionalContent = (
        newUrl.length > cleanedUrl.length + 15 &&
        (
          newUrl.toLowerCase().includes('tiktok lite') ||
          newUrl.toLowerCase().includes('download tiktok') ||
          newUrl.toLowerCase().includes('shared via') ||
          newUrl.toLowerCase().includes('this post is') ||
          newUrl.includes('://www.tiktok.com/tiktoklite') ||
          newUrl.split(' ').length > 8
        )
      );

      if (isPromotionalContent && cleanedUrl !== newUrl) {
        console.log("Auto-processing detected in input field");
        setUrl(cleanedUrl);
        setAutoProcessing(true);
        
        toast.success("TikTok URL extracted! Starting download automatically...", {
          position: "bottom-center",
          autoClose: 2500,
        });
        
        setTimeout(() => {
          fetchData();
        }, 1200);
      }
    }
  };

  const getVideoUrl = () => {
    const result = data?.result;
    return result?.videoSD || result?.videoHD || result?.video_hd || result?.videoWatermark || result?.music || "";
  };

  const getAuthorInfo = () => {
    const author = data?.result?.author;
    return {
      avatar: author?.avatar || "",
      nickname: author?.nickname || "Unknown Author"
    };
  };

  const getSafeFilename = () => {
    const author = getAuthorInfo().nickname;
    return author.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50);
  };

  // Desktop Layout Component
  const DesktopLayout = () => (
    <div className="max-w-7xl mx-auto mt-8 px-4">
      <ToastContainer />

      {/* Desktop Input Form - Wide Horizontal Layout */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl backdrop-blur-md p-8 border border-white/20">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
              TikTok Video Downloader
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Download TikTok videos without watermark in HD quality
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={url}
                  onChange={handleInputChange}
                  placeholder="Paste TikTok video link or shared content here..."
                  className="w-full h-16 text-lg px-6 pr-24 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-all duration-300 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 112 2h2a2 2 0 012-2"/>
                  </svg>
                  Paste
                </button>
              </div>
              <button
                type="submit"
                disabled={loading || autoProcessing}
                className="h-16 px-12 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-400 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed text-lg"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Processing...
                  </>
                ) : autoProcessing ? (
                  <>
                    <svg className="animate-pulse h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="3"/>
                      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                    </svg>
                    Auto-starting...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg> 
                    Download
                  </>
                )}
              </button>
            </div>

            {/* Auto-processing indicator */}
            {autoProcessing && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3 text-blue-700">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  <span className="font-medium">Auto-processing extracted URL...</span>
                </div>
                <button 
                  onClick={cancelAutoProcessing}
                  className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>

          <div className="mt-4 text-sm text-gray-500 text-center">
            <p>Supported: Direct TikTok URLs, TikTok Lite shared content, vm.tiktok.com, m.tiktok.com</p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <strong>Error:</strong>
          </div>
          <p className="mt-1">{error}</p>
        </div>
      )}

      {/* Desktop Results Layout */}
      {data && data?.result && (
        <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl backdrop-blur-md border border-white/20 p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video Preview */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-black">
                {getVideoUrl() && (
                  <video 
                    controls 
                    src={getVideoUrl()} 
                    className="w-full h-auto max-h-[500px] object-contain" 
                    referrerPolicy="no-referrer"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                {getAuthorInfo().avatar && (
                  <Image
                    src={getAuthorInfo().avatar}
                    alt={getAuthorInfo().nickname}
                    width={60}
                    height={60}
                    className="rounded-full"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                    {getAuthorInfo().nickname}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {data?.result?.desc || "No description available"}
                  </p>
                  {data?.result?.uploadDate && (
                    <p className="text-gray-400 text-xs mt-1">
                      Uploaded: {new Date(data.result.uploadDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Download Options */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Download Options</h3>
              
              {data?.result?.videoSD && (
                <a
                  href={`/api/download?url=${encodeURIComponent(data.result.videoSD)}&type=.mp4&title=${encodeURIComponent(getSafeFilename())}`}
                  className="block w-full p-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 no-underline"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span className="font-semibold text-lg">Download SD (No Watermark)</span>
                  </div>
                </a>
              )}

              {(data?.result?.videoHD || data?.result?.video_hd) && (
                <a
                  href={`/api/download?url=${encodeURIComponent(data.result.videoHD || data.result.video_hd)}&type=.mp4&title=${encodeURIComponent(getSafeFilename())}`}
                  className="block w-full p-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 no-underline"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span className="font-semibold text-lg">Download HD (No Watermark)</span>
                  </div>
                </a>
              )}

              {data?.result?.videoWatermark && (
                <a
                  href={`/api/download?url=${encodeURIComponent(data.result.videoWatermark)}&type=.mp4&title=${encodeURIComponent(getSafeFilename())}`}
                  className="block w-full p-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 no-underline"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span className="font-semibold text-lg">Download (With Watermark)</span>
                  </div>
                </a>
              )}

              {data?.result?.music && (
                <a
                  href={`/api/download?url=${encodeURIComponent(data.result.music)}&type=.mp3&title=${encodeURIComponent(getSafeFilename())}_audio`}
                  className="block w-full p-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 no-underline"
                >
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                    </svg>
                    <span className="font-semibold text-lg">Download Audio Only</span>
                  </div>
                </a>
              )}

              <Link
                href="/tiktok"
                className="block w-full p-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 no-underline"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                  <span className="font-semibold text-lg">Download Another Video</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Mobile Layout Component (Original Design)
  const MobileLayout = () => (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <ToastContainer />

      {/* Mobile Input Form */}
      <div className="max-w-6xl mx-auto">
        <div className="download-box rounded-2xl">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl backdrop-blur-md p-4 border border-white/10">
            <form
              className="flex flex-col md:flex-row items-stretch md:items-center gap-2"
              onSubmit={handleSubmit}
            >
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={url}
                  onChange={handleInputChange}
                  placeholder="Paste TikTok video link or shared content here..."
                  className="w-full h-14 border-gray-300 text-black rounded-xl px-5 pr-20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white"
                />
                <button
                  type="button"
                  onClick={handlePaste}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 712-2h2a2 2 0 712 2"
                    />
                  </svg>
                  Paste
                </button>
              </div>
              <button
                type="submit"
                disabled={loading || autoProcessing}
                className="h-14 px-8 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 disabled:from-gray-500 disabled:to-gray-400 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Processing...
                  </>
                ) : autoProcessing ? (
                  <>
                    <svg className="animate-pulse h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="3"/>
                      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                    </svg>
                    Auto-starting...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg> 
                    Download
                  </>
                )}
              </button>
            </form>
            
            {/* Auto-processing indicator with cancel option */}
            {autoProcessing && (
              <div className="mt-3 p-3 bg-blue-100 border border-blue-300 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-700">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  <span className="text-sm font-medium">Auto-processing extracted URL...</span>
                </div>
                <button 
                  onClick={cancelAutoProcessing}
                  className="text-blue-600 hover:text-blue-800 text-sm underline transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          
          {/* URL Format Help */}
          <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            <p>
              {autoProcessing ? (
                <span className="flex items-center gap-1">
                  <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Auto-processing TikTok Lite shared content...
                </span>
              ) : (
                "Supported: Direct TikTok URLs, TikTok Lite shared content, vm.tiktok.com, m.tiktok.com"
              )}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <strong>Error:</strong>
          </div>
          <p className="mt-1">{error}</p>
        </div>
      )}

      {/* Mobile Results */}
      {data && data?.result && (
        <div className="mt-6">
          <div className="mt-4 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10 p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative rounded-lg overflow-hidden max-h-[430px]">
                    {getVideoUrl() && (
                      <video 
                        controls 
                        src={getVideoUrl()} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>

                <div className="md:w-2/3 flex flex-col justify-between">
                  <div className="mb-3">
                    <div className="flex items-center gap-3 justify-between mb-1">
                      {getAuthorInfo().avatar && (
                        <Image
                          src={getAuthorInfo().avatar}
                          alt={getAuthorInfo().nickname}
                          width={96}
                          height={96}
                          className="rounded-full w-24 h-24"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      )}
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {getAuthorInfo().nickname}
                      </h2>
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {data?.result?.desc || "No description available"}
                    </div>
                    
                    {data?.result?.uploadDate && (
                      <div className="text-gray-400 text-xs">
                        Uploaded: {new Date(data.result.uploadDate).toLocaleDateString()}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    {data?.result?.videoSD && (
                      <a
                        href={`/api/download?url=${encodeURIComponent(data.result.videoSD)}&type=.mp4&title=${encodeURIComponent(getSafeFilename())}`}
                        className="download-button bg-gradient-to-r from-blue-600 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg> 
                        Download SD (No Watermark)
                      </a>
                    )}

                    {(data?.result?.videoHD || data?.result?.video_hd) && (
                      <a
                        href={`/api/download?url=${encodeURIComponent(data.result.videoHD || data.result.video_hd)}&type=.mp4&title=${encodeURIComponent(getSafeFilename())}`}
                        className="download-button bg-gradient-to-r from-pink-600 to-rose-400 hover:from-pink-500 hover:to-rose-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg> 
                        Download HD (No Watermark)
                      </a>
                    )}

                    {data?.result?.videoWatermark && (
                      <a
                        href={`/api/download?url=${encodeURIComponent(data.result.videoWatermark)}&type=.mp4&title=${encodeURIComponent(getSafeFilename())}`}
                        className="download-button bg-gradient-to-r from-green-600 to-emerald-400 hover:from-green-500 hover:to-emerald-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg> 
                        Download (With Watermark)
                      </a>
                    )}

                    {data?.result?.music && (
                      <a
                        href={`/api/download?url=${encodeURIComponent(data.result.music)}&type=.mp3&title=${encodeURIComponent(getSafeFilename())}_audio`}
                        className="download-button bg-gradient-to-r from-yellow-600 to-orange-400 hover:from-yellow-500 hover:to-orange-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                        </svg> 
                        Download Audio Only
                      </a>
                    )}

                    <Link
                      href="/tiktok"
                      className="download-button bg-gradient-to-r from-purple-600 to-indigo-400 hover:from-purple-500 hover:to-indigo-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
                    >
                      Download Another Video
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  // Render different layouts based on screen size
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default TikTokInput;
