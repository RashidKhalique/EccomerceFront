import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    const navigate = useNavigate();

      const categories = [
    { name: 'Electronic Gadget', image: "https://thumbs.dreamstime.com/b/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.jpg" },
    { name: 'Beauty & Makeup', image: "https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg" },
    { name: 'Home Stationary', image: "https://m.media-amazon.com/images/I/71p0j1cR9CL.jpg" },
    { name: 'Shoes', image: "https://i5.walmartimages.com/seo/Dumajo-Mens-Shoes-Fashion-Running-Sneaker-Casual-Leather-Sport-Shoes-Breathable-Comfortable-Walking-Shoes_61aded78-ba79-4b63-95af-8d3ba15d6eac.6466ccd16eec3b797d1e5ed526148b83.jpeg" },
    { name: 'Peonic', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnWCrWlQg8vMiCeW5wPUh1EbwUnymvgiMlw&s" },
  ];

  return (
    <section className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Categories</h2>
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white border rounded-lg p-4 flex flex-col items-center" onClick={() => navigate(`/category/${category.name}`)}>
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

  )
}

export default Category