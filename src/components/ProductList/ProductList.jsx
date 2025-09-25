import { useEffect, useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { Pagination } from '../Pagination/Pagination';
import './ProductList.scss';

export const ProductList = ({ data }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const totalProducts = data.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const indexLastProduct = currentPage * itemsPerPage;
  const indexFirstProduct = indexLastProduct - itemsPerPage;

  const productsOnPage = data.slice(indexFirstProduct, indexLastProduct);

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
  return (
    <>
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
