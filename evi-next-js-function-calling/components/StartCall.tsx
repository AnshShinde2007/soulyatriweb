import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

export default function StartCall() {
  const { status, connect } = useVoice();

  return (
    <Button
      className="z-10 flex items-center gap-2"
      disabled={status.value === "connected"}
      onClick={() => {
        connect().catch(console.error);
      }}
    >
      <Phone className="size-4 opacity-70" />
      <span>{status.value === "connected" ? "Connected" : "Start Call"}</span>
    </Button>
  );
}
