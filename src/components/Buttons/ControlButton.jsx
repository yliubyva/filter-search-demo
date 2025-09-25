import './Buttons.scss';

export const ControlButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`button control-button ${isActive && 'control-button__active'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
