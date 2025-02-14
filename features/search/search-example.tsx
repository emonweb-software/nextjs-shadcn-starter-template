"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Icons from "@/custom/icons";
import searchData from "@/seeds/search-data";

const SearchBox = (): React.ReactElement => {
  const [isSearch, setIsSearch] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchContent, setSearchContent] = React.useState("");
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
  const callApi = (value: string): void => {
    console.log("call api with content", value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedCallApi = React.useCallback(debounce(callApi, 1000), []);

  const handleChangeSearchContent = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchContent(e.target.value);
    debouncedCallApi(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") router.push(`/search?param=${isSearchContent}`);
  };
  const filteredData = searchData.filter(item =>
    item.toLowerCase().includes(isSearchContent.toLowerCase())
  );
  const displayData = filteredData.length > 0 ? filteredData : ["No data"];
  return (
    <div className="relative w-fit">
      <Icons.search
        className={`size-[22px] text-gray-600 absolute ${isOpen ? "top-1/2 left-[14px] -translate-y-1/2" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "} duration-100 cursor-pointer`}
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <input
        className={`${isOpen ? "flex-1 w-[180px] sm:w-[240px]  md:w-[330px] p-[12px_45px_12px_45px]" : "w-0 border-none outline-none p-[12px_10px_12px_45px]"} leading-[20px] text-[15px] duration-700 md:duration-500 outline-none border-[1px] border-gray-200 rounded-lg placeholder:text-black/80 placeholder:text-[14px] focus:outline focus:outline-gray-500 focus:outline-offset-0`}
        placeholder="Enter search content"
        type="text"
        value={isSearchContent}
        onChange={handleChangeSearchContent}
        onFocus={() => setIsSearch(true)}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setTimeout(() => {
            setIsSearch(false);
          }, 200);
        }}
      />
      {isSearch && (
        <div className="absolute top-[calc(100%+18px)] left-0 w-full ">
          <div className="px-[20px] bg-white rounded-lg h-auto max-h-[300px] sm:h-auto shadow-[-6px_8px_16px_rgba(58,42,152,.1)] overflow-y-scroll">
            <ul className="flex flex-col">
              {displayData.map((item, idx) => (
                <li key={idx} className="">
                  <Link
                    className="flex justify-between px-[14px] py-[12px] rounded-md hover:bg-gray-100"
                    href={`/search?param=${item}`}>
                    <div className="flex items-center">
                      <span className="font-medium text-[18px]"> {item}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {isOpen && (
        <Icons.close
          className="z-[1] size-[20px] text-gray-500 hover:text-black absolute top-1/2 right-[12px] -translate-y-1/2 cursor-pointer"
          onClick={(): void => {
            setIsOpen(false);
            setSearchContent("");
          }}
        />
      )}
    </div>
  );
};
export default SearchBox;
