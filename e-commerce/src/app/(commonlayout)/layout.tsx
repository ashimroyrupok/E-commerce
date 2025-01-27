import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Now online shop in your country",
};
export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
  <Navbar/>
  {children}
  
  </>;
}
