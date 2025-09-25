import './Buttons.scss';

export const PaginationButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button pagination-button ${isActive && 'pagination-button__active'}`}
    >
      {label}
    </button>
  );
};
