import './Buttons.scss';

export const CloseButton = () => {
  return (
    <button className="close-button">
      <div className="close-icon">
        <span className="close-icon__line close-icon__line--one"></span>
        <span className="close-icon__line close-icon__line--two"></span>
      </div>
    </button>
  );
};
