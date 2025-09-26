import { useContext } from 'react';
import { firstLetterToUpperCase } from '../../utils/string';
import { ThemeContext } from '../../App/App';
import './DarkModeToggle.scss';

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark-mode-toggle">
      <span className="dark-mode-toggle__label">
        {firstLetterToUpperCase(theme)} Mode
      </span>
      <label htmlFor='modeToggle' className="dark-mode-toggle__switch">
        <input
          className="dark-mode-toggle__checkbox"
          type="checkbox"
          name="darkMode"
          id="modeToggle"
          onChange={() => toggleTheme()}
          aria-label="Switch theme"
        />
        <span className="dark-mode-toggle__slider"></span>
      </label>
    </div>
  );
};
