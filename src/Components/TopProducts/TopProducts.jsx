import img1 from "../../assets/shirts/shirt.png";
import img2 from "../../assets/shirts/shirt2.png";
import img3 from "../../assets/shirts/shirt3.png";

import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    img: img1,
    title: "Women Ethnic",
    rating: 5,
    color: "White",
    description: "Elegant ethnic wear for women.",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "Women Western",
    rating: 4,
    color: "Red",
    description: "Stylish western wear for women.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "Googles",
    rating: 4.7,
    color: "Brown",
    description: "Trendy sunglasses for a chic look.",
    aosDelay: "400",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top rated products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development to fill empty spaces in a
            layout that do not yet have content.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ProductData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white 
                dark:bg-gray-800
                hover:bg-black/80 
                dark:hover:bg-primary
                hover:text-white relative shadow-xl
                duration-300 group max-w-[300px]"
            >
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt={data.title}
                  className="
                    max-w-[140px] block mx-auto
                    transform -translate-y-20
                    group-hover:scale-150 duration-300
                    drop-shadow-md
                  "
                />
              </div>
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(data.rating) ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="
                    bg-primary hover:scale-105
                    duration-300 text-white py-1 px-4
                    rounded-full mt-4 group-hover:bg-white
                    group-hover:text-primary
                  "
                >
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
