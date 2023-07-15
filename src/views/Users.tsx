import React, { useState, useEffect } from "react";
import loader from "../assets/chuttersnap-9AqIdzEc9pY-unsplash.jpg";
import prfile from "../assets/avatar-icon-images-4 (1).jpg";
import source from "../assets/options-icon-7.jpg";
import UserRow from "../components/UserRow";
import FooterD from "../components/FooterDash";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// Dummy data for users
const dummyUsers = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    verified: true,
    role: "admin",
    dataJoined: "01/07/23",
  },

  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    verified: false,
    role: "seller",
    dataJoined: "15/07/23",
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    verified: false,
    role: "seller",
    dataJoined: "15/07/23",
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    verified: false,
    role: "seller",
    dataJoined: "15/07/23",
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    verified: false,
    role: "seller",
    dataJoined: "15/07/23",
  },

  {
    id: 2,
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@example.com",
    verified: false,
    role: "seller",
    dataJoined: "15/07/23",
  },
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    verified: true,
    role: "admin",
    dataJoined: "01/07/23",
  },
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    verified: true,
    role: "admin",
    dataJoined: "01/07/23",
  },
];

export default function UserTable() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [shouldRenderHamburger, setShouldRenderHamburger] = useState(false);

  return (
    <div className=" flex  flex-row flex-wrap justify-center py-20  gap-3 max-h-[100vh]   max-w-[100vw]  h-fit overflow-scroll ">
      <div className="flex f justify-start  ">
        <p className="text-gray-500 text-3xl">Users</p>
      </div>

      <div className="w-[76vw] flex flex-row flex-wrap justify-center items-center bg-white p-4">
        <table className=" w-full">
          <thead className="">
            <tr>
              <th className="text-left px-4">Name</th>
              <th className="text-left  px-4">Email</th>
              <th className="text-left  px-4">Role</th>
              <th className="text-left  px-4">Date Joined</th>
              <th className="text-left  px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>

        <div className="h-5 w-[40%] flex flex-row justify-center items-center m-5 space-x-1">
          <button className="px-4 py-2  border rounded border-primary">
            Prev
          </button>
          <button className="px-4 py-2 border rounded border-primary">1</button>
          <button className="px-4 py-2  border rounded border-primary">
            2
          </button>
          <button className="px-4 py-2  border rounded border-primary">
            3
          </button>
          <button className="px-4 py-2  border rounded border-primary ">
            4
          </button>
          <button className="px-4 py-2  border rounded  bg-primary text-white">
            5
          </button>
          <button className="px-4 py-2  border rounded border-primary">
            6
          </button>
          <button className="px-4 py-2  border rounded border-primary">
            7
          </button>
          <button className="px-4 py-2  border rounded border-primary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
