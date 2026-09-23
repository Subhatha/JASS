import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our menu",
  description:
    "Explore Four Friends Kitchen favourites, from JASS Bourbon Wings to pizza, burgers, desserts and drinks.",
};
export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
