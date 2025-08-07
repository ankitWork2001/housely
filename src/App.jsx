import { useRef, useState } from "react";
// import { Button } from "@/components/ui/button.jsx";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import "./App.css";

// Import images
import heroImage from "./assets/hero-section.jpg";

// Import property images
import apartmentImage from "./assets/property1.jpg";
import luxuryImage from "./assets/property2.jpg";
import commercialImage from "./assets/property3.jpg";

// Import local service images
import foodImage from "./assets/local-img-1.jpg";
import techImage from "./assets/local-img-2.jpg";
import plumberImage from "./assets/local-img-3.jpg";
import chefImage from "./assets/local-img-4.jpg";

// Import upcoming images

import residencyImage from "./assets/upcoming.jpg";

// Import additional images
import laptopImage from "./assets/laptop.jpg";
import PropertyCard from "./pages/components/PropertyCard";
import Card from "./pages/components/LocalCards";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-[#81B5CA] text-black px-4 py-2 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const cards = [
  {
    id: 1,
    title: "Tiffin Service",
    description: "Some details about the first card.",
    imageUrl: foodImage,
  },
  {
    id: 2,
    title: "Internet ",
    description: "More info about the second card.",
    imageUrl: techImage,
  },
  {
    id: 3,
    title: "Electrician ",
    description: "Details for the third card.",
    imageUrl: plumberImage,
  },
  {
    id: 4,
    title: "Plumber",
    description: "Final details for the fourth card.",
    imageUrl: chefImage,
  },
];
function App() {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">PropertyHub</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Properties
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Contact
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 px-6">
              Sign In
            </Button>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="max-w-7xl h-[407px] mx-auto px-6  mt-2 relative bg-white">
        <img
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text + Search */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Find your perfect property
          </h1>
          <p className="mt-2 text-lg text-center">
            discover rooms, flats, shop, and service in area
          </p>

          {/* Search Bar */}
          <div className="mt-8 bg-black/60 backdrop-blur-md p-4 rounded-full flex flex-wrap gap-4 justify-center ">
            <button className="bg-[#81B5CA] text-white px-5 py-2 rounded-full cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300">
              Location
            </button>
            <button className="bg-[#81B5CA] text-white px-5 py-2 rounded-full cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300">
              Property type
            </button>
            <button className="bg-[#81B5CA] text-white px-5 py-2 rounded-full cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300">
              Budget range
            </button>
            <div className="flex items-center gap-2 bg-[#81B5CA] text-white px-5 py-2 rounded-full cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </div>
          </div>
        </div>
      </section>

      {/* Property Looking For Section */}
      <section className="py-12  bg-white">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Section Heading */}
          <h2 className="text-[36px] font-bold capitalize text-center mb-8">
            Property Looking For
          </h2>

          {/* Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-[60%] -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-[60%] -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Scroll Section */}
          <div
            ref={scrollRef}
            className="relative flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide px-8 "
          >
            <PropertyCard
              image={apartmentImage}
              title="2BHK Apartment"
              desc="2 Bed, 2 Bathroom"
            />
            <PropertyCard
              image={luxuryImage}
              title="Single Room"
              desc="1 Bed, 1 Bathroom"
            />
            <PropertyCard
              image={commercialImage}
              title="Commercial Shop"
              desc="800 sq ft"
            />
            <PropertyCard
              image={apartmentImage}
              title="2BHK Apartment"
              desc="2 Bed, 2 Bathroom"
            />
            <PropertyCard
              image={luxuryImage}
              title="Single Room"
              desc="1 Bed, 1 Bathroom"
            />
            <PropertyCard
              image={commercialImage}
              title="Commercial Shop"
              desc="800 sq ft"
            />
            {/* Add more cards to test scrolling */}
          </div>
        </div>
      </section>

      {/* Local Services Section */}
      <section className="py-12  bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Local Services
          </h3>
          <div className="flex justify-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Project Section */}

      <section className="py-12  bg-white flex justify-center">
        <div className="max-w-[1218px] w-full mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Upcoming Project
          </h3>

          <div className="bg-white w-[1218px] h-[466px] rounded-[30px] shadow-md flex flex-col">
            <div className="relative w-full h-full rounded-[30px]">
              {/* ✅ Background Image via CSS */}
              <div
                className="absolute inset-0 rounded-[30px] bg-cover bg-center"
                style={{ backgroundImage: `url(${residencyImage})` }}
              ></div>

              {/* ✅ Black Overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-[30px]"></div>

              {/* ✅ Content */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-6">
                <h4 className="text-4xl font-bold mb-2 text-center mt-[4rem]">
                  Residency
                </h4>
                <p className="text-xl mb-1 mt-4 text-center">
                  India, Mumbai | launching in 2026
                </p>

                <button className="bg-[#81B5CA]  text-white font-semibold py-3 px-8 rounded-full  mt-[6rem] cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300 ">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12  bg-white flex justify-center items-center">
        <div className="max-w-[1218px] w-full mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-8 text-gray-800">
            About Us
          </h3>

          <div className="bg-[#474747] w-[1218px] h-[456px] rounded-[30px] shadow-lg flex flex-col justify-center items-center p-8">
            <p className="text-white text-center text-base md:text-lg leading-relaxed max-w-3xl">
              At Housely, we are on a mission to make finding rental spaces and
              essential services simpler, smarter, and more transparent. Whether
              you're a property owner looking to list your room, flat, or shop,
              a tenant searching for your next home, or a service provider
              offering tiffin, internet, or repair services—our platform brings
              everyone together in one place, for free.
            </p>

            <button className="bg-[#81B5CA]  text-white font-semibold py-3 px-8 rounded-full  mt-8  cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Ready to List Section */}
      <section className="py-12  bg-white flex justify-center items-center">
        <div className="max-w-[1218px] w-full mx-auto px-6">
          <div className="relative w-[1218px] h-[424px] rounded-[30px] shadow-lg overflow-hidden">
            {/*  Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-[30px]"
              style={{ backgroundImage: `url(${laptopImage})` }}
            ></div>

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[30px]"></div>

            {/*  Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-6">
              <h4 className="text-[28px] font-bold mb-2 text-center">
                Ready To List Your Property?
              </h4>

              <p className="text-xl mb-6 text-center ">
                Join thousands of property owners and start earning today
              </p>

              <button className="bg-[#81B5CA]  text-white font-semibold py-3 px-8 rounded-full cursor-pointer hover:bg-[#6a9db0] transition-colors duration-300 mt-[6rem]">
                List Property Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-400">
                PropertyHub
              </h4>
              <p className="text-gray-400 text-sm">
                Your trusted partner in finding the perfect property.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Property Search
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Property Listing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Property Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Consultation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@propertyhub.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>123 Property St, City, State</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 PropertyHub. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
