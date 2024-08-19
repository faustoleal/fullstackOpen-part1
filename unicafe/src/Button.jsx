const Button = ({ setValue, value, text }) => {
  return <button onClick={() => setValue(value + 1)}>{text}</button>;
};

export default Button;