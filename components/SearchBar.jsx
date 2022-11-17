import React from "react";
import {IoIosArrowDropright as ArrowIcon} from "react-icons/io"

const SearchBar = () => {
  return (
    <div className="bg-[#3A8891] text-white w-full flex justify-center items-center py-6 px-10 flex-col lg:flex-row">
      <div className="flex flex-col md:mr-0 lg:mr-12 xl:mr-16">
        <div className="flex items-center md:items-end flex-col md:flex-row ">
          <div className="mb-3 md:mr-16 lg:mr-12 xl:mr-16 w-screen md:w-fit px-5 md:px-0">
            <p>Name</p>
            <input
              type="text"
              placeholder="Insert Pokemon Name"
              className="bg-white text-black w-full md:w-48 lg:w-[250px] rounded-md h-9 px-3"
            />
          </div>
          <div className="w-screen md:w-48 lg:w-[250px] px-5 md:px-0 md:mr-16 lg:mr-12 xl:mr-16">
            <select
              name="generation"
              id="generation"
              className="bg-white text-black rounded-md h-9 px-3 mb-3  w-full "
            >
              <option value="" disabled selected>Generation Type</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="w-screen md:w-48 lg:w-[250px] px-5 md:px-0 ">
            <select
              name="growth"
              id="growth"
              className="bg-white text-black rounded-md h-9 px-3 mb-3  md:mr-0 xl:mr-16 w-full"
            >
              <option value="" disabled selected>Growth Rate</option>
              <option value="10%">10</option>
              <option value="20%">20</option>
              <option value="30%">30</option>
            </select>
          </div>
        </div>
        <div className="flex items-center md:items-end flex-col md:flex-row ">
          <div className="mb-3 md:mr-16 lg:mr-12 xl:mr-16 w-screen md:w-fit px-5 md:px-0">
            <p>Pokemon Type</p>
            <input
              type="text"
              className="bg-white text-black w-full md:w-48 lg:w-[250px] rounded-md h-9 px-3"
            />
          </div>
          <div className="w-screen md:w-48 lg:w-[250px] px-5 md:px-0 md:mr-16 lg:mr-12 xl:mr-16 ">
            <select
              name="regional"
              id="regional"
              placeholder="Generation Type"
              className="bg-white text-black rounded-md h-9 px-3 mb-3  w-full"
            >
              <option value="" disabled selected>Regional</option>
              <option value="1">Asia</option>
              <option value="2">Europe</option>
              <option value="3">America</option>
              <option value="3">Africa</option>
              <option value="3">Australia</option>
            </select>
          </div>
          <div className="w-screen md:w-48 lg:w-[250px] px-5 md:px-0">
            <select
              name="color"
              id="color"
              className="bg-white text-black rounded-md h-9 px-3 mb-3  w-full"
            >
              <option value="" disabled selected>Color</option>
              <option value="10%">White</option>
              <option value="20%">Yellow</option>
              <option value="30%">Black</option>
              <option value="30%">Blue</option>
            </select>
          </div>
        </div>
      </div>
      <button className="px-3 py-2 bg-white hover:bg-[#3A8891] text-[#3A8891] hover:text-white border-[1px] border-white rounded-md md:rounded-3xl mt-4 w-full max-w-[700px] lg:w-32 flex items-center justify-center lg:mt-0">Search <span className="ml-1"><ArrowIcon/></span></button>
    </div>
  );
};

export default SearchBar;
