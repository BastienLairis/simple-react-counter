const Button = ({ counter, setCounter, calculate }) => {
  return (
    <div>
      {calculate === "+" ? (
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      ) : (
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      )}
    </div>
  );
};

export default Button;
