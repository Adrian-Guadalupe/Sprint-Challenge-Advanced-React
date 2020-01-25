import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const NavBar = () => {
   const [darkMode, setDarkMode] = useDarkMode(false);
   const toggleMode = e => {
     e.preventDefault();
     setDarkMode(!darkMode);
   };

   return (
      <div>
         <h2>Most Searched Players</h2>
         <div className="dark-mode__toggle">
            <div data-testid='btn'
               onClick={toggleMode}
               className={darkMode ? 'toggle toggled' : 'toggle'}
            />
         </div>
      </div>
   )
}

export default NavBar;