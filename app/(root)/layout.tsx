import { Header, Sidebar } from "@/components/ui";

export default function MainLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full relative bg-white">
      <Sidebar/>
      <div className="absolute top-0 left-0 w-screen h-screen flex flex-col px-32 pt-8">
        <Header/>
        {children}
      </div>
    </div>
  );
}