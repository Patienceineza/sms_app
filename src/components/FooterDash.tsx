import React from "react";

function FooterD() {
  return (
    <footer className="bg-gray-300 text-gray-600 py-4 text-center fixed bottom-0 w-full   ">
      <div className="container flex flex-row justify-start items-start ml-3">
        <p className="text-x">
          COPYRIGHT © 2023{" "}
          <span className="font-bold cursor-pointer hover:underline text-primary ">
            Ishemahub
          </span>
          , All rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterD;
