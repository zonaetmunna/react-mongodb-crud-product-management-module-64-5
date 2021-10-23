import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
     const { id } = useParams();
     const [products, setProducts] = useState({});
     useEffect(() => {
          const url = `http://localhost:5000/products/${id}`;
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    setProducts(data)
               })

     }, [])

     const handleUpdateName = e => {
          const updateName = e.target.value;
          const newName = { name: updateName, price: products.price, quantity: products.quantity };
          setProducts(newName);
     }

     const handleUpdatePrice = e => {
          const updatePrice = e.target.value;
          const newPrice = { name: products.name, price: updatePrice, quantity: products.quantity };
          setProducts(newPrice);
     }

     const handleUpdateQuantity = e => {
          const updateQuantity = e.target.value;
          const newQuantity = { name: products.name, price: products.quantity, quantity: updateQuantity };
          setProducts(newQuantity);
     }

     const handleUpdate = e => {
          const url = `http://localhost:5000/products/${id}`;
          fetch(url, {
               method: "PUT",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(products)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount > 0) {
                         alert('update successfully')
                         setProducts('');
                    }
               })

          e.preventDefault();
     }

     return (
          <div>
               <h1>update products</h1>
               <h1>this is update product{id}</h1>
               <p>{products.name} {products.price}</p>
               <form onSubmit={handleUpdate}>
                    <input type="text" name="" id="" onChange={handleUpdateName} value={products.name || ''} />
                    <br />
                    <input type="text" name="" id="" onChange={handleUpdatePrice} value={products.price || ''} />
                    <br />
                    <input type="text" name="" id="" onChange={handleUpdateQuantity} value={products.quantity || ''} />
                    <br />
                    <input type="submit" value="Update" />
               </form>
          </div>
     );
};

export default UpdateProduct;