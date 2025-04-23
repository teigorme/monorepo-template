import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div className="px-4 relative flex flex-col h-screen">
        <div className="container mx-auto max-w-7xl lg:px-6 px-0 flex-grow">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
