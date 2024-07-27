import React from "react";
import LeftSidebar from "../../components/ui/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex relative flex-col">
      <main className="relative flex  bg-black-3 ">
        <LeftSidebar />
        <div >{children} </div>
        <h1>Right Sidebar </h1>
      </main>
    </div>
  );
}
