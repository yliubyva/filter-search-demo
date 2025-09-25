import { formatPrice } from '../../utils/price';
import './ProductItem.scss';

export const ProductItem = ({ specification, title, location, price }) => {
  return (
    <li className="product-item">
      <article className="product-item__article">
        <div className="product-item__info">
          <p className="product-item__category">{specification}</p>
          <h3 className="product-item__title">{title}</h3>
          <p className="product-item__location">{location}</p>
        </div>
        <span className="product-item__price">{formatPrice(price)}</span>
      </article>
    </li>
  );
};
