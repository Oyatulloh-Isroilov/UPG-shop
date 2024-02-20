import React from 'react';
import './index.css';
import data from '../assets/data.json';

function Product(props) {
    const products = props.products || [];

    return (
        <div className="items">
            {products.map(product => ( 
                <div key={product.id} className="item">
                    <div className="product">
                        <img src={product.images[0]} alt={product.title} />
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}$</p>
                        <p>{product.brand}</p>
                        <p>{product.category}</p>
                        <p>{product.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
