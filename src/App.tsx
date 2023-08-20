import React from "react";
import Container from "./components/Container";

const App: React.FC = () => {
  const styles = {
    border: "1px solid",
  };

  return (
    <div>
      <Container styles={styles} />
    </div>
  );
};

export default App;
