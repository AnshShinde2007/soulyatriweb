// "use client";
// import { cn } from "@/utils";
// import { useVoice } from "@humeai/voice-react";
// import Expressions from "./Expressions";
// import { AnimatePresence, motion } from "framer-motion";
// import { ComponentRef, forwardRef } from "react";

// const Messages = forwardRef<
//   ComponentRef<typeof motion.div>,
//   Record<never, never>
// >(function Messages(_, ref) {
//   const { messages } = useVoice();

//   return (
//     <motion.div
//       layoutScroll
//       className={"grow overflow-auto p-4 pt-24"}
//       ref={ref}
//     >
//       <motion.div
//         className={"max-w-2xl mx-auto w-full flex flex-col gap-4 pb-24"}
//       >
//         <AnimatePresence mode={"popLayout"}>
//           {messages.map((msg, index) => {
//             if (
//               msg.type === "user_message" ||
//               msg.type === "assistant_message"
//             ) {
//               return (
//                 <motion.div
//                   key={msg.type + index}
//                   className={cn(
//                     "w-[80%]",
//                     "bg-card",
//                     "border border-border rounded-xl",
//                     msg.type === "user_message" ? "ml-auto" : ""
//                   )}
//                   initial={{
//                     opacity: 0,
//                     y: 10,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: 0,
//                   }}
//                 >
//                   <div className={"flex items-center justify-between pt-4 px-3"}>
//                     <div
//                       className={cn(
//                         "text-xs capitalize font-medium leading-none opacity-50 tracking-tight"
//                       )}
//                     >
//                       {msg.message.role}
//                     </div>
//                     <div
//                       className={cn(
//                         "text-xs capitalize font-medium leading-none opacity-50 tracking-tight"
//                       )}
//                     >
//                       {msg.receivedAt.toLocaleTimeString(undefined, {
//                         hour: "numeric",
//                         minute: "2-digit",
//                         second: undefined,
//                       })}
//                     </div>
//                   </div>
//                   <div className={"pb-3 px-3"}>{msg.message.content}</div>
//                   <Expressions values={{ ...msg.models.prosody?.scores }} />
//                 </motion.div>
//               );
//             }

//             return null;
//           })}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   );
// });

// export default Messages;
"use client";
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
      className={"grow overflow-auto p-4 pt-24"}
      ref={ref}
    >
      <motion.div
        className={"max-w-2xl mx-auto w-full flex flex-col gap-4 pb-24"}
      >
        <AnimatePresence mode={"popLayout"}>
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
                    "w-[80%]",
                    "rounded-xl shadow-md border border-border",
                    isUser
                      ? "ml-auto bg-gradient-to-r from-[#36828c] to-[#6bd7e7] text-white"
                      : "bg-blue-50 text-gray-900",
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                >
                  <div
                    className={"flex items-center justify-between pt-4 px-3"}
                  >
                    <div
                      className={cn(
                        "text-xs font-medium leading-none opacity-70 tracking-tight",
                        isUser ? "text-white" : "text-gray-600",
                      )}
                    >
                      {msg.message.role}
                    </div>
                    <div
                      className={cn(
                        "text-xs font-medium leading-none opacity-70 tracking-tight",
                        isUser ? "text-white" : "text-gray-600",
                      )}
                    >
                      {msg.receivedAt.toLocaleTimeString(undefined, {
                        hour: "numeric",
                        minute: "2-digit",
                        second: undefined,
                      })}
                    </div>
                  </div>
                  <div className={"pb-3 px-3"}>{msg.message.content}</div>
                  <Expressions values={{ ...msg.models.prosody?.scores }} />
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
