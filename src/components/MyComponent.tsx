import React from "react";

export default function MyComponent() {
  return <MyButton onClick={handleClick} />;
}

function handleClick(event) {
  console.log("Synthetic event:", event); // React event
  console.log("Native event:", event.nativeEvent); // actual DOM event
}

function MyButton(props) {
  return (
    <button
      onClick={props.onClick} // ✅ correct prop
      style={{ backgroundColor: "red", height: "20px", width: "20px" }}
    >
      Click
    </button>
  );
}
