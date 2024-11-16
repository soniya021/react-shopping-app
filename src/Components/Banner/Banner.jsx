import React from "react";
import BannerImg from "../../assets/women/women2.png";
import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div
      className="min-h-[550px] flex justify-center items-center py-12 sm:py-0"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
        >
          <div>
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          <div
            className="flex flex-col justify-center gap-6 sm:pt-0"
          >
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter sale up to 50%
            </h1>
            <p
            data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              You’ve worked hard to build your business, and Canva’s online
              banner maker is here to help you communicate your brand story to
              the world. Upload your own images and logos then easily
              drag-and-drop them into any banner template.
            </p>
            <div className="flex flex-col gap-4">

              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                />
                <p>Quality products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"
                />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-green-400"
                />
                <p>Easy payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-yellow-400"
                />
                <p>Get Offer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
