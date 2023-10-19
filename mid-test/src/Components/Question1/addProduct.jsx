import React, { useState } from "react";
import "./addProduct.css";


export default function Multiple() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevproductData) => ({ ...prevproductData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${productData.name},
       \nDescription: ${productData.description}, 
       \nCategory: ${productData.category},
       \nQuantity: ${productData.quantity},
       \nPrice: ${productData.price} `
    );
    console.log(productData);
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={productData.name}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="email">
        Description:
      </label>
      <input
        type="text"
        name="description"
        className="multiple__input"
        value={productData.description}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="email">
        Category:
      </label>
      <input
        type="text"
        name="category"
        className="multiple__input"
        value={productData.category}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="email">
        Quantity:
      </label>
      <input
        type="number"
        name="quantity"
        className="multiple__input"
        value={productData.quantity}
        onChange={handleChange}
      />

     <label className="multiple__text" htmlFor="email">
        Price:
      </label>
      <input
        type="number"
        name="price"
        className="multiple__input"
        value={productData.price}
        onChange={handleChange}
      />
      

      <button className="button" type="submit">
        Submit
      </button>
      <button className="button" type="button">
        Cancel
      </button>
    </form>
  );
}


