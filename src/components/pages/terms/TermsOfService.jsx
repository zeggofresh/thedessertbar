import React from "react";
import useSEO from "../../../hooks/useSEO";

export default function TermsOfService() {
  // SEO Configuration
  useSEO({
    title: "Terms of Service - The Dessert Bar",
    description: "Terms of Service for The Dessert Bar. Please read these terms and conditions carefully before using our website or purchasing our desserts.",
    keywords: "terms of service, terms and conditions, website terms, dessert terms, The Dessert Bar terms",
    canonical: `${window.location.origin}/terms-of-service`,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - The Dessert Bar",
      "description": "Terms of Service for The Dessert Bar. Please read these terms and conditions carefully before using our website or purchasing our desserts.",
      "url": window.location.href
    }
  });

  return (
    <div className="pt-16 bg-white font-[Poppins] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-8 text-center text-gray-900">
          Terms of Service
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 5, 2026
          </p>
          
          <p className="text-gray-600 mb-6">
            Welcome to The Dessert Bar. These terms and conditions outline the rules and regulations for the use of The Dessert Bar's website and services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using our website and services, you accept and agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Use of Our Services</h2>
          <p className="text-gray-600 mb-4">
            You agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide accurate information when placing orders</li>
            <li>Use our services in compliance with applicable laws</li>
            <li>Not use our services for any unlawful purpose</li>
            <li>Respect our intellectual property rights</li>
            <li>Communicate respectfully with our team</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Ordering and Payment</h2>
          <p className="text-gray-600 mb-4">
            When ordering desserts from us, you agree to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide accurate delivery information</li>
            <li>Pay for all items ordered</li>
            <li>Review your order before submitting</li>
            <li>Follow our cancellation and refund policies</li>
            <li>Be of legal age to make purchases</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Product Information</h2>
          <p className="text-gray-600 mb-6">
            We strive to provide accurate descriptions and images of our desserts. However, we do not warrant that product descriptions or other content is accurate, complete, or reliable. Prices and availability are subject to change without notice.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content, designs, logos, and materials on our website are the property of The Dessert Bar and are protected by intellectual property laws. You may not reproduce, distribute, or use our intellectual property without permission.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            The Dessert Bar shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or inability to use our services, even if we have been advised of the possibility of such damages.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitute acceptance of the modified terms.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> thedessertbar75@gmail.com
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +91 8862088631
          </p>
          <p className="text-gray-600">
            <strong>Address:</strong> The Dessert Bar, Sangmner, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  );
}