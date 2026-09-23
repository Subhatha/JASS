import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Reserve a table",
  description: "Plan your visit to Four Friends Kitchen in Canada.",
};
export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
