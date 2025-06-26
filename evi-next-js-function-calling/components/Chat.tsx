"use client";

import { VoiceProvider, ToolCallHandler } from "@humeai/voice-react";
import Controls from "./Controls";
import StartCall from "./StartCall";
import { useRef } from "react";
import { Nav } from "./Nav"; // Make sure Nav is exported properly

const handleToolCall: ToolCallHandler = async (message, send) => {
  if (message.name === "get_current_weather") {
    try {
      const response = await fetch("/api/fetchWeather", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ parameters: message.parameters }),
      });

      const result = await response.json();
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
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col h-screen w-full bg-zinc-100">
      <Nav />
      <VoiceProvider
        configId={process.env.NEXT_PUBLIC_HUME_CONFIG_ID}
        auth={{ type: "accessToken", value: accessToken }}
        onToolCall={handleToolCall}
      >
        <ChatLayout scrollRef={scrollRef} />
      </VoiceProvider>
    </div>
  );
}

function ChatLayout({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <>
      {/* No Message History */}
      <div
        className="flex-1 overflow-auto px-4 bg-white flex items-center justify-center"
        ref={scrollRef}
      >
        <p className="text-center text-zinc-400 text-xl font-medium">
          Whats on your mind?
        </p>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-white shadow-inner flex flex-col items-center gap-3">
        <StartCall />
        <Controls />
      </div>
    </>
  );
}
