import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({title, data, selected, setSelected }) => {
  const [countries, setCountries] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  
  return (
    <div className="w-full font-medium relative">
      <div 
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded-md border-2 ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : title}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 w-full overflow-y-auto absolute top-full left-0 z-10 ${
          open ? "max-h-60 border-2 rounded-md" : "max-h-0"
        }`}
      >
        
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm  hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Selector;
