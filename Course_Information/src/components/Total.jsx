function Total({ parts }) {
  return (
    <p>
      <strong>
        Total of{" "}
        {parts.reduce((a, b) => {
          return a + b.excercises;
        }, 0)}{" "}
        exercises
      </strong>
    </p>
  );
}

export default Total;
