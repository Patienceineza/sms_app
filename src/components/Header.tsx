import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <div className="flex items-center">
        <Avatar className="mr-2" alt="User Avatar" src="/path/to/avatar.png" />
        <TextField
          className="mr-2"
          placeholder="Search"
          variant="outlined"
          size="small"
        />
        <span>Sample User</span>
      </div>
      <div>
        <Avatar
          className="cursor-pointer"
          alt="User Avatar"
          src="/path/to/avatar.png"
          onClick={handleAvatarClick}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </div>
      <FontAwesomeIcon icon={faBell} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
}

export default Header;
