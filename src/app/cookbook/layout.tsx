import { Header, Footer } from "@/components/site";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="book-theme">
      <Header book />
      {children}
      <Footer />
    </div>
  );
}
