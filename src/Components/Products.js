import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Products.css';

import Pagination from './Pagination';

const ProductCard = ({ allProducts }) => {
    console.log('-- ProductCard --')

    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState(allProducts);

    let totalProducts = products.length;
    console.log('total products:', totalProducts)
    let productsPerPage = 3;


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePage = (pageNumber) => setCurrentPage(pageNumber);
    const handleArrow = (delta, totalPages) => {
        if (delta === 1) {
            if (currentPage !== totalPages)
                setCurrentPage(currentPage + delta)
        }
        else if (delta === -1) {
            if (currentPage !== 1)
                setCurrentPage(currentPage + delta)
        }
    }

    let displayProds = currentProducts.map((item, index) => {
        return <Card item={item} index={index}/>
    });

	useEffect(() => {
		setProducts(allProducts);
        setCurrentPage(1);
	}, [allProducts]);

    return (
        <div>
            <div className="products">
                {displayProds}
            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={totalProducts} handlePage={handlePage} handleArrow={handleArrow}/>
        </div>
    )
}


export default ProductCard;
