const Button = (props) => {
  return (
    <button className={`btn-primary ${props.styles ? props.styles : ""}`}>
      {props.text}
    </button>
  );
};

export default Button;
