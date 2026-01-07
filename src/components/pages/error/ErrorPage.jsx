import React from "react";
import { Link } from "react-router-dom";
import useSEO from "../../../hooks/useSEO";

export default function ErrorPage() {
  // SEO Configuration
  useSEO({
    title: "Page Not Found - The Dessert Bar",
    description: "The page you're looking for doesn't exist. Return to The Dessert Bar homepage to enjoy our premium desserts.",
    keywords: "page not found, 404 error, The Dessert Bar, desserts, homepage",
    canonical: `${window.location.origin}/#/404`,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    type: "webpage",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "404 Page Not Found - The Dessert Bar",
      "description": "The page you're looking for doesn't exist. Return to The Dessert Bar homepage to enjoy our premium desserts.",
      "url": `${window.location.origin}${window.location.hash || ''}#/404`,
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-100 py-16 px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-9xl font-bold text-pink-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Page Not Found</h1>
        <p className="text-gray-600 mb-8 font-[Poppins]">
          Oops! The page you're looking for doesn't exist or has been moved. 
          Let's get you back to enjoying our delicious desserts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition shadow-md"
            aria-label="Return to homepage"
          >
            Return Home
          </Link>
          <Link 
            to="/products" 
            className="bg-white hover:bg-gray-100 text-pink-600 border border-pink-600 px-6 py-3 rounded-full font-medium transition"
            aria-label="View products"
          >
            View Desserts
          </Link>
        </div>
      </div>
    </div>
  );
}