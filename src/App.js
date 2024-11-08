import React, { useContext } from "react";
import { ThemeContext } from "./contexts/theme/ThemeContext";
import ThemeToggleButton from "./contexts/theme/ThemeToggleButton";
import { DataContext } from "./contexts/data/DataContext";
import DisplayData from "./contexts/data/DisplayData";

const App = () => {
  // Access context data using useContext hook
  const { theme } = useContext(ThemeContext);
  const {fetchData} = useContext(DataContext)

  return (
    <>
      <div className={`app ${theme}`}>
        <h1>React Context API Example</h1>
        {/* <p>The current theme is <strong>{theme}</strong></p> */}
        <ThemeToggleButton />
      </div>

      <div>
        <h2>Fetching data from a fake API</h2>
        <button onClick={fetchData}>Refresh data</button>
        <DisplayData />
      </div>
    </>
    
  );
};

// Wrap the app with ThemeProvider
export default App;