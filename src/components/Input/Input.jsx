import "./styles.css";

function Input({ inputData }) {
  const { type, name, placeholder } = inputData;

  const inputId = name === "Email" ? "email-id" : "password-id";

  // return <button className={button-component ${buttonClass}}>{buttonName}</button>;
  console.log(inputId);

  return (
    <div className="input-wrapper">
      <label htmlFor={inputId}>{name}</label>
      <input
        className="input-class"
        id={`input-id ${inputId}`}
        name={name}
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default Input;
