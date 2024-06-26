import "./styles.css";

function Button({ children, type, buttonName = "Send" }) {
  const buttonClass = type === "Delete" ? "delete-button" : "main-button";
  console.log(children, type, buttonName);
  return (
    <button className={`button-component ${buttonClass}`}>
      {/* Children example */}
      {/* {children} */}
      {buttonName}
    </button>
  );
}

export default Button;
