import React from "react";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "100px auto 2fr",
};

const itemStyle = {
  border: "1px solid black",
  padding: "10px",
};

function App() {
  return (
    <div style={containerStyle}>
      <div style={itemStyle}>Item 1</div>
      <div style={itemStyle}>Item 2</div>
      <div style={itemStyle}>Item 3</div>
    </div>
  );
}

export default App;
