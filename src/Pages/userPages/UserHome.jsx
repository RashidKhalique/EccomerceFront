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
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="mt-10 text-center">
            <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
            </blockquote>
            <figcaption className="mt-10">
              <img className="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-gray-600">CEO of RK.</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default UserHome;
