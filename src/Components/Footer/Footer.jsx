import React from "react";
import footerLogo from "../../assets/logoss.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer style={BannerImg} className="relative text-white">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container">
        <div className=" grid md:grid-cols-3 pb-44 pt-5">
 
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Shopsy - Your Shop Companion Logo" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium harum voluptate quisquam sint error accusamus.</p>
          </div>

        
          <div className="grid grid-cols-2 sm:grid-cols-3 cols-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media and Contact Section */}
          <div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Bangalore, Karnataka</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 2345678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
