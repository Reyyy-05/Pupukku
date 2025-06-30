import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function BuyerAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-primary/5">{children}</main>
      <Footer />
    </div>
  );
}
