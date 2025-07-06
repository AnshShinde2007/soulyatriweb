import dynamic from "next/dynamic";

const TherapistAppointments = dynamic(
  () => import("@/components/Therapistsappointment"),
  {
    ssr: false,
  },
);

export default function TherapistAppointmentsPage() {
  return <TherapistAppointments />;
}
