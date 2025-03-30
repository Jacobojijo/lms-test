"use client";

import { usePathname } from "next/navigation";
import { Footer, Navbar } from "@/components";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isLearningPage = pathname?.startsWith("/student/learning");

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {!isLearningPage && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isLearningPage && <Footer />}
    </div>
  );
}