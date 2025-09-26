import './Buttons.scss';

export const PaginationButton = ({ label, isActive, onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      className={`button pagination-button ${isActive && 'pagination-button__active'}`}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};
