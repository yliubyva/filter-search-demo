import { ProductItem } from '../ProductItem/ProductItem';
import './ProductList.scss';

export const ProductList = ({ data }) => {
  return (
    <ul className="product-list">
      {data.map((product) => (
        <ProductItem
          key={product.id}
          specification={product.specification}
          title={product.title}
          location={product.location}
          price={product.price}
        />
      ))}
    </ul>
  );
};
