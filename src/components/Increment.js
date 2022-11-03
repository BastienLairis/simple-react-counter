const Increment = ({ counter, setCounter }) => {
  //   const { counter, setCounter } = props;
  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Increment;
