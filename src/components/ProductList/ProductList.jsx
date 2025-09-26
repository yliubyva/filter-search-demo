import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { Pagination } from '../Pagination/Pagination';
import { ControlButton } from '../Buttons/ControlButton';
import { FilterDropdown } from '../FilterDropdown/FilterDropdown';
import './ProductList.scss';

export const ProductList = ({ data }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState('');
  const [selectedSpecifications, setSelectedSpecifications] = useState([]);
  const [selectedRetailers, setSelectedRetailers] = useState([]);
  const [isSpecDropdownOpen, setIsSpecDropdownOpen] = useState(false);
  const [isRetailerDropdownOpen, setIsRetailerDropdownOpen] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, sortKey, selectedSpecifications, selectedRetailers]);

  const getUniqueValues = useCallback((products, key) => {
    return [...new Set(products.map((product) => product[key]))];
  }, []);

  const uniqueSpecifications = useMemo(
    () => getUniqueValues(data, 'specification'),
    [data, getUniqueValues],
  );
  const uniqueRetailers = useMemo(
    () => getUniqueValues(data, 'retailer'),
    [data, getUniqueValues],
  );

  const filteredProducts = useMemo(() => {
    return data.filter((product) => {
      const matchesSpecification =
        selectedSpecifications.length === 0 ||
        selectedSpecifications.includes(product.specification);

      const matchesRetailer =
        selectedRetailers.length === 0 ||
        selectedRetailers.includes(product.retailer);

      return matchesSpecification && matchesRetailer;
    });
  }, [data, selectedSpecifications, selectedRetailers]);

  const sortedProducts = useMemo(() => {
    const sortedData = [...filteredProducts];

    if (sortKey === 'price' || sortKey === 'distance') {
      sortedData.sort((a, b) => a[sortKey] - b[sortKey]);
    } else if (sortKey === 'dateListed') {
      sortedData.sort((a, b) => {
        const dateA = new Date(a.dateListed).getTime();
        const dateB = new Date(b.dateListed).getTime();
        return dateB - dateA;
      });
    }

    return sortedData;
  }, [sortKey, filteredProducts]);

  const isSpecFilterActive = selectedSpecifications.length > 0;
  const isRetailerFilterActive = selectedRetailers.length > 0;

  const totalProducts = sortedProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const indexLastProduct = currentPage * itemsPerPage;
  const indexFirstProduct = indexLastProduct - itemsPerPage;

  const productsOnPage = sortedProducts.slice(
    indexFirstProduct,
    indexLastProduct,
  );

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage > 0 ? newItemsPerPage : 1);
  };

  const handleStep = (direction) => {
    setItemsPerPage((prevValue) => {
      const step = 1;
      const min = 1;
      let newValue = direction === 'up' ? prevValue + step : prevValue - step;

      return newValue < min ? min : newValue;
    });
  };

  const handleSortChange = (key) => {
    setSortKey(key);
  };

  const toggleDropdown = (setter) => setter((prev) => !prev);

  const handleFilterChange = (key, value) => {
    const setter =
      key === 'specification'
        ? setSelectedSpecifications
        : setSelectedRetailers;

    setter((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };
  return (
    <>
      <div className="sort-bar">
        <span className="sort-bar__label">Order by</span>
        <div className="sort-bar__controls">
          <ControlButton
            label="lowest price"
            isActive={sortKey === 'price'}
            onClick={() => handleSortChange('price')}
          />
          <ControlButton
            label="Closest"
            isActive={sortKey === 'distance'}
            onClick={() => handleSortChange('distance')}
          />
          <ControlButton
            label="Newest Listings"
            isActive={sortKey === 'dateListed'}
            onClick={() => handleSortChange('dateListed')}
          />
          <div className="sort-bar__filter">
            <ControlButton
              label="Specification"
              isActive={isSpecFilterActive}
              onClick={() => toggleDropdown(setIsSpecDropdownOpen)}
            />
            <FilterDropdown
              isOpen={isSpecDropdownOpen}
              uniqueValues={uniqueSpecifications}
              selectedValues={selectedSpecifications}
              filterKey="specification"
              handleFilterChange={handleFilterChange}
            />
          </div>

          <div className="sort-bar__filter">
            <ControlButton
              label="Retailer"
              isActive={isRetailerFilterActive}
              onClick={() => toggleDropdown(setIsRetailerDropdownOpen)}
            />
            <FilterDropdown
              isOpen={isRetailerDropdownOpen}
              uniqueValues={uniqueRetailers}
              selectedValues={selectedRetailers}
              filterKey="retailer"
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        handleItemsPerPageChange={handleItemsPerPageChange}
        handleStep={handleStep}
      />
      <ul className="product-list">
        {productsOnPage.map((product) => (
          <ProductItem
            key={product.id}
            specification={product.specification}
            title={product.title}
            location={product.location}
            price={product.price}
          />
        ))}
      </ul>
    </>
  );
};
