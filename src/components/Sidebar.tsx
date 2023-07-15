import React from "react";
import logo from "../assets/download.svg";
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
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="fixed top-0 left-0 h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          <div className="flex justify-start align-start h-[15vh] w-full">
            <img src={logo} alt="logo" className="w-full h-full text-primary" />
          </div>
        </Typography>
      </div>
      <List className="flex flex-col space-y-1">
        <ListItem className="flex items-center hover:text-primary">
          <ListItemPrefix >
            <ChartBarIcon className="h-6 w-6 mr-2" />
          </ListItemPrefix>
          <Link to="/dashboard" >Dashboard</Link>
        </ListItem>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 hover:text-primary"
            >
              <ListItemPrefix>
                <UserIcon className="h-6 w-6 mr-2" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Recipients
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 2 && (
            <AccordionBody className="py-1 pl-5">
              <List className="pl-5">
                <ListItem   className="border-b-0 p-3 hover:text-primary">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  List All
                </ListItem>
                <ListItem   className="border-b-0 p-3 hover:text-primary">
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
              <Typography color="blue-gray" className="mr-auto font-normal">
                Recipient Group
              </Typography>
            </AccordionHeader>
          </ListItem>
          {open === 3 && (
            <AccordionBody className="py-1 pl-5">
              <List className="pl-5">
                <ListItem className="hover:text-primary">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                  </ListItemPrefix>
                  List all
                </ListItem>
                <ListItem className="hover:text-primary">
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
              className="border-b-0 p-3 hover:text-primary"
            >
              <ListItemPrefix>
                <i className="fa-solid fa-message h-6 w-6 mr-2" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
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
                  <Link to="/dashboard/send-message">Send</Link>
                </ListItem>
                <ListItem className="hover:text-primary">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Reports
                </ListItem>
              </List>
            </AccordionBody>
          )}
        </Accordion>
        <ListItem className="flex items-center hover:text-primary">
          <ListItemPrefix>
            <UserGroupIcon className="h-6 w-6 mr-2" />
          </ListItemPrefix>
          <Link to="/dashboard/users">Users</Link>
        </ListItem>
        <hr className="my-2 border-blue-gray-50" />
        
        <ListItem className="flex items-center hover:text-primary">
          <ListItemPrefix>
            <UserCircleIcon className="h-6 w-6 mr-2" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem className="flex items-center hover:text-primary">
          <ListItemPrefix>
            <CogIcon className="h-6 w-6 mr-2" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className="flex items-center hover:text-primary text-primary">
          <ListItemPrefix>
            <PowerIcon className="h-6 w-6 mr-2" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
