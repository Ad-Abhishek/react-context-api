import React, { useContext } from "react";
import { ThemeContext } from "./contexts/theme/ThemeContext";
import ThemeToggleButton from "./contexts/theme/ThemeToggleButton";

const App = () => {
  // Access context data using useContext hook
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>React Context API Example</h1>
      {/* <p>The current theme is <strong>{theme}</strong></p> */}
      <ThemeToggleButton />
    </div>
  );
};

// Wrap the app with ThemeProvider
export default App;