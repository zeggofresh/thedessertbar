import React from "react";
import useSEO from "../../../hooks/useSEO";
import bowlImg from "../../../assets/bowl1.jpeg";
import profileImg from "../../../assets/profile1.jpg";
import profileImg1 from "../../../assets/profile1.jpg";
import profileImg2 from "../../../assets/profile1.jpg";
import profileImg3 from "../../../assets/profile1.jpg";



export default function AboutUs() {
  // SEO Configuration
  useSEO({
    title: "About The Dessert Bar - Premium Desserts in Sangamner & Sweet Delights",
    description: "Learn about The Dessert Bar's story, mission, and vision. Discover how we create premium desserts with love and premium ingredients in Sangamner. Read about our quality promise and meet our dedicated team.",
    keywords: "about The Dessert Bar, dessert story, dessert mission, dessert vision, premium desserts, dessert bar Sangamner, quality desserts, dessert ingredients, dessert artisans, dessert team, dessert company, dessert quality, dessert process",
    canonical: `${window.location.origin}/#/about`,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About The Dessert Bar",
      "description": "Learn about The Dessert Bar's story, mission, and vision. Discover how we create premium desserts with love and premium ingredients, our quality promise, and meet our dedicated team.",
      "url": `${window.location.origin}${window.location.hash || ''}#/about`,
      "dateModified": new Date().toISOString(),
      "datePublished": "2024-01-01"
    }
  });

  return (
    <div className="pt-16 bg-white font-[Poppins]">

      {/* Hero Section */}
      <section className="relative bg-[#fef6f0] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
            About Us
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            At The Dessert Bar, we create irresistible desserts crafted with love and premium ingredients.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded with a passion for desserts in Sangamner on <span className="font-bold">16 August 2025</span>, The Dessert Bar began as a dream to create exceptional sweet experiences. Starting from a small local shop, we have grown into a beloved destination for dessert lovers in Sangamner and beyond.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our journey began with a simple mission: to craft desserts that bring joy, celebrate special moments, and satisfy the sweet cravings of our community. Over the years, we have perfected our recipes, expanded our offerings, and built a reputation for quality and taste that keeps our customers coming back.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Today, we continue to innovate while staying true to our roots, combining traditional techniques with modern flavors to create desserts that are both familiar and exciting.
          </p>
        </div>
        <div>
          <img
  src={bowlImg}
            alt="Our Story"
            className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px]"
          />

 

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To craft premium desserts using the finest ingredients sourced locally and globally, bringing happiness and sweetness to every celebration while maintaining the highest standards of quality and taste.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become the premier dessert destination in the region, known for our innovation, quality, and commitment to creating memorable sweet experiences for our community.
            </p>
          </div>
        </div>
      </section>

      {/* Quality & Process */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <img
            src={bowlImg}
            alt="Our Quality Process"
            className="rounded-3xl shadow-2xl object-cover w-full h-[320px] md:h-[400px]"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
            Our Quality Promise
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At The Dessert Bar, we believe that exceptional desserts begin with exceptional ingredients. We source the finest ingredients, from premium chocolates to fresh local produce, ensuring every bite delivers a burst of flavor.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our skilled dessert artisans combine traditional techniques with modern innovation to create treats that are not only delicious but visually stunning. Each dessert is crafted with attention to detail and served with pride.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We maintain strict quality standards throughout our process, from ingredient selection to final presentation, ensuring that every dessert that leaves our kitchen meets our high standards of excellence.
          </p>
        </div>
      </section>

{/* Team Section */}
{/* Team Section */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-16 text-center text-gray-900">
    Meet Our Team
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

 {/* Founder */}
<div className="text-center">
  <img
    src={profileImg}
    alt="Narendra Sanjay Sonawane"
    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
  />
  {/* Branch Badge */}
  <span className="inline-block bg-[#e0b15c] text-[#2b1810] text-xs px-3 py-1 rounded-full font-semibold mb-2">
  Main Branch 
  </span>
  <h4 className="text-xl font-[Playfair_Display] font-semibold text-gray-900">
    Narendra Sanjay Sonawane
  </h4>

  <p className="text-gray-600 text-sm font-medium">
    Founder & Head Franchise Owner
  </p>

  <p className="text-gray-500 text-xs mb-2">
    The Dessert Bar (Main Brand)
  </p>

  <a
    href="https://www.instagram.com/_the_dessert_bar__?igsh=c2hjOWwwdjJvN2Fq"
    target="_blank"
    rel="noreferrer"
    className="text-pink-600 hover:underline font-medium text-sm"
  >
    Instagram
  </a>
</div>

{/* Branch 1 Franchise */}
<div className="text-center">
  <img
    src={profileImg1}
    alt="Vaibhav Dnyaneshwar Sonawane"
    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
  />

  {/* Branch Badge */}
  <span className="inline-block bg-[#e0b15c] text-[#2b1810] text-xs px-3 py-1 rounded-full font-semibold mb-2">
    Branch 1 Franchise
  </span>

  <h4 className="text-xl font-[Playfair_Display] font-semibold text-gray-900 mt-2">
    Vaibhav Dnyaneshwar Sonawane
  </h4>

  <p className="text-gray-600 text-sm font-medium">
    Franchise Owner
  </p>

  <p className="text-gray-500 text-xs mb-2">
    Branch 1 – Sangamner
  </p>

  <a
    href="https://www.instagram.com/_the_dessert_bar__?igsh=c2hjOWwwdjJvN2Fq"
    target="_blank"
    rel="noreferrer"
    className="text-pink-600 hover:underline font-medium text-sm"
  >
    Instagram
  </a>
</div>

{/* Shop Cook */}
<div className="text-center">
  <img
    src={profileImg2}
    alt="Rajendra Ganpat Sonawane"
    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
  />

  <h4 className="text-xl font-[Playfair_Display] font-semibold text-gray-900">
    Rajendra Ganpat Sonawane
  </h4>

  <p className="text-gray-600 text-sm mb-2">Shop Cook</p>

  <a
    href="https://www.instagram.com/_the_dessert_bar__?igsh=c2hjOWwwdjJvN2Fq"
    target="_blank"
    rel="noreferrer"
    className="text-pink-600 hover:underline font-medium text-sm"
  >
    Instagram
  </a>
</div>

{/* Shop Cook */}
<div className="text-center">
  <img
    src={profileImg3}
    alt="Sahil Ashok Bhagwat"
    className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
  />

  <h4 className="text-xl font-[Playfair_Display] font-semibold text-gray-900">
    Sahil Ashok Bhagwat
  </h4>

  <p className="text-gray-600 text-sm mb-2">Shop Cook</p>

  <a
    href="https://www.instagram.com/_the_dessert_bar__?igsh=c2hjOWwwdjJvN2Fq"
    target="_blank"
    rel="noreferrer"
    className="text-pink-600 hover:underline font-medium text-sm"
  >
    Instagram
  </a>
</div>


  </div>
</section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-16 text-center text-gray-900">
          What Our Customers Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex text-yellow-400 mb-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "The desserts at The Dessert Bar are absolutely divine! Their chocolate cake is to die for and the service is exceptional."
            </p>
            <p className="font-semibold text-gray-900">- Priya Sharma</p>
          </div>
          
          {/* Review 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex text-yellow-400 mb-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "I ordered a custom cake for my daughter's birthday and it was perfect! The attention to detail and amazing flavors exceeded our expectations."
            </p>
            <p className="font-semibold text-gray-900">- Rahul Deshmukh</p>
          </div>
          
          {/* Review 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex text-yellow-400 mb-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="text-gray-600 mb-4 italic">
              "The quality and taste of their desserts are unmatched in the area. Every visit is a delightful experience."
            </p>
            <p className="font-semibold text-gray-900">- Kavita Joshi</p>
          </div>
        </div>
      </section>

    </div>
  );
}
