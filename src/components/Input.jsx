const Input = (props) => {
  return (
    <>
      <input
        className={`block px-4 py-2 hover:outline-none focus:outline-none bg-white text-sm font-normal placeholder:font-light w-full max-w-full drop-shadow-lg invalid:text-pink-500 valid:text-primary-hover ${
          props.styleInput ? props.styleInput : ""
        }`}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        autoComplete={props.autoComplete}
      />
    </>
  );
};

export default Input;
