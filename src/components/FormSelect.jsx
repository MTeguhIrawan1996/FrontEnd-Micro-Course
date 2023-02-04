import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FormSelect = ({
  children,
  name,
  onClick,
  value,
  styleInput,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const selectWrapper = useRef(null);

  useEffect(() => {
    const clickOutSide = (e) => {
      if (selectWrapper && !selectWrapper.current.contains(e.target))
        setOpen(false);
    };

    window.addEventListener("mousedown", clickOutSide);
    return () => {
      window.removeEventListener("mousedown", clickOutSide);
    };
  });

  return (
    <>
      <div className="block lg:w-[80%] w-full relative" ref={selectWrapper}>
        <span className="text-secondary-black block mb-2 first-letter:uppercase">
          {name}
        </span>
        <div
          className={`flex justify-between items-center px-4 py-2 bg-white text-sm font-normal w-full max-w-full drop-shadow-lg group cursor-pointer ${
            styleInput ? styleInput : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          {value ? (
            <span className="font-normal text-primary-hover first-letter:uppercase">
              {value}
            </span>
          ) : (
            <span className="font-light text-zinc-400">{placeholder}</span>
          )}
          <ChevronDownIcon
            className={`h-4 w-4 text-zinc-700 group-hover:text-zinc-400 ${
              open && "rotate-180"
            }`}
          />
        </div>
        <div
          className={`absolute left-0 w-full z-20 border-solid border-[1px] bg-white border-secondary-black mt-2 drop-shadow-lg overflow-y-auto transition-all duration-300 delay-0 ease-linear ${
            open ? "block" : "hidden"
          }`}
        >
          {children.map((option, i) => (
            <div
              className="px-4 py-2 cursor-pointer hover:bg-secondary-black hover:text-white text-sm font-normal transition-all delay-0 duration-[0.1s] ease-linear"
              key={i}
              onClick={() => {
                onClick({ target: { name, value: option.props.value } });
                setOpen(false);
              }}
            >
              {option.props.children}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FormSelect;
