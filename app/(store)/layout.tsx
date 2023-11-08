import Navbar from "@/components/StoreNavbar";
import { Sidebar } from "@/components/Sidebar";
const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {


  return ( 
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 z-80">
        <Sidebar/>
      </div>
      <main className="md:pl-56 pb-10">

      <div className="sticky top-0 bg-black z-50"><Navbar /></div>
        <div className="p-3">{children}</div>

      </main>
    </div>
   );
}
 
export default DashboardLayout;
