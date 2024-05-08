import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Echo Meet",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}

export default RootLayout;
