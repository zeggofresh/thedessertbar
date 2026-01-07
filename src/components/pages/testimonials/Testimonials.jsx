import React, { useState, useEffect } from "react";
import useSEO from "../../../hooks/useSEO";

export default function Testimonials() {
  // Initialize reviews from localStorage or default values
  const initialReviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "The desserts at The Dessert Bar are absolutely divine! Their chocolate cake is to die for and the service is exceptional. Every visit is a delightful experience.",
      date: "2024-01-15",
      location: "Sangamner"
    },
    {
      id: 2,
      name: "Rahul Deshmukh",
      rating: 5,
      text: "I ordered a custom cake for my daughter's birthday and it was perfect! The attention to detail and amazing flavors exceeded our expectations. Will definitely order again.",
      date: "2024-01-10",
      location: "Sangamner"
    },
    {
      id: 3,
      name: "Kavita Joshi",
      rating: 5,
      text: "The quality and taste of their desserts are unmatched in the area. Their staff is friendly and knowledgeable. A must-visit for all dessert lovers!",
      date: "2024-01-08",
      location: "Sangamner"
    },
    {
      id: 4,
      name: "Amit Patel",
      rating: 5,
      text: "Best dessert place in Sangamner! Their seasonal special ice cream is incredible. The presentation is always beautiful and the taste is even better.",
      date: "2024-01-05",
      location: "Sangamner"
    },
    {
      id: 5,
      name: "Sneha Nair",
      rating: 5,
      text: "Ordered a wedding cake from The Dessert Bar and it was the talk of the reception! Beautifully designed and tasted amazing. Highly recommend their services.",
      date: "2024-01-03",
      location: "Sangamner"
    },
    {
      id: 6,
      name: "Vikram Singh",
      rating: 5,
      text: "The Dessert Bar has become our family's favorite place for celebrations. The variety of desserts is impressive and everything tastes fresh and delicious.",
      date: "2024-01-01",
      location: "Sangamner"
    }
  ];
  
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('testimonials');
    return savedReviews ? JSON.parse(savedReviews) : initialReviews;
  });
  
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    review: ''
  });
  
  // State for toast notifications
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  
  // Effect to handle toast auto-dismissal
  useEffect(() => {
    let timer;
    if (toast.show) {
      timer = setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
      }, 3000); // Auto dismiss after 3 seconds
    }
    return () => clearTimeout(timer);
  }, [toast]);
  
  // SEO Configuration
  useSEO({
    title: "Customer Testimonials - The Dessert Bar",
    description: "Read what our customers say about our delicious desserts and excellent service at The Dessert Bar in Sangamner.",
    keywords: "dessert testimonials, customer reviews, dessert bar reviews, customer feedback, dessert experiences, The Dessert Bar customers, Sangamner desserts, Sangamner dessert bar",
    canonical: `${window.location.origin}/#/testimonials`,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Customer Testimonials - The Dessert Bar",
      "description": "Read what our customers say about our delicious desserts and excellent service.",
      "url": `${window.location.origin}${window.location.hash || ''}#/testimonials`,
      "dateModified": new Date().toISOString(),
      "datePublished": "2024-01-01"
    }
  });



  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.rating || !formData.review) {
      // Show error toast if validation fails
      setToast({ show: true, message: 'Please fill in all fields and select a rating.', type: 'error' });
      return;
    }
    
    // Create new review object
    const newReview = {
      id: Date.now(), // Using timestamp for unique ID
      name: formData.name,
      rating: parseInt(formData.rating),
      text: formData.review,
      date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
      location: "Sangamner" // Default location
    };
    
    // Add new review to state
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    
    // Save to localStorage
    localStorage.setItem('testimonials', JSON.stringify(updatedReviews));
    
    // Show success toast
    setToast({ show: true, message: 'Thank you for your review!', type: 'success' });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      rating: 0,
      review: ''
    });
  };

  return (
    <div className="pt-16 bg-white font-[Poppins]">
      {/* Toast Notification */}
      {toast.show && (
        <div 
          className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-opacity duration-300 ${
            toast.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}
        >
          {toast.message}
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-[Playfair_Display] font-bold mb-6 text-gray-900">
            Customer Testimonials
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Hear what our valued customers say about their sweet experiences with The Dessert Bar
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-pink-600 mb-2">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-pink-600 mb-2">4.9</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-pink-600 mb-2">50+</h3>
              <p className="text-gray-600">Dessert Varieties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...reviews].reverse().map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.date} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission Form */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-[Playfair_Display] font-bold mb-6 text-center text-gray-900">
              Share Your Experience
            </h2>
            <p className="text-gray-600 text-center mb-8">
              We'd love to hear about your experience at The Dessert Bar
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className={`text-2xl ${star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 focus:outline-none`}
                      aria-label={`Rate ${star} stars`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block text-gray-700 font-medium mb-2">Your Review</label>
                <textarea 
                  id="review" 
                  name="review"
                  rows="4" 
                  value={formData.review}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Share your experience with our desserts..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition duration-300"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] font-bold mb-6">
            Join Our Sweet Community
          </h2>
          <p className="text-lg mb-8">
            Experience the magic of our desserts and become part of our story. Share your own experience with us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-center"
            >
              Visit Us Today
            </a>
            <a 
              href="/products" 
              className="bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition duration-300 text-center"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}