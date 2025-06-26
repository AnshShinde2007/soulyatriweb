"use client";
//Messages.tsx
import { cn } from "@/utils";
import { useVoice } from "@humeai/voice-react";
import Expressions from "./Expressions";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentRef, forwardRef } from "react";

const Messages = forwardRef<
  ComponentRef<typeof motion.div>,
  Record<never, never>
>(function Messages(_, ref) {
  const { messages } = useVoice();

  return (
    <motion.div
      layoutScroll
      className="grow rounded-md overflow-auto p-4 bg-white"
      ref={ref}
    >
      <motion.div className="max-w-3xl mx-auto w-full flex flex-col gap-4 pb-24">
        <AnimatePresence mode="popLayout">
          {messages.map((msg, index) => {
            if (
              msg.type === "user_message" ||
              msg.type === "assistant_message"
            ) {
              const isUser = msg.type === "user_message";

              return (
                <motion.div
                  key={msg.type + index}
                  className={cn(
                    "relative px-4 py-3 rounded-2xl shadow-md max-w-[75%]",
                    isUser
                      ? "ml-auto bg-cyan-600 text-white"
                      : "mr-auto bg-zinc-100 text-black",
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                >
                  <div className="text-[10px] font-semibold uppercase opacity-50 mb-1">
                    {msg.message.role}
                  </div>
                  <div className="text-sm font-medium whitespace-pre-line">
                    {msg.message.content}
                  </div>

                  {/* Expression bar */}
                  {msg.models.prosody?.scores && (
                    <div
                      className={cn(
                        "mt-2",
                        isUser ? "text-white" : "text-black",
                      )}
                    >
                      <Expressions values={msg.models.prosody.scores} />
                    </div>
                  )}
                </motion.div>
              );
            }

            return null;
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

export default Messages;
