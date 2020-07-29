import React from 'react'

function Products() {
    const products = ["Learning React","Pro React","Beginning React"];
    const listProducts = products.map((product,idx) =>
    <li key={product.toString()}>{idx+1} {product}</li>
    );
    return (
        <div>
            <ul>{listProducts}</ul>    
        </div>
    );
    }

export default Products
