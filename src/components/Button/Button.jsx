import "./Button.css";

function Button({ children, type = "button", onClick }) {
  return (
    <button id="button" className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
} // Creates a reusable button component that can be used throughout the application.
// It accepts props for children(previously used text), type, and onClick handler, allowing 
// for flexibility in its usage. The button is styled using an external CSS file.

export default Button;
