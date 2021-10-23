import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowProduct = () => {

     const [products, setProducts] = useState([]);
     useEffect(() => {
          fetch('http://localhost:5000/products')
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setProducts(data)
               })
     }, [])

     const handleDeleteProduct = id => {
          const processed = window.confirm('are you sure ?');
          if (processed) {
               const url = `http://localhost:5000/products/${id}`;
               fetch(url, {
                    method: "DELETE",
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('delete successfully');
                              const remainingProducts = products.filter(product => product._id !== id);
                              setProducts(remainingProducts);
                         }
                    })
          }

     }

     return (
          <div>
               <h1>show product</h1>
               <ul>
                    {
                         products.map(product => <li
                              key={product._id}
                         >{product.name} {product.price} {product.quantity} <Link to={`/showProducts/updateProducts/${product._id}`}>update</Link> <button onClick={() => handleDeleteProduct(product._id)}>X</button></li>)
                    }
               </ul>
          </div>
     );
};

export default ShowProduct;