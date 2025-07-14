// app/chat/page.tsx
import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";

const ClientComponent= dynamic(() => import("@/components/Hume/Chat"), {
  ssr: false,
});

export default async function ChatPage() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error("Failed to get Hume access token.");
  }

  return (
    <div className="grow flex flex-col">
      <ClientComponent accessToken={accessToken} />
    </div>
  );
}
