import React, { useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import loader from "../assets/chuttersnap-9AqIdzEc9pY-unsplash.jpg";
import prfile from "../assets/avatar-icon-images-4 (1).jpg";
import source from "../assets/options-icon-7.jpg";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  verified: boolean;
  role: string;
  dataJoined: string;
}

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps) {
  const [loading, setLoading] = useState(false);

  return (
    <tr className="bg-white border-b ">
      <td className="px-6 py-4 whitespace-nowrap text-left w-[10vw] ">
        <div className="flex items-center">
          <img
            src={prfile}
            className="w-8 h-8 rounded-full mr-2"
            alt="Default Avatar"
          />
          <div>
            <div>{`${user.firstname}`}</div>
            <div className="text-xs text-gray-400">{user.lastname}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-left w-[10vw]">
        {`${user.email}`}
        <div className="text-[12px] text-gray-400"></div>
      </td>
      <td className="px-6 py-4 text-left w-[10vw]">{user.role}</td>
      <td className="px-6 py-4 text-left w-[10vw]">{user.dataJoined}</td>
      <td className="px-6 py-4 w-[10vw]">
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-primary text-white rounded-md">
            <PencilIcon className="h-5 w-5" />
          </button>
          <button className="px-4 py-2 bg-red-400 text-white rounded-md">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}
