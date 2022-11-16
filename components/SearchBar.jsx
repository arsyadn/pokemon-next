import React from "react";

const SearchBar = () => {
  return (
    <div className="bg-[#3A8891] flex justify-center items-center">
      <div className="flex flex-col">
        <div className="flex">
          <div>
            <p>Nama</p>
            <input
              type="text"
              placeholder="Insert Pokemon Name"
              className="bg-white"
            />
          </div>
          <div>
            <select
              name="generation"
              id="generation"
              className="bg-white text-black"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <select name="growth" id="growth" className="bg-white text-black">
              <option value="10">10%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
            </select>
          </div>
        </div>
        <div className="flex">
          <div>
            <p>Pokemon Type</p>
            <input type="text" className="bg-white" />
          </div>
          <select name="regional" id="regional" className="bg-white text-black">
            <option value="1">Asia</option>
            <option value="2">Eroupe</option>
            <option value="3">America</option>
            <option value="4">Africa</option>
          </select>
          <select name="color" id="color" className="bg-white text-black">
            <option value="1">White</option>
            <option value="2">Yellow</option>
            <option value="3">Blue</option>
            <option value="4">Red</option>
          </select>
        </div>
      </div>
      <button className="px-3 py-2 bg-white rounded text-black ">Search</button>
    </div>
  );
};

export default SearchBar;
