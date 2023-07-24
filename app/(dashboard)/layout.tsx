import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { FC } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = async({ children }) => {

  const apiLimitCount = await getApiLimitCount()

  return (
    <>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:insert-y-0  bg-gray-900">
         <Sidebar apiLimitCount={apiLimitCount} />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
    </>
  )
};

export default DashboardLayout;
