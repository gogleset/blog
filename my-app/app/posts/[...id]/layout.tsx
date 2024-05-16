import Layout from "@/app/components/common/Layout";
export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}