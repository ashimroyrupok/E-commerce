import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Dashboard",
  description: "Dashboard page",
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
