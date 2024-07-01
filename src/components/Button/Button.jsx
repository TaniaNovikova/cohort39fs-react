import "./styles.css";

function Button({ buttonData }) {
  const { type, buttonName } = buttonData;

  return (
    <button className="button-component" type={type}>
      {/* Children example */}
      {/* {children} */}
      {buttonName}
    </button>
  );
}

export default Button;
