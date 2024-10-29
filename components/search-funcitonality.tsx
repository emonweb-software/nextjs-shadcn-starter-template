"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback } from "react";
const tempData = [
  "Viet Nam",
  "Hong Kong",
  "Thailand",
  "Taiwan",
  "Singapore",
  "South Korea",
  "Japan",
  "Denmark",
  "Sweden",
  "Poland",
  "Portugal",
  "Ireland",
  "Czech Republic",
  "Austria",
  "Belize",
  "Belgium",
  "United Kingdom",
  "France",
  "Finland",
  "Spain",
  "Switzerland",
];

interface SearchBoxProps {
  dataDefault: string[];
  setData: (data: string[]) => void;
  api: any;
}
const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchContent, setSearchContent] = useState("");

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const callApi = (value: string) => {
    alert(`call api with content: ${value}`);
  };

  const debouncedCallApi = useCallback(debounce(callApi, 1000), []);

  const handleChangeSearchContent = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchContent(e.target.value);
    debouncedCallApi(e.target.value);
  };
  const filteredData = tempData.filter(item =>
    item.toLowerCase().includes(isSearchContent.toLowerCase())
  );
  const displayData = filteredData.length > 0 ? filteredData : ["No data"];

  return (
    <div className="relative max-w-[490px] w-full">
      <Search className="absolute top-1/2 left-[25px] -translate-y-1/2" />
      <input
        type="text"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onChange={handleChangeSearchContent}
        className="p-[20px_32px_20px_70px] w-full h-[64px] outline-none rounded-xl bg-white shadow-[-6px_8px_16px_rgba(58,42,152,.1)] placeholder:text-black/50 border-[2px] border-[#F5F5F8] focus:border-[2px] focus:border-primary focus:shadow-none duration-200"
        placeholder="Enter search content"
      />
      {isOpen && (
        <div className="absolute top-[calc(100%+18px)] left-0 w-full ">
          <div className="px-[20px] bg-white rounded-lg h-auto max-h-[300px] sm:h-auto shadow-[-6px_8px_16px_rgba(58,42,152,.1)] overflow-y-scroll">
            <ul className="flex flex-col">
              {displayData.map((item, idx) => {
                return (
                  <li key={idx} className="">
                    <Link
                      href="#"
                      className="flex justify-between px-[14px] py-[12px] rounded-md hover:bg-gray-100">
                      <div className="flex items-center">
                        <span className="font-medium text-[18px]"> {item}</span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchBox;
