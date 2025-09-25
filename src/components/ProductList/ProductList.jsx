import { useEffect, useMemo, useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { Pagination } from '../Pagination/Pagination';
import { ControlButton } from '../Buttons/ControlButton';
import './ProductList.scss';

export const ProductList = ({ data }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState('');

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, sortKey]);

  const sortedProducts = useMemo(() => {
    const sortedData = [...data];

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
  }, [sortKey, data]);

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
