import './ProductItem.scss';

export const ProductItem = ({ category, title, location, price }) => {
  return (
    <li className="product-item">
      <article className="product-item__article">
        <div className="product-item__info">
          <p className="product-item__category">{category}</p>
          <h3 className="product-item__title">{title}</h3>
          <p className="product-item__location">{location}</p>
        </div>
        <span className="product-item__price">${price}</span>
      </article>
    </li>
  );
};
