import { Header } from "@/widgets/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="prose lg:prose-sm w-full max-w-full">
      <Header />
      <main className="mx-auto container">{children}</main>
    </div>

  );
}
