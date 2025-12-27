
import Sidebar from "@/components/ui/Sidebar";
import "./globals.css";
import Header from "@/components/ui/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='min-h-screen text-black bg-white' >
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
