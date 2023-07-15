import React from "react";

import SendOne from "../components/Sendone";
import SendMany from "../components/SendMany";
import SendFile from "../components/SendFile";

function Dashboard() {
  return (
    <div className="flex  flex-row flex-wrap justify-start mt-10 py-20 gap-3 w-[100%] max-h-[90vh] overflow-scroll overflow-x-hidden mx-8 ">
      <SendOne />
      <SendMany />
      <SendFile />
    </div>
  );
}

export default Dashboard;
