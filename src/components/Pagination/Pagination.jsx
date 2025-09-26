import { PaginationButton } from '../Buttons/PaginationButton';
import './Pagination.scss';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  handleItemsPerPageChange,
  handleStep,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__controls">
        <PaginationButton
          label="First"
          onClick={() => onPageChange(1)}
          isDisabled={currentPage === 1}
        />
        <PaginationButton
          label="Prev"
          onClick={handlePrevPage}
          isDisabled={currentPage === 1}
        />

        {pageNumbers.map((number) => (
          <PaginationButton
            key={number}
            isActive={number === currentPage}
            label={number}
            onClick={() => onPageChange(number)}
          />
        ))}

        <PaginationButton
          label="Next"
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
        />
        <PaginationButton
          label="Last"
          onClick={() => onPageChange(totalPages)}
          isDisabled={currentPage === totalPages}
        />
      </div>
      <div className="results-per-page">
        <label className="results-per-page__label">Results per page</label>
        <div className="results-per-page__field">
          <input
            className="results-per-page__input"
            type="number"
            name="numberInput"
            id="numberInput"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            step={1}
            min={1}
          />
          <div className="results-per-page__value-controls">
            <button
              className="results-per-page__value-control"
              onClick={() => handleStep('up')}
              title="Increase value"
            >
              ▲
            </button>
            <button
              className="results-per-page__value-control"
              onClick={() => handleStep('down')}
              title="Decrease value"
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
