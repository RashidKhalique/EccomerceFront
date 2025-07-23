import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserHeader from '../../UserHeader';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../../footer';
import { toast ,ToastContainer } from 'react-toastify';
import PromotionalSection from '../../Components/PromotionalSection';
import AddToCart from '../../Components/AddToCart';


function ProductStore() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-backend-pi-three.vercel.app/api/product/show');
        setProducts(response.data.existProduct || []); // Handle the case where `existProduct` might be undefined
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <UserHeader />
<PromotionalSection/>
      <section className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">All Products</h2>   
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         <AddToCart value={products.length}/>
        </div>
      </section>
      <Footer/>
          <ToastContainer />
    </div>
  );
}

export default ProductStore;
