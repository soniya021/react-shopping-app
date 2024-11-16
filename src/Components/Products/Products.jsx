import React from "react";
import img1 from '../../assets/women/womens.png';
import img2 from '../../assets/women/women2.png';
import img3 from '../../assets/women/women3.png';
import img4 from '../../assets/women/women44.png';
import img5 from '../../assets/women/women5.png';
import { FaStar } from "react-icons/fa";

const ProductData = [
    {
        id: 1,
        img: img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: "0",
    },
    {
        id: 2,
        img: img2,
        title: "Women Western",
        rating: 4.0,
        color: "Red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: img3,
        title: "Googles",
        rating: 4.7,
        color: "Brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: img4,
        title: "Printed T-shirts",
        rating: 4.4,
        color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: img5,
        title: "Printed shirts",
        rating: 4.4,
        color: "Purple",
        aosDelay: "800",
    },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p  data-aos="fade-up" className="text-sm text-primary">Top selling products for you</p>
          <h1  data-aos="fade-up" className=" text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development to fill empty spaces in a
            layout that do not yet have content.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {ProductData.map((data) => (
            <div 
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id} 
            className="space-y-3">
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div className="mt-3">
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
          <div>
           <div className="flex-justify-center">
<button className="text-center mt-10
cursor-pointer bg-primary text-white py-1 px-5 rounded-md">view all button</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
