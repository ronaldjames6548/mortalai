// src/app/components/TikTokInput.js
"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TikTokInput = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!url) {
      toast.error("Please enter a valid URL", { position: "bottom-center", autoClose: 3000 });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/tiktok?url=${encodeURIComponent(url)}`);
      const json = await res.json();
      if (json.error) throw new Error(json.error);
      setData(json);
    } catch (err) {
      toast.error(err.message, { position: "bottom-center", autoClose: 3000 });
      setData(null);
    }
    setLoading(false);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      toast.success("URL pasted from clipboard", { position: "bottom-center", autoClose: 2000 });
    } catch (err) {
      toast.error("Clipboard access denied", { position: "bottom-center", autoClose: 3000 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <ToastContainer />
      <div className="download-box rounded-2xl">
        <div className="bg-cyan-800/80 rounded-xl backdrop-blur-md p-4">
          <form
            className="flex flex-col md:flex-row items-stretch md:items-center gap-2"
            onSubmit={handleSubmit}
          >
            <div className="relative flex-grow">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste TikTok video link here"
                className="w-full h-14 border-gray-700 text-black rounded-xl px-5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="button"
                onClick={handlePaste}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2"
                  />
                </svg>
                Paste
              </button>
            </div>
            <button
              type="submit"
              className="h-14 px-8 bg-gradient-pink-purple hover:bg-gradient-pink-purple text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </button>
          </form>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center mt-4">
          <svg
            className="animate-spin h-10 w-10 text-blue-600"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        </div>
      )}

      {data && (
        <div className="mt-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-blue-purple rounded-lg overflow-hidden backdrop-blur-sm border border-white/10 p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative rounded-lg overflow-hidden max-h-[430px]">
                    <video
                      controls
                      src={
                        data.result.videoSD ||
                        data.result.videoHD ||
                        data.result.videoWatermark ||
                        data.result.music ||
                        ""
                      }
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div className="mb-3">
                    <div className="flex items-center gap-3 justify-between mb-1">
                      <img
                        src={data.result.author.avatar || ""}
                        alt={data.result.author.nickname || ""}
                        className="rounded-full w-24 h-24"
                      />
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {data.result.author.nickname}
                      </h2>
                    </div>
                    <div className="text-gray-400 text-xs mb-2">
                      {data.result.desc}
                    </div>
                    {data.result.uploadDate && (
                      <div className="text-gray-400 text-xs">
                        Uploaded: {data.result.uploadDate}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    {data.result.videoSD && (
                      <a
                        href={`/api/download?url=${encodeURIComponent(
                          data.result.videoSD
                        )}&type=.mp4&title=${encodeURIComponent(
                          data.result.author.nickname
                        )}`}
                        className="download-button bg-gradient-blue hover:bg-gradient-blue text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download SD (No Watermark)
                      </a>
                    )}
                    {data.result.videoHD && (
                      <a
                        href={`/api/download?url=${encodeURIComponent(
                          data.result.videoHD
                        )}&type=.mp4&title=${encodeURIComponent(
                          data.result.author.nickname
                        )}`}
                        className="download-button bg-gradient-pink hover:bg-gradient-pink text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download HD (No Watermark)
                      </a>
                    )}
                    {data.result.videoWatermark && (
                      <a
                        href={`/api/download?url=${encodeURIComponent(
                          data.result.videoWatermark
                        )}&type=.mp4&title=${encodeURIComponent(
                          data.result.author.nickname
                        )}`}
                        className="download-button bg-gradient-green hover:bg-gradient-green text-white px-4 py-2 rounded-lg flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        Download (With Watermark)
                      </a>
                    )}
                    <a
                      href="/tiktok"
                      className="download-button bg-gradient-green hover:bg-gradient-green text-white px-4 py-2 rounded-lg flex items-center"
                    >
                      Download Another Video
                    </a>
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