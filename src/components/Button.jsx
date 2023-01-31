const Button = (props) => {
  return (
    <button
      className={`bg-secondary-color px-6 py-2 rounded-sm text-white font-medium z-10 hover:bg-primary-hover focus:ring-2 focus:ring-sky-300 transition-all ease-cubic-bezier duration-300 delay-0 active:bg-secondary-color drop-shadow-lg ${props.styles}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
