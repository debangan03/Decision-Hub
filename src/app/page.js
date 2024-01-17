import Image from "next/image";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import iconan from "./assets/icons.gif";
import { LuPhoneCall } from "react-icons/lu";

export default function Home() {
  return (
    <main>
      <div className="h-20 hidden md:flex justify-between items-center px-10">
        <div className="rounded-full bg-gray-50 max-w-[50vw] shadow-md px-4 flex justify-center items-center space-x-4 shadow-slate-400 border-slate-800 py-2">
          <Image src={iconan} width={40} height={50} />
          <p>
            {" "}
            See announcements here is simply dummy text of the prig industry.{" "}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <div>
            <LuPhoneCall className="text-4xl" />
          </div>
          <div>
            <p className="text-[0.75rem]">Customer Care Hotline</p>
            <h1 className="font-bold">1800-000-000</h1>
          </div>
        </div>
      </div>
      <Dashboard/>
    </main>
  );
}
