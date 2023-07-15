import { EyeIcon, EyeSlashIcon,ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
function KeyInput() {
  const [apiKeySecretVisible, setApiKeySecretVisible] = useState(false);

  const toggleApiKeySecretVisibility = () => {
    setApiKeySecretVisible(!apiKeySecretVisible);
  };

  
  return (
    <div className="flex items-center border rounded mb-1">
      <Input
        id="apiKeySecret"
        className="mr-2 w-full h-9  border border-none text-gray-500 "
        type={apiKeySecretVisible ? "text" : "password"}
        name="apiKeySecret"
        value="YOUR_API_KEY_SECRET"
        
        disabled
      />
      <button
        className="text-gray-500 focus:outline-none mx-2"
        onClick={toggleApiKeySecretVisibility}
      >
        {apiKeySecretVisible ? (
          <EyeIcon className="h-6 w-6" />
        ) : (
          <EyeSlashIcon className="h-6 w-6" />
        )}
      </button>
      <button
        className="text-gray-500 focus:outline-none mx-2"
     
      >
      <ClipboardDocumentIcon className="h-6 w-6" />
      </button>
      
    </div>
  );
}

export default KeyInput;
