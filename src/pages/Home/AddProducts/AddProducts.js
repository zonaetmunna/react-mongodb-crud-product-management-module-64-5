import React, { useRef } from 'react';

const AddProducts = () => {
     const nameRef = useRef('');
     const priceRef = useRef('');
     const quantityRef = useRef('');

     const handleAddProduct = e => {
          const name = nameRef.current.value;
          const price = priceRef.current.value
          const quantity = quantityRef.current.value;

          const newProduct = { name, price, quantity };
          fetch('http://localhost:5000/products', {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(newProduct)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         alert('data added');
                         e.target.reset();
                    }
               })

          e.preventDefault();
     }

     return (
          <div>
               <h1>Please add product</h1>
               <form onSubmit={handleAddProduct}>
                    <input type="text" ref={nameRef} placeholder="name" />
                    <br />
                    <input type="text" ref={priceRef} placeholder="price" />
                    <br />
                    <input type="text" ref={quantityRef} placeholder="quantity" />
                    <br />
                    <input type="submit" value="Add" />
               </form>

          </div>
     );
};

export default AddProducts;