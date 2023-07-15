import React from "react";

function Footer() {
  return (
    <footer className="bg-primary  text-white py-4 text-center absolute bottom-0 w-full shadow">
      <div className="container mx-auto">
        <p className="text-x">
          COPYRIGHT © 2023{" "}
          <span className="font-bold cursor-pointer hover:underline">
            Ishemahub
          </span>
          , All rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
