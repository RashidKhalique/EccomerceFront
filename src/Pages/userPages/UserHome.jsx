import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserHeader from '../../UserHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../footer';
import AddToCart from '../../Components/AddToCart';
import Category from '../../Components/Category';
import PromotionalSection from '../../Components/PromotionalSection';
import Testimonial from '../../Components/Testimonial'

function UserHome() {

  const heroImage = 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14';

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  return (
    <div>
      <UserHeader />
    
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 px-6 py-10 lg:px-20 ">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Welcome to MyShop!</h2>
          <p className="mb-6 text-lg text-gray-700">
            Discover amazing products at unbeatable prices. Your shopping experience just got better!
          </p>
          <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mr-4" onClick={() => navigate('/ProductStore')}>
              Shop Now
            </button>
            <button className="bg-transparent border border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white" onClick={() => navigate('/ShopCart')}>
              Check Cart
            </button>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <img src={heroImage} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

              <section className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>   
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AddToCart  value ={7}/>
          </div>
          </section>

       <PromotionalSection/>

      {/* Categories Section */}
     <Category/>


      {/* Testimonials Section */}
     
     <Testimonial/>

      {/* Toast Container */}
      <ToastContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserHome;
