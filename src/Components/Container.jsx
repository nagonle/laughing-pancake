import React, { useState, useEffect } from 'react';
import './Container.css';

import Products from './Products';

const Container = ({ searchData }) => {
	console.log('-- container --')

    const [searchedText] = [searchData.searchedText];

	const data = searchData.data;

    const [products, setProducts] = useState(data);

	useEffect(() => {
		console.log('product card - useEffect :')
		console.log(searchData.data)
		setProducts(searchData.data);
	}, [searchData]);

    return (
        <div>
            <div className="info">
                <div className="phrase">Resultados para: {searchedText}</div>
                <div className="sortby">Ordenar por:
					<select name="sort">
                        <option value="select">Seleccione una opción</option>
						<option value="ascPrice">No hago nada 1</option>
                        <option value="descPrice">No hago nada 2</option>
                    </select>
				</div>
            </div>
            <div className="container">
                <Products allProducts={products}/>
            </div>
        </div>
    )
}

export default Container;