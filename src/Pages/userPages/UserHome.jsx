import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserHeader from '../../UserHeader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../footer';
import AddToCart from '../../Components/AddToCart';
import Category from '../../Components/Category';

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

          <AddToCart/>


      {/* Promotional Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
              <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
            </div>
            <div>
              <div className="mt-10">
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://voyado.com/wp-content/uploads/2022/08/beauty-ecommerce-products.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://www.autofulfil.com/wp-content/uploads/2020/03/cosmetics.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://digitalmarketingskill.com/wp-content/uploads/2019/01/products-to-sell-online-hair-cosmetics-1.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://www.wearedivisa.com/wp-content/uploads/2021/02/consumer-electronics-ecommerce-digital-marketing.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://aureatelabs.com/wp-content/uploads/2024/11/Choose-your-business-niche.png" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://aureatelabs.com/wp-content/uploads/2024/11/Choose-your-business-niche.png" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700">
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
