import React, { useState } from 'react';
import './styles/main.scss';
import AppRouter from './router';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
<div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      
      <AppRouter />
    </div>
  );
};

export default App;
