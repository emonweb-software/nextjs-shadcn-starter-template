"use client";
import { Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
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

// interface SearchBoxProps {
//   dataDefault: string[];
//   setData: (data: string[]) => void;
//   api: any;
// }


const SearchBox = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchContent, setSearchContent] = useState("");
  const router = useRouter();
const debounce = (func: (value: string) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (args: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(args);
    }, delay);
  };
};
  const callApi = (value: string) => {
    console.log("call api with content", value);
  };

  const debouncedCallApi = useCallback(debounce(callApi, 1000), []);

  const handleChangeSearchContent = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchContent(e.target.value);
    debouncedCallApi(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?param=${isSearchContent}`);
    }
  };
  const filteredData = tempData.filter(item =>
    item.toLowerCase().includes(isSearchContent.toLowerCase())
  );
  const displayData = filteredData.length > 0 ? filteredData : ["No data"];
  return (
    <div className="relative w-fit">
      <Search
        onClick={() => {
          setIsOpen(true);
        }}
        className={`size-[22px] text-gray-600 absolute ${isOpen ? "top-1/2 left-[14px] -translate-y-1/2" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "} duration-100 cursor-pointer`}
      />
      <input
        type="text"
        onFocus={() => setIsSearch(true)}
        onBlur={() => {
          setTimeout(() => {
            setIsSearch(false);
          }, 200);
        }}
        value={isSearchContent}
        onChange={handleChangeSearchContent}
        onKeyDown={handleKeyDown}
        className={`${isOpen ? "flex-1 w-[180px] sm:w-[240px]  md:w-[330px] p-[12px_45px_12px_45px]" : "w-0 border-none outline-none p-[12px_10px_12px_45px]"} leading-[20px] text-[15px] duration-700 md:duration-500 outline-none border-[1px] border-gray-200 rounded-lg placeholder:text-black/80 placeholder:text-[14px] focus:outline focus:outline-gray-500 focus:outline-offset-0`}
        placeholder="Enter search content"
      />
      {isSearch && (
        <div className="absolute top-[calc(100%+18px)] left-0 w-full ">
          <div className="px-[20px] bg-white rounded-lg h-auto max-h-[300px] sm:h-auto shadow-[-6px_8px_16px_rgba(58,42,152,.1)] overflow-y-scroll">
            <ul className="flex flex-col">
              {displayData.map((item, idx) => {
                return (
                  <li key={idx} className="">
                    <Link
                      href={`/search?param=${item}`}
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
      {isOpen && (
        <X
          onClick={() => {
            setIsOpen(false);
            setSearchContent("");
          }}
          className="z-[1] size-[20px] text-gray-500 hover:text-black absolute top-1/2 right-[12px] -translate-y-1/2 cursor-pointer"
        />
      )}
    </div>
  );
};
export default SearchBox;
