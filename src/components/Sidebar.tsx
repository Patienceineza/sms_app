import React, { SetStateAction } from "react";
import logo from "../assets/download (1).svg"
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  ChartBarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  UserIcon,
  UserCircleIcon,
  CogIcon,
  XMarkIcon,
  InboxIcon,
  PencilIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar({
  action,
}: {
  action: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [open, setOpen] = React.useState(0);
  const [showMenu, setShowMenu] = React.useState(true);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {showMenu ? (
        <Card className="relative top-0 h-screen w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 z-10 ">
          <div className="mb-2 p-4 flex flex-row justify-between items-center">
            <Typography variant="h1" color="blue-gray">
              <div className="flex justify-start align-start h-[100px] items-start flex-col w-[100px]">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full text-primary"
                />
              </div>
            </Typography>
            <button onClick={() => action(false)} className="p-1   lg:hidden">
              <XMarkIcon className="h-7 w-7 text-primary font-bolder " />
            </button>
          </div>
          <List className="flex flex-col space-y-1 ">
            <ListItem className="flex items-center hover:text-primary  text-xl">
              <ListItemPrefix>
                <ChartBarIcon className="h-6 w-6 mr-2" />
              </ListItemPrefix>
              <Link to="/dashboard" className="">
                Dashboard
              </Link>
            </ListItem>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }` }
                />
              }
            >
              <ListItem className="p-0  text-xl" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3 hover:text-primary"
                >
                  <ListItemPrefix>
                    <UserIcon className="h-6 w-6 mr-2" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal  text-xl">
                    Recipients
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {open === 2 && (
                <AccordionBody className="py-1 pl-5">
                  <List className="pl-5">
                    <ListItem className="border-b-0 p-3 hover:text-primary">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <NavLink to="/dashboard/users" className="  text-xl">
                List All
              </NavLink>
                    </ListItem>
                    <ListItem className="border-b-0 p-3 hover:text-primary  text-xl">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Create
                    </ListItem>
                  </List>
                </AccordionBody>
              )}
            </Accordion>
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 3 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3   hover:text-primary"
                >
                  <ListItemPrefix>
                    <UserGroupIcon className="h-6 w-6 mr-2" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal  text-xl">
                    Recipient Group
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {open === 3 && (
                <AccordionBody className="py-1 pl-5">
                  <List className="pl-5">
                    <ListItem className="hover:text-primary  text-xl">
                      <ListItemPrefix>
                        <ChevronRightIcon
                          strokeWidth={3}
                          className="h-3 w-5 "
                        />
                      </ListItemPrefix>
                      List all
                    </ListItem>
                    <ListItem className="hover:text-primary  text-xl">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Create
                    </ListItem>
                  </List>
                </AccordionBody>
              )}
            </Accordion>
            <Accordion
              open={open === 4}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 4 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 4}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-b-0 p-3 hover:text-primary  text-xl"
                >
                  <ListItemPrefix>
                    <i className="fa-solid fa-message h-6 w-6 mr-2" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal  text-xl">
                    Messages
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {open === 4 && (
                <AccordionBody className="py-1 pl-5">
                  <List className="pl-5">
                    <ListItem className="hover:text-primary">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <NavLink to="/dashboard/send-message" className="  text-xl">
                        Send
                      </NavLink>
                    </ListItem>
                    <ListItem className="hover:text-primary  text-xl">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Reports
                    </ListItem>
                  </List>
                </AccordionBody>
              )}
            </Accordion>
           
            <hr className="my-2 border-blue-gray-50" />

            <ListItem className="flex items-center hover:text-primary  text-xl">
              <ListItemPrefix>
                <CogIcon className="h-6 w-6 mr-2" />
              </ListItemPrefix>
              <NavLink to="/dashboard/settings" className="">
                Settings
              </NavLink>
            </ListItem>
            <ListItem className="flex items-center hover:text-primary  text-xl">
              <ListItemPrefix>
                <UserIcon className="h-6 w-6 mr-2" />
              </ListItemPrefix>
              <NavLink to="/dashboard/profile" className="">
                Profile
              </NavLink>
            </ListItem>

          </List>
        </Card>
      ) : (
        <button className="fixed top-4 right-4 z-20 rounded-md bg-blue-gray-900 text-primary p-2">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      )}
    </>
  );
}
