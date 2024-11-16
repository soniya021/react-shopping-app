import React from "react";
import Slider from "react-slick"; // Make sure you install react-slick and slick-carousel for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div className="mt-14 mb-12">
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              What our customers are saying
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Testimonials
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development to fill empty
              spaces in a layout that do not yet have content.
            </p>
          </div>
          <div daa-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
            <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col items-center gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                  dark:bg-gray-800 bg-primary/10 relative
                  "
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                    <p className="text-gray-600 text-sm text-center">
                      {data.text}
                    </p>
                    <h1
                      className="text-xl font-bold 
                  text-black/80 dark:text-light"
                    ></h1>
                    </div>
                    </div>
                    <p className="text-black/20 text-9xl
                    font-serif absolute top-0 right-0">
                        ''
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;