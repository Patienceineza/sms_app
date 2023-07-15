import React from "react";
import FooterD from "../components/FooterDash";
import Sidebar from "../components/Sidebar";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  UserIcon,
  UserCircleIcon,
  CogIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";
import SendOne from "../components/Sendone";

function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-1/5 bg-blue-200">
          <Sidebar />
        </div>

        <div className="w-4/5 bg-gray-100 flex flex-col flex-wrap rounded-2xl shadow-lg overflow-hidden max-w-screen-xl mx-auto">
          <div className="flex justify-start mt-5 ml-5">
            <SendOne />
          </div>
          <FooterD />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
