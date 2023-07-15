import React, { SetStateAction, useEffect, useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Redux/store";
import UserThunk from "../Redux/actions/user";
import bar from "../assets/menu.png";
import { Link, useNavigate } from "react-router-dom";
import { showSuccessMessage } from "../utils/toast";
import { DarkButton } from "../utils/darkMode";

function Header({
  action,
}: {
  action: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { error, errorMessage, isLoading, access_token } = useSelector(
    (state: RootState) => state.login
  );
  const { user: data, loading } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !data) navigate("/login");
  }, [data, loading]);

  const dispatch = useDispatch<AppDispatch>();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(UserThunk());
  }, []);

  const logout = (event: any) => {
  
    localStorage.removeItem("Ishema-token");
    location.reload();

    showSuccessMessage("You logged out");
  };
  return (
    <div className="fixed top-0 w-full  flex-row right-0 flex justify-between items-center p-4  bg-gray-200 z-10 shadow">
      <button onClick={() => action(true)} className="p-2">
        {" "}
        <img src={bar} alt="p" />
      </button>
      <div className="flex items-center">
        {loading || !data ? (
      
          <CircularProgress className="mr-3" size={26} />
        ) : (
          <div className="flex flex-col">
            <p
              className="font-bold cursor-pointer tx-xs"
              onClick={handleAvatarClick}
            >
              {data.firstName}
            </p>
            <span
              className="text-gray-600 cursor-pointer text-sm"
              onClick={handleAvatarClick}
            >
              {data.role}
            </span>
          </div>
        )}
        <Avatar
          className="cursor-pointer ml-3"
          alt="User Avatar"
          src="../assets/avatar-icon-images-4 (1).jpg"
          style={{ backgroundColor: "#646EDA", width: "50px", height: "50px" }}
          onClick={handleAvatarClick}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          getContentAnchorEl={null}
        >
          <Link to="/dashboard/profile">
            <MenuItem onClick={handleMenuClose}>
              <div className="flex flex-row space-x-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
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
                <p>Edit Profile</p>
              </div>
            </MenuItem>
          </Link>

          <MenuItem onClick={logout}>
            <div className="flex flex-row space-x-4">
              {" "}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <p>Logout</p>
            </div>
          </MenuItem>
          <MenuItem>
            <div className="flex items-center gap-3 p-3 border-b border-t  text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base text-primary">
              <DarkButton />
              Dark Mode
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
