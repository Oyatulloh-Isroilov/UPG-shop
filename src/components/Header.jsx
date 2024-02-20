import React, { useState, useEffect } from 'react';
import './index.css';
import data from '../assets/data.json';
import Product from './Product';
import BasicExample from './Dropdown';

function Header() {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProducts = () => {
        const filtered = data.products.filter(product => {
            const minPriceCondition = minPrice === '' || parseInt(product.price) >= parseInt(minPrice);
            const maxPriceCondition = maxPrice === '' || parseInt(product.price) <= parseInt(maxPrice);
            const brandCondition = selectedBrand === '' || product.brand === selectedBrand;
            const ratingCondition = selectedRating === '' || Math.floor(product.rating) === parseInt(selectedRating); // Reytingni filtrlash
            return minPriceCondition && maxPriceCondition && brandCondition && ratingCondition;
        });
        setFilteredProducts(filtered);
    };

    useEffect(() => {
        filterProducts();
    }, [minPrice, maxPrice, selectedBrand, selectedRating]);

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    return (
        <div className="header">
            <div className="shop">
                <div className="logo">
                    <img src="UPG.png" alt="UPG Logo" />
                </div>

                <div className="filterMenu">
                    <div className="rating">
                        <BasicExample setSelectedRating={setSelectedRating} />
                    </div>
                    <div className="prices">
                        <div className="priceMin">
                            <input
                                type="text"
                                placeholder='Kichik narxni kiriting'
                                value={minPrice}
                                onChange={e => setMinPrice(e.target.value)}
                            />
                        </div>
                        <div className="priceMax">
                            <input
                                type="text"
                                placeholder='Katta narxni kiriting'
                                value={maxPrice}
                                onChange={e => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="brand">
                        <select
                            name="brand"
                            id="brand"
                            value={selectedBrand}
                            onChange={e => setSelectedBrand(e.target.value)}
                        >
                            <option value="">Barchasi</option>
                            {data.products.map(product => (
                                <option key={product.id} value={product.brand}>{product.brand}</option>
                            ))}
                        </select>
                    </div>
                    <div className="searchBtn">
                        <button className='searchBtn' onClick={filterProducts}>Search</button>
                    </div>
                </div>
            </div>
            <Product products={filteredProducts} />
        </div>
    );
}

export default Header;