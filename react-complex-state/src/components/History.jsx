function History({ allClicks }) {
  if (allClicks.length === 0) {
    return <div>Please press a button! </div>;
  }
  return <div>Button History: {allClicks.join("")}</div>;
}

export default History;
