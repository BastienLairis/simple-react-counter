const Decrement = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(counter - 1);
      }}
    >
      -
    </button>
  );
};

export default Decrement;
