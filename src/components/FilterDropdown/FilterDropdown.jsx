import './FilterDropdown.scss';

export const FilterDropdown = ({
  isOpen,
  uniqueValues,
  selectedValues,
  filterKey,
  handleFilterChange,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="filter-dropdown">
      <ul className="filter-dropdown__list">
        {uniqueValues.map((value) => (
          <li key={value} className="filter-dropdown__item">
            <label className="filter-dropdown__label">
              <input
                type="checkbox"
                checked={selectedValues.includes(value)}
                onChange={() => handleFilterChange(filterKey, value)}
              />
              {value}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
