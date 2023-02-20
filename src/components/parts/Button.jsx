const Button = (props) => {
  return (
    <button
      className={`btn-primary ${props.styles ? props.styles : ""}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
