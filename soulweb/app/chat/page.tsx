// app/booking/page.tsx
import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function BookingPage() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error("Failed to get Hume access token.");
  }

  return (
    <div className="grow flex flex-col">
      <h1 className="text-2xl font-semibold px-4 py-2">🗓️ Booking Assistant</h1>
      <Chat accessToken={accessToken} />
    </div>
  );
}
