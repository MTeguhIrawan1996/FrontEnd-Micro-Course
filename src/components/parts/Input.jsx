const Input = (props) => {
  return (
    <>
      <input
        className={`block w-full max-w-full rounded-none bg-white px-4 py-2 text-sm font-normal outline-0 outline-offset-0 drop-shadow-lg placeholder:font-light valid:text-primary-hover invalid:text-pink-500 hover:outline-none focus:outline-none ${
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
