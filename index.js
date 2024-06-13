import React from 'react';
import ReactDOM from 'react-dom';

function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="product-details">
        <h2>{name}</h2>
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

const products = [
  { name: 'Product 1', price: 19.99, image: 'product1.jpg' },
  { name: 'Product 2', price: 29.99, image: 'product2.jpg' }
];

ReactDOM.render(
  <div>
    {products.map((product, index) => (
      <Product key={index} name={product.name} price={product.price} image={product.image} />
    ))}
  </div>,
  document.getElementById('products')
);
