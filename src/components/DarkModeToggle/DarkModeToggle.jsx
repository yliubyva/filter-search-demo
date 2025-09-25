import './DarkModeToggle.scss';

export const DarkModeToggle = () => {
  return (
    <div className="dark-mode-toggle">
      <span className="dark-mode-toggle__label">Dark Mode</span>
      <label className="dark-mode-toggle__switch">
        <input
          className="dark-mode-toggle__checkbox"
          type="checkbox"
          name="darkMode"
          id="darkModeToggle"
        />
        <span className="dark-mode-toggle__slider"></span>
      </label>
    </div>
  );
};
