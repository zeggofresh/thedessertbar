import React from "react";
import useSEO from "../../../hooks/useSEO";

export default function PrivacyPolicy() {
  // SEO Configuration
  useSEO({
    title: "Privacy Policy - The Dessert Bar",
    description: "Privacy Policy for The Dessert Bar. Learn how we collect, use, and protect your personal information when you visit our website or purchase our desserts.",
    keywords: "privacy policy, data protection, personal information, The Dessert Bar, dessert privacy, website privacy",
    canonical: `${window.location.origin}/privacy-policy`,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - The Dessert Bar",
      "description": "Privacy Policy for The Dessert Bar. Learn how we collect, use, and protect your personal information.",
      "url": window.location.href
    }
  });

  return (
    <div className="pt-16 bg-white font-[Poppins] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold mb-8 text-center text-gray-900">
          Privacy Policy
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 5, 2026
          </p>
          
          <p className="text-gray-600 mb-6">
            Welcome to The Dessert Bar. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or purchase our desserts.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Order details and preferences</li>
            <li>Payment information (processed securely through third-party services)</li>
            <li>Website usage data (cookies and analytics)</li>
            <li>Communication preferences and feedback</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Process and fulfill your dessert orders</li>
            <li>Communicate with you about your orders and services</li>
            <li>Improve our website and customer service</li>
            <li>Send you promotional offers (with your consent)</li>
            <li>Ensure the security of our services</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Data Protection</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption for sensitive data transmission.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Cookies</h2>
          <p className="text-gray-600 mb-6">
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, but this may affect certain website functionalities.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We may use third-party services for payment processing, analytics, and other business functions. These services have their own privacy policies, and we recommend reviewing them.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Data portability in certain circumstances</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have questions about this Privacy Policy or concerns about your privacy, please contact us at:
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