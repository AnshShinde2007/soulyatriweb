//components/Chat.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { VoiceProvider, ToolCallHandler, useVoice } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";
import StartCall from "./StartCall";

const handleToolCall: ToolCallHandler = async (message, send) => {
  if (message.name === "get_current_weather") {
    try {
      const res = await fetch("/api/fetchWeather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parameters: message.parameters }),
      });
      const result = await res.json();
      return result.success
        ? send.success(result.data)
        : send.error(result.error);
    } catch {
      return send.error({
        error: "Weather tool error",
        code: "weather_tool_error",
        level: "warn",
        content: "There was an error with the weather tool",
      });
    }
  }

  return send.error({
    error: "Tool not found",
    code: "tool_not_found",
    level: "warn",
    content: "The tool you requested was not found",
  });
};

export default function Chat({ accessToken }: { accessToken: string }) {
  return (
    <VoiceProvider
      configId={process.env.NEXT_PUBLIC_HUME_CONFIG_ID}
      auth={{ type: "accessToken", value: accessToken }}
      onToolCall={handleToolCall}
    >
      <ChatLayout />
    </VoiceProvider>
  );
}

function ChatLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showFrustrationPopup, setShowFrustrationPopup] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  const voice = useVoice();
  const expressions = (voice as any)?.state?.expressions ?? [];
  const latest = expressions.at(-1);
  const emotionScores = latest?.emotions;

  useEffect(() => {
    const frustrationScore = latest?.emotions?.frustration?.score;
    if (frustrationScore && frustrationScore > 0.7) {
      setShowFrustrationPopup(true);
    }
  }, [latest]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-16"} transition-all duration-300 bg-gray-800 text-white flex flex-col h-full`}
      >
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(false)}
            title="Collapse Sidebar"
          >
            ✕
          </button>
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              title="Collapse Sidebar"
            >
              ◀
            </button>
          )}
        </div>
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {sidebarOpen ? (
            <>
              <button className="w-full text-left px-4 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm">
                New Chat
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-lg text-sm">
                Search Chats
              </button>
              <button className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-lg text-sm">
                Chat History
              </button>
            </>
          ) : (
            <button
              onClick={() => setSidebarOpen(true)}
              className="w-full p-3 hover:bg-gray-700 rounded-lg text-center"
              title="Expand Sidebar"
            >
              ▶
            </button>
          )}
        </div>
        <div className="p-4 border-t border-gray-700">
          <button className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-lg text-sm flex items-center">
            <span className="mr-2">↗</span> Logout
          </button>
        </div>
      </div>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-4">
            {!sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ☰
              </button>
            )}
            <h2 className="text-xl font-semibold">SoulYatri</h2>
            {emotionScores && (
              <span className="text-sm text-gray-600 italic">
                {Object.entries(emotionScores)
                  .sort((a, b) => (b[1] as any).score - (a[1] as any).score)
                  .slice(0, 1)
                  .map(
                    ([emotion, val]) =>
                      `${emotion} (${((val as any).score * 100).toFixed(0)}%)`,
                  )}
              </span>
            )}
          </div>
          <button className="bg-gradient-to-r from-[#FF7B00] to-[#18A2B8] text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
            Book My Soul Sync
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Messages ref={messagesRef} />
          <div ref={messagesRef} />
        </div>
      </div>

      {/* Docked Controls + StartCall */}
      <Controls />
      <StartCall />

      {/* Frustration Popup */}
      {showFrustrationPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-60 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-md mx-4 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Noticed some frustration? Let’s fix that!
            </h3>
            <p className="text-gray-600 mb-6">
              Book a quick Soul Sync call, and we’ll help personally.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setShowFrustrationPopup(false)}
                className="w-full bg-[#FF7B00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-lg font-semibold"
              >
                Book My Soul Sync
              </button>
              <button
                onClick={() => setShowFrustrationPopup(false)}
                className="w-full text-gray-500 hover:text-gray-700 px-6 py-2"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
