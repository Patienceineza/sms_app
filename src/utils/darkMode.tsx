import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  setFetchMethod,
} from "darkreader";
import React, { useState, useEffect } from "react";

const saveDarkPreference = (value: any) => {
  localStorage.setItem("dark", value);
};

export function DarkButton() {
  const darkStored = localStorage.getItem("dark") || "false";
  const [dark, setDark] = useState(darkStored);

  useEffect(() => {
    setFetchMethod(window.fetch);
    dark === "true"
      ? enableDarkMode({
          brightness: 100,
          contrast: 100,
          sepia: 10,
        })
      : disableDarkMode();
  }, [dark]);

  return (
    <div className="flex flex-row justify-end items-end">
      <label className="relative mx-3 inline-flex items-center cursor-pointer">
        <input
          onClick={() => {
            setDark((prev) => (prev === "false" ? "true" : "false"));
            saveDarkPreference(dark === "false" ? "true" : "false");
          }}
          data-testid="dark-button"
          type="checkbox"
          value=""
          className="sr-only bg-regal-blue peer text-bck-400"
        />
        <div className="w-7 h-4 bg-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute  after:mt-[1.5px] after:ml-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-regal-blue peer-checked:border"></div>
      </label>
    </div>
  );
}
