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
function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-1/5 bg-blue-200 ">
          <Sidebar />
        </div>

        <div className="w-4/5 bg-gray-100 flex flex-col flex-wrap  rounded-2xl shadow-lg overflow-hidden">
          <div className=" flex jusify-start mt-5 ml-5">
            <p className="text-gray-500 text-3xl"> SMS</p>
          </div>
          <div className="mb-10 flex flex-row  w-full h-[12vh] justify-around ">
            <div className=" w-1/4 mt-6 bg-white rounded-2xl shadow-lg w-1/5 h-full p-4 shadow-xl ">
              <div className="flex flex-row  p-4 justify-between flex-wrap align-center">
                <div>
                  <p className="text-2xl font-bold">34,000</p>
                  <p className=" text-0.1xl text-gray-500">MessageBalance</p>
                </div>
                <div>
                  <UserIcon className="h-12 w-12 mr-2 text-yellow-500 bg-yellow-200 rounded-full" />
                </div>
              </div>
            </div>
            <div className=" w-1/4 mt-6 bg-white rounded-2xl shadow-lg w-1/5 h-full p-4 shadow-xl ">
              <div className="flex flex-row  p-4 justify-between flex-wrap align-center">
                <div>
                  <p className="text-2xl font-bold">3,400</p>
                  <p className=" text-0.1xl text-gray-500">Sent Messages</p>
                </div>
                <div>
                  <UserIcon className="h-12 w-12 mr-2 text-green-500 bg-green-200 rounded-full" />
                </div>
              </div>
            </div>
            <div className=" w-1/4 mt-6 bg-white rounded-2xl shadow-lg w-1/5 h-full p-4 shadow-xl ">
              <div className="flex flex-row p-4 justify-between flex-wrap items-center">
                <div>
                  <p className="text-2xl font-bold">890</p>
                  <p className=" text-0.1xl text-gray-500">Recipient</p>
                </div>
                <div>
                  <UserGroupIcon className="h-12 w-12 mr-2 text-orange-500 bg-orange-200 rounded-full" />
                </div>
              </div>
            </div>
            <div className=" w-1/4  bg-white rounded-2xl shadow-lg w-1/5 h-full  mt-6 p-4 shadow-xl ">
              <div className="flex flex-row  p-4 justify-between flex-wrap align-center">
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className=" text-0.1xl text-gray-500">GroupRecipients</p>
                </div>
                <div>
                  <UserGroupIcon className="h-12 w-12 mr-2 text-blue-500 bg-blue-200 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="m-6 h-[17vh] bg-white rounded-2xl shadow-lg   p-6  shadow-xl w-[75vw] ">


            <form action="" className="flex flex-col flex-wrap justify-center">
              <h2 className="text-0.1xl text-gray-500 mb-6"> Default Sender ID (Name of sender on message)</h2>
              <div className="flex felx-row " >  <Input
                  className="p-2  w-[50vw] rounded-xl border w-full  border border-primary text-0.1xl text-gray-500"
                  type="Text"
                  name="test"
                  placeholder="Testing"
                  defaultValue={"Testing"}
                />
              <Input
              className="  bg-primary rounded-xl text-white py-3   hover:scale-105 duration-300 justify-left"
              type="submit" name="Update" /></div>
           
            </form>
          </div>

          <FooterD />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
