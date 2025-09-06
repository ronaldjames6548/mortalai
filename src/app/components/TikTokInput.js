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

  useEffect(() => {
    setIsClient(true);
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

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <ToastContainer />

      {/* Enhanced Input Form Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
            <h2 className="text-white text-lg font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              TikTok Video Downloader
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Paste any TikTok link or shared content below
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Input Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  TikTok Video URL
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={url}
                    onChange={handleInputChange}
                    placeholder="https://www.tiktok.com/@username/video/123456789 or paste shared content"
                    className="w-full h-12 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 pr-16 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-1.5 text-sm font-medium border border-gray-300 dark:border-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Paste
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading || autoProcessing}
                  className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg> 
                      Download Video
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => setUrl("")}
                  className="h-12 px-6 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg border border-gray-300 dark:border-gray-600 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear
                </button>
              </div>
            </form>
            
            {/* Auto-processing indicator with cancel option */}
            {autoProcessing && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3 text-blue-700 dark:text-blue-300">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  <div>
                    <span className="font-medium">Auto-processing extracted URL...</span>
                    <p className="text-sm text-blue-600 dark:text-blue-400">We detected shared content and extracted the video URL</p>
                  </div>
                </div>
                <button 
                  onClick={cancelAutoProcessing}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium px-3 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          
          {/* Help Text */}
          <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <svg className="w-4 h-4 mt-0.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                {autoProcessing ? (
                  <span className="flex items-center gap-1">
                    <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                    </svg>
                    Auto-processing TikTok shared content...
                  </span>
                ) : (
                  <>
                    <strong className="text-gray-900 dark:text-gray-200">Supported formats:</strong>
                    <span className="ml-1">Direct TikTok URLs, TikTok shared content, vm.tiktok.com, m.tiktok.com links</span>
                    <br />
                    <span>We automatically extract video URLs from shared content!</span>
                  </>
                )}
              </div>
            </div>
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
                        className="download-button bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
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
                        className="download-button bg-gradient-to-r from-pink-600 to-pink-400 hover:from-pink-500 hover:to-pink-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
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
                        className="download-button bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
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
                        className="download-button bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-500 hover:to-yellow-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
                        </svg> 
                        Download Audio Only
                      </a>
                    )}

                    <Link
                      href="/tiktok"
                      className="download-button bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 w-full p-3 rounded-lg text-white flex items-center justify-center no-underline"
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
};

export default TikTokInput;
