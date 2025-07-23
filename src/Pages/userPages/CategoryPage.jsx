import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserHeader from '../../UserHeader';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../../footer';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import PromotionalSection from '../../Components/PromotionalSection';
import CategoryProduct from '../../Components/CategoryProduct';


function CategoryPage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const { id } = useParams();

   
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
                <h2 className="text-3xl font-bold text-center mb-6">Category Products</h2>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <CategoryProduct/>
                </div>
            </section>
       
            <Footer />
        </div>
    );
}

export default CategoryPage;
