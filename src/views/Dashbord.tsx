import React, { useEffect, useState } from "react";
import FooterD from "../components/FooterDash";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import {
  faMessage,
  faComments,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Settings from "./Settings";

import Users from "../views/Users";
import Sendsms from "../views/SendMessages";
import DashCard from "../components/DashCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { App } from "../components/Barchart";

import "react-circular-progressbar/dist/styles.css";
import Doughnt from "../components/Progess";
import MyCircularProgressbar from "../components/Distribution";
import Profile from "./Profile";

function Dashboard() {
  const [show, setShow] = useState(false);

  useEffect(() => {
  
    library.add(faMessage, faMessage, faUser);
  }, []);
  return (
    <div className="flex flex-row  ">
      <div
        className={`${
          show ? "left-0" : "-left-80"
        } transition-all z-30 fixed md:relative w-1/5 md:left-0`}
      >
        <Sidebar action={setShow} />
      </div>
      <div className=" w-full   bg-gray-100 overflow-hidden">
        <Header action={setShow} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/users" element={<Users />} />
          <Route path="/send-message" element={<Sendsms />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <FooterD />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="flex  flex-col justify-start  py-20   h-[100vh] overflow-scroll w-[98%]   overflow-x-hidden">
      <div className="flex flex-row justify-start items-start pt-10  mx-4">
        <p className="text-gray-500 text-3xl">SMS</p>
      </div>

      <div className=" border-b pb-5 shadow-sm grid grid-cols-2  md:grid-cols-4  gap-2 justify-between items-center m-5   max-w-[1440px]">
        <DashCard
          data={"Message Balance"}
          balance={"34,000"}
          icon={
            <svg
              className="w-11 h-"
              fill="none"
              color="#646EDA"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
          }
        />
        <DashCard
          data={"sent Messages"}
          balance={"50,000"}
          icon={
            <svg
              className="w-11 h-11"
              fill="none"
              color="#646EDA"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              ></path>
            </svg>
          }
        />

        <DashCard
          data={"Recipients "}
          balance={"7,000"}
          icon={
            <svg
              className="w-11 h-11"
              fill="none"
              color="#646EDA"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          }
        />
        <DashCard
          data={"Recipient Groups"}
          balance={"500"}
          icon={
            <svg
              className="w-11 h-11"
              fill="none"
              color="#646EDA"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          }
        />
      </div>
      <div className=" flex lg:flex-row min-h-[30vh] m-5 gap-2  md:flex-col ">
        <div className=" bg-white  p-5  flex flex-col justify-center w-[30%]   shadow-md h-full border">
          <div className="h-[10%] flex  justify-center items-center ">
            <p className="text-[1em] text-gray-600 font-semibold">
              Data Proportions{" "}
            </p>
          </div>
          <div className="  h-[90%] flex flex-row justify-center">
            <Doughnt />
          </div>
        </div>

        <div className="w-[70%] bg-white p-5 flex flex-col justify-between items-center shadow-md h-full first-letter border sm:">
          <div className="h-[10%]">
            <p className="text-[1em] text-gray-600 justify-start font-semibold">
              Percentage of usage
            </p>
          </div>
          <div className="h-[90%] flex flex-row md:flex-row  m-5 gap-2">
            <div className=" w-[25%]">
              <MyCircularProgressbar value={90} data="Wallet Usage" />
            </div>
 
            <div className=" w-[25%]">
              <MyCircularProgressbar value={60} data="Recipients" />
            </div>

            <div className=" w-[25%]">
              <MyCircularProgressbar value={50} data="Groups" />
            </div>

            <div className=" w-[25%]">
              <MyCircularProgressbar value={40} data="Recipients" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white  p-5 mb-5 mx-5  flex flex-col justify-center shadow-md border h-[50vh] ">
        <div className="h-[10%] flex  justify-center items-center ">
          <p className="text-[1em] text-gray-600 font-semibold">
            Message Analysis{" "}
          </p>
        </div>
        <App />
      </div>

      <div className="   h-fit bg-white flex flex-row justify-center items-center rounded shadow-md p-6 m-5   ">
        <form
          action=""
          className="flex flex-col flex-wrap justify-center w-full"
        >
          <h2 className="text-0.1xl text-gray-500 mb-6">
            Default Sender ID (Name of sender on message)
          </h2>
          <div className="flex flex-row ">
            <Input
              className="p-2 w-[50vw] rounded   border-primary text-0.1xl text-gray-500"
              type="text"
              name="test"
              placeholder="Testing"
              defaultValue={"Testing"}
            />
            <button
              type="submit"
              className=" ml-3 p-2  w-1/2 bg-primary rounded text-white hover:shadow-xl"
              data-testid="Update"
            >
              {" "}
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
