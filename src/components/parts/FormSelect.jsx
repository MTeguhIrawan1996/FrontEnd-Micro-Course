import React, { useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FormSelect = ({
  children,
  name,
  onClick,
  value,
  styleInput,
  placeholder,
  width,
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
      <div
        className={`relative block w-full lg:w-[80%] ${width ?? width}`}
        ref={selectWrapper}
      >
        <span className="mb-2 block text-secondary-black first-letter:uppercase">
          {name}
        </span>
        <div
          className={`group flex w-full max-w-full cursor-pointer items-center justify-between bg-white px-4 py-2 text-sm font-normal drop-shadow-lg ${
            styleInput ? styleInput : ""
          }`}
          onClick={() => setOpen((prev) => !prev)}
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
          className={`absolute left-0 z-20 max-h-40 w-full origin-top-right translate-y-1 transform overflow-y-auto border-[1px] border-solid border-secondary-black bg-white drop-shadow-lg transition-all duration-300 ${
            open ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {children.map((option, i) => (
            <div
              className="cursor-pointer px-4 py-2 text-sm font-normal transition-all delay-0 duration-[0.1s] ease-linear hover:bg-secondary-black hover:text-white"
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
