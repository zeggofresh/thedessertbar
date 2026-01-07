import React, { useState } from "react";
import useSEO from "../../../hooks/useSEO";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp message setup
    const message = `Hello, my name is ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const phone = "918862088631"; // India code + number
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(url, "_blank");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  // SEO Configuration
  useSEO({
    title: "Contact The Dessert Bar - Premium Desserts & Sweet Delights",
    description: "Get in touch with The Dessert Bar. Reach out for dessert orders, franchise opportunities, or any inquiries about our premium desserts in Sangmner.",
    keywords: "contact The Dessert Bar, dessert orders, franchise opportunities, dessert inquiries, dessert bar Sangmner, order desserts, dessert business",
    canonical: `${window.location.origin}/#/contact`,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact The Dessert Bar",
      "description": "Contact page for The Dessert Bar. Get in touch for dessert orders, franchise opportunities, or any inquiries.",
      "url": `${window.location.origin}${window.location.hash || ''}#/contact`,
      "telephone": "+918862088631",
      "email": "thedessertbar75@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sangmner",
        "addressLocality": "Sangmner",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  });

  return (
    <div className="pt-16 bg-white font-[Poppins]">

      {/* Hero Section */}
      <section className="bg-[#fef6f0] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-[Playfair_Display] font-bold mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Have questions? Reach out to us and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
            ></textarea>

            <button
              type="submit"
              className="bg-[#6b3f2a] hover:bg-[#5a3323] text-white px-8 py-4 rounded-full font-medium transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold text-gray-900">
            Get in Touch
          </h2>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 8862088631</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">thedessertbar75@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">
              The Dessert Bar, Sangmner, Near Bsnl Office Akole Bypass Road Maharashtra, India
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}
