import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result.result);
  };
  console.warn(products);
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        <li>SL NO</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Brabd</li>
      </ul>
      {products.map((item, index) => (
        <ul>
          <li>{index + 1}</li>
          <li>{item?.name}</li>
          <li>TK.{item?.price}</li>
          <li>{item?.category}</li>
          <li>{item?.brand}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
