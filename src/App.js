import { useContext } from 'react';
import './App.css';
import { ThemeContext } from './context/theme/ThemeContext';
import ToggleThemeButton from './context/theme/ToggleThemeButton';
import { DataContext } from './context/data/DataContext';
import ViewData from './context/data/ViewData';
import { AuthContext } from './context/userAuth/AuthContext';
import { LanguageContext } from './context/languagee/LanguageContext';

function App() {
  const { theme } = useContext(ThemeContext);
  const { fetchUsers } = useContext(DataContext);
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const { language, toggleLanguage, translations } = useContext(LanguageContext);
  return (
    <>
      <div className={`app ${theme}`}>
        <h3>
          Authentication status:{' '}
          {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
        </h3>
        <h3>Toggle the theme</h3>
        <ToggleThemeButton />
      </div>

      <div>
        <h3>this is another component</h3>
        <button onClick={fetchUsers}>Refresh users</button>
        <ViewData />
      </div>

      <div>
        <h3>
          Authentication status:{' '}
          {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
        </h3>
        <button onClick={isAuthenticated ? logout : login}>
          {isAuthenticated ? 'logout' : 'login'}
        </button>
      </div>

      <div>
        <h3>Component for Toggles language(English ⇔ Spanish)</h3>

        <p>{translations[language].message}</p>
        <button onClick={toggleLanguage}>Switch Language</button>
      </div>
    </>
  );
}

export default App;
