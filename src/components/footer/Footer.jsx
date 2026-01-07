import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email!");
      return;
    }
    // Here you can add your API call for newsletter subscription
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <footer
      className="bg-[#2b1810] text-[#f5efe8] py-16 font-[Poppins]"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div className="space-y-4">
            <h2 className="text-3xl font-[Playfair_Display] font-bold text-[#f8e7d1]">
              The Dessert Bar
            </h2>
            <p className="text-[#e7dccf]">
              Premium desserts crafted with love. Taste the sweetness and share the joy.
            </p>
            <p className="text-[#d6c8b8] text-sm">
              Serving delicious desserts in Sangmner, Maharashtra. Order online or visit us for the finest sweet treats.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f8e7d1]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/franchise", label: "Franchise" },
                { to: "/contact", label: "Contact Us" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.to}
                    className="text-[#e7dccf] hover:text-[#e0b15c] transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f8e7d1]">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_the_dessert_bar__?igsh=c2hjOWwwdjJvN2Fq"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#e0b15c] hover:text-[#2b1810] transition shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com/thedessertbar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#e0b15c] hover:text-[#2b1810] transition shadow-md"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com/thedessertbar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#e0b15c] hover:text-[#2b1810] transition shadow-md"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#f8e7d1]">
              Subscribe
            </h3>
            <p className="text-[#e7dccf] mb-4">
              Get the latest offers and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-l-full rounded-r-full sm:rounded-r-none outline-none text-[#2b1810]"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#e0b15c] hover:bg-[#c89b4f] text-[#2b1810] px-6 py-2 rounded-full sm:rounded-l-none font-medium transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 text-center text-[#d6c8b8] text-sm">
          <p>
            &copy; {new Date().getFullYear()} The Dessert Bar. All rights reserved.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#e0b15c] transition">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-[#e0b15c] transition">
              Terms of Service
            </Link>
            <Link to="/shipping-policy" className="hover:text-[#e0b15c] transition">
              Shipping Policy
            </Link>
          </div>

          {/* Developer Credit */}
          <p className="mt-4 text-xs text-[#bfb3a1]">
            Developed by Vaibhav Sonawane
          </p>
        </div>
      </div>
    </footer>
  );
}
