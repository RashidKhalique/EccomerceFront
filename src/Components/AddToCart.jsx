import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AddToCart = (value) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 
  const [loading , setLoading] = useState(false);

  const Addtocart = (product) => {
    let cart;
    try {
      const storedCart = localStorage.getItem('cart');
      cart = storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error parsing cart from local storage:', error);
      cart = [];
    }

    const productExists = cart.find((item) => item._id === product._id);

    if (!productExists) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      toast.success(`${product.name} added to cart!`);
    } else {
      toast.info(`${product.name} is already in the cart.`);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://ecommerce-backend-pi-three.vercel.app/api/product/show');
      setProducts(response.data.existProduct || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(value.value);
  

  if(!value)
  {
    value = products.length;
  }

  return (
     <>
    
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          products.map((product, index) => (
            index <= value.value && (
              <div key={product._id} className="relative p-4 flex w-full max-w-xs flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-md" onClick={()=>{navigate(`/product/${product._id}`)}} >
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl text-center" href="#">
                  <img className="w-full object-cover rounded-md mb-4" src={product.imageurl} alt={product.name} />
                  {product.discount > 0 && (
                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                      {product.discount}% OFF
                    </span>
                  )}
                </a>
                <div className="mt-4 px-5 pb-5" onClick={() => navigate(`/product/${product._id}`)}>
                  <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${product.discount >= 0 ? (product.price - (product.price * product.discount / 100)).toFixed(2) : product.price.toFixed(2)}
                      </span>
                      {product.discount > 0 && (
                        <span className="text-sm text-slate-900 line-through ml-2">${product.price.toFixed(2)}</span>
                      )}
                    </p>
                  </div>
                  <span
                    className="flex items-center justify-center cursor-pointer rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={(e) => { e.stopPropagation(); Addtocart(product); }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                  </span>
                </div>
              </div>
            )
          ))
        )}
</>

  );
};

export default AddToCart;
