import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";



export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
     <Header/>
     <div className="flex">
        <Sidebar/>
     </div>
    </div>
  );
}
