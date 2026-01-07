import React from "react";
import useSEO from "../../../hooks/useSEO";
import shop from "../../../assets/shop .jpeg"
export default function Franchise() {
  // SEO Configuration
  useSEO({
    title: "Franchise Opportunities - The Dessert Bar",
    description: "Start your own dessert business with The Dessert Bar franchise. Join our premium dessert brand and start a profitable sweet business in your area.",
    keywords: "dessert franchise, dessert business opportunity, franchise with The Dessert Bar, dessert franchise in India, dessert business, dessert bar franchise, franchise opportunity",
    canonical: `${window.location.origin}/franchise`,
    image: "https://images.unsplash.com/photo-1599785209707-1a7de1049b1f?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Franchise Opportunities - The Dessert Bar",
      "description": "Start your own dessert business with The Dessert Bar franchise. Join our premium dessert brand and start a profitable sweet business in your area.",
      "url": window.location.href,
      "publisher": {
        "@type": "Organization",
        "name": "The Dessert Bar"
      }
    }
  });

  return (
    <div className="pt-16 bg-white font-[Poppins]">

      {/* Hero Section */}
      <section className="relative bg-[#fff4e6] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
            Franchise Opportunities
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Join The Dessert Bar family and start your sweet business journey with us.
          </p>
        </div>
      </section>

      {/* Franchise Info Section */}
       <section className="max-w-7xl mx-auto px-6 py-24 min-h-[650px] grid md:grid-cols-2 gap-14 items-center">
      
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
          Why Franchise with Us?
        </h2>

        <ul className="list-disc pl-5 space-y-4 text-gray-600 text-lg">
          <li>Proven business model with premium desserts.</li>
          <li>Complete training and operational support.</li>
          <li>Marketing and brand promotion support.</li>
          <li>High ROI and scalable business opportunities.</li>
          <li>Access to exclusive ingredients and recipes.</li>
        </ul>

        <div className="mt-10">
          <a
            href="tel:+918862088631"
            className="bg-[#6b3f2a] hover:bg-[#5a3323] text-white px-10 py-4 rounded-full font-medium transition shadow-lg inline-block"
          >
            Franchise Enquiry
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-full">
        <img
          src={shop}
          alt="Franchise"
          className="rounded-3xl shadow-2xl object-cover w-full h-[450px] md:h-[550px]"
        />
      </div>

    </section>

      {/* Steps to Franchise */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-12 text-gray-900">
            How to Get Started
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">1. Enquiry</h3>
              <p className="text-gray-600">
                Fill out the franchise enquiry form and our team will get in touch with you.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">2. Training & Setup</h3>
              <p className="text-gray-600">
                Receive training on operations, recipes, and brand standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">3. Launch</h3>
              <p className="text-gray-600">
                Open your dessert outlet with full brand support and start serving happiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-12 text-center text-gray-900">
          Our Branches
        </h2>
        
        {/* Main Branch */}
    <div className="mb-24">
      <h3 className="text-2xl md:text-3xl font-[Playfair_Display] font-semibold mb-10 text-center text-[#6b3f2a]">
        Main Branch
      </h3>

      <div className="bg-white rounded-3xl shadow-xl p-10 max-w-5xl mx-auto min-h-[420px]">
        <div className="grid md:grid-cols-2 gap-10 items-center h-full">
          
          {/* Left Content */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">
              The Dessert Bar – Main Branch
            </h4>

            <p className="text-gray-600 mb-6 text-lg">
              Our flagship location serving as the heart of our dessert empire.
            </p>

            <div className="space-y-3 text-base">
              <p className="text-gray-700">
                <span className="font-medium">Address:</span> The Dessert Bar,
                Sangamner, Near BSNL Office, Akole Bypass Road, Maharashtra, India
              </p>

              <p className="text-gray-700">
                <span className="font-medium">Phone:</span> +91 88620 88631
              </p>

              <p className="text-gray-700">
                <span className="font-medium">Hours:</span> 03:00 PM – 11:00 PM
              </p>
            </div>

            <a
              href="https://www.instagram.com/_the_dessert_bar__?igsh=c2hjOWwwdjJvN2Fq"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 text-pink-600 hover:underline font-medium"
            >
              Visit Instagram →
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full h-full">
            <img
              src={shop}
              alt="Main Branch"
              className="rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[380px]"
            />
          </div>

        </div>
      </div>
    </div>

        
        {/* Local Branches */}
        <div>
          <h3 className="text-2xl md:text-3xl font-[Playfair_Display] font-semibold mb-8 text-center text-[#6b3f2a]">
          The Dessert Bar  Branches
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Branch 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/src/assets/dessert bar icon.jpg"
                  alt="The Dessert Bar Branch 1"
                  className="w-40 h-40 rounded-full border-4 border-[#f5e6d3] bg-white p-4 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold mb-3">The Dessert Bar-Branch 1</h4>
              <p className="text-gray-600 text-sm mb-4">Prime location in the city center</p>
              <div className="text-gray-700 text-sm mb-3">
                <p>Mon-Sun: 03:00 PM - 11:00 PM</p>
              </div>
              <div className="flex justify-center">
  <a
    href="https://www.instagram.com/the_dessert_bar_1?igsh=MWdxcHp2OTJscG4zYg=="
    target="_blank"
    rel="noreferrer"
    className="text-pink-600 hover:underline font-medium text-sm"
  >
    Instagram
  </a>
              </div>
            </div>
            
            {/* Branch 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/src/assets/dessert bar icon.jpg"
                  alt="The Dessert Bar Branch 2"
                  className="w-40 h-40 rounded-full border-4 border-[#f5e6d3] bg-white p-4 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold mb-3">The Dessert Bar-Branch 2</h4>
              <p className="text-gray-600 text-sm mb-4">Shopping district location</p>
              <div className="text-gray-700 text-sm mb-3">
                <p>Mon-Sun: 03:00 PM - 11:00 PM</p>
              </div>
              <div className="flex justify-center">
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
            
            {/* Branch 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/src/assets/dessert bar icon.jpg"
                  alt="The Dessert Bar Branch 3"
                  className="w-40 h-40 rounded-full border-4 border-[#f5e6d3] bg-white p-4 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold mb-3">The Dessert Bar-Branch 3</h4>
              <p className="text-gray-600 text-sm mb-4">Serene location with outdoor </p>
              <div className="text-gray-700 text-sm mb-3">
                <p>Mon-Sun: 03:00 PM - 11:00 PM</p>
              </div>
              <div className="flex justify-center">
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
            
            {/* Branch 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="/src/assets/dessert bar icon.jpg"
                  alt="The Dessert Bar Branch 4"
                  className="w-40 h-40 rounded-full border-4 border-[#f5e6d3] bg-white p-4 object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold mb-3">The Dessert Bar-Branch 4</h4>
              <p className="text-gray-600 text-sm mb-4">Traditional shopping area</p>
              <div className="text-gray-700 text-sm mb-3">
                <p>Mon-Sun: 03:00 PM - 11:00 PM</p>
              </div>
              <div className="flex justify-center">
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
          </div>
        </div>
      </section>

    </div>
  );
}
