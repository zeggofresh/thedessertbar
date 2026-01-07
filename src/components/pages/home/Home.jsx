import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import useSEO from "../../../hooks/useSEO";
import bowlImg from "../../../assets/bowl.jpeg";
import AboutUs from "../aboutus/AboutUs";
import Products from "../products/Products";
import Franchise from "../franchise/Franchise";
import ContactUs from "../contactus/ContactUs";
import Delicious from "../../../assets/bowl1.jpeg";

import { FaIceCream, FaHeart, FaStar } from "react-icons/fa";
import Testimonials from "../testimonials/Testimonials";
import InstagramReels from "../instagramreels/InstagramReels";

const slides = [
  {
    title: "Delicious Desserts",
    desc: "Fresh • Creamy • Premium Taste",
    image: Delicious,
  },


  {
    title: "Chocolate Lovers",
    desc: "Made with Real Belgian Chocolate",
    image: Delicious,

  },
  {
    title: "The Dessert Bar Franchise",
    desc: "Start Your Sweet Business Today",
    image: Delicious,

  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // SEO Configuration
  useSEO({
    title: "The Dessert Bar - Premium Desserts & Sweet Delights | Home",
    description: "Indulge in premium desserts at The Dessert Bar. From chocolate brownies to cheesecakes, experience the finest sweet treats crafted with love and premium ingredients in Sangmner.",
    keywords: "desserts, cakes, chocolate, brownies, cheesecake, sweets, bakery, dessert bar, premium desserts, The Dessert Bar Sangmner, homemade desserts, fresh desserts",
    canonical: `${window.location.origin}/#/`,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "The Dessert Bar",
      "image": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
      "telephone": "+918862088631",
      "email": "thedessertbar75@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sangmner",
        "addressLocality": "Sangmner",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 10:00-22:00",
      "priceRange": "$$",
      "url": `${window.location.origin}${window.location.hash || ''}#/`,
      "sameAs": [
        "https://www.instagram.com/thedessertbar",
        "https://www.facebook.com/thedessertbar"
      ],
      "description": "Premium dessert bar offering chocolate brownies, cheesecakes, cupcakes and other sweet delicacies crafted with love and premium ingredients."
    }
  });

  return (
    <>
      {/* ================= CAROUSEL ================= */}
      <section className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center scale-105"
            />

            <div className="absolute inset-0 bg-black/55 flex items-center justify-center text-center">
              <div className="px-6 text-white max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-5 font-[Playfair_Display] tracking-wide">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-[Poppins] tracking-wide">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
     {/* Left Arrow */}
<button
  onClick={() =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }
  className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition"
>
  <HiChevronLeft size={30} />
</button>

{/* Right Arrow */}
<button
  onClick={() => setCurrent((current + 1) % slides.length)}
  className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition"
>
  <HiChevronRight size={30} />
</button>

      </section>


      {/* ================= MARKETING SECTION ================= */}
{/* ================= MARKETING SECTION ================= */}
<section className="bg-[#faf7f2] py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
    
    {/* Left Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-gray-900 mb-6">
        Experience Premium Desserts
      </h2>

      <p className="text-gray-600 text-lg mb-8 font-[Poppins] leading-relaxed">
        At <span className="font-semibold text-gray-900">The Dessert Bar</span>,
        we craft irresistible desserts using premium ingredients, rich flavors
        and a touch of love. Every bite tells a sweet story.
      </p>

      <div className="flex gap-5 flex-wrap">
      <Link to="/products">
    <a
      href="https://wa.me/918862088631?text=Hi%20The%20Dessert%20Bar,%20I%20would%20like%20to%20place%20an%20order."
      target="_blank"
      rel="noreferrer"
      className="bg-[#6b3f2a] hover:bg-[#5a3323] text-white px-8 py-4 rounded-full font-medium transition shadow-md inline-block text-center"
    >
      Order Now
    </a>
  </Link>

           <a
  href="tel:+918862088631"
  className="bg-[#6b3f2a] hover:bg-[#5a3323] text-white px-8 py-4 rounded-full font-medium transition shadow-md inline-block text-center"
>
  Franchise Enquiry
</a>
      </div>
    </div>

    {/* Right Image Box */}
    <div className="relative max-w-md mx-auto w-full">
      <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
       <img
  src={bowlImg}
  alt="Desserts"
  className="w-full h-full object-cover"
/>

      </div>
    </div>

  </div>
</section>

{/* ================= WHY CHOOSE US ================= */}
<section className="bg-[#fffaf6] py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-[#2b1810] mb-6">
      Why Choose The Dessert Bar?
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-16 font-[Poppins]">
      We create premium desserts using quality ingredients and lots of love.
    </p>

    <div className="grid gap-10 md:grid-cols-3">

      <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full
                        bg-gradient-to-br from-[#e0b15c] to-[#c89b4f] text-[#2b1810] text-3xl
                        group-hover:scale-110 transition">
          <FaIceCream />
        </div>
        <h3 className="text-xl font-semibold text-[#2b1810] mb-3">
          Premium Desserts
        </h3>
        <p className="text-gray-600">
          Freshly prepared desserts made using premium ingredients and rich flavors.
        </p>
      </div>

      <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full
                        bg-gradient-to-br from-[#e0b15c] to-[#c89b4f] text-[#2b1810] text-3xl
                        group-hover:scale-110 transition">
          <FaHeart />
        </div>
        <h3 className="text-xl font-semibold text-[#2b1810] mb-3">
          Made With Love
        </h3>
        <p className="text-gray-600">
          Every dessert is handcrafted with passion, care and perfection.
        </p>
      </div>

      <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full
                        bg-gradient-to-br from-[#e0b15c] to-[#c89b4f] text-[#2b1810] text-3xl
                        group-hover:scale-110 transition">
          <FaStar />
        </div>
        <h3 className="text-xl font-semibold text-[#2b1810] mb-3">
          Customer Favourite
        </h3>
        <p className="text-gray-600">
          Loved by customers for taste, freshness and premium quality.
        </p>
      </div>

    </div>
  </div>
</section>



<AboutUs/>
<Products/>
<Franchise/>
<Testimonials/>
<InstagramReels/>
<ContactUs/>
    </>

  );
}
