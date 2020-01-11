import React from "react";
function Square(props) {
  const [color, setColor] = React.useState(props.color);
  React.useEffect(() => {
    setColor(props.color);
  });
  return (
    <div
      className="square"
      style={{
        backgroundColor:
          color === 0 ? "#fff" : color === 1 ? "#ff0000" : "#008000"
      }}
    />
  );
}

// red #ff0000
// green #008000
export default Square;
