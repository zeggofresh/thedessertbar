import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-pink-600 whitespace-nowrap leading-none"
            aria-label="The Dessert Bar Home"
          >
            THE DESSERT BAR
          </Link>

          {/* CENTER MENU (DESKTOP) */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/products", label: "Products" },
              { path: "/franchise", label: "Franchise" },
              { path: "/instagram-reels", label: "Instagram Reels" },
              { path: "/testimonials", label: "Testimonials" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700"
                } hover:text-pink-600 font-medium transition`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CONTACT BUTTON (DESKTOP) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full
            bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg transition"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6 text-center">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/products", label: "Products" },
              { path: "/franchise", label: "Franchise" },
              { path: "/instagram-reels", label: "Instagram Reels" },
              { path: "/testimonials", label: "Testimonials" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`${
                  isActive(item.path)
                    ? "text-pink-600 font-semibold"
                    : "text-gray-700"
                } hover:text-pink-600 transition`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-pink-600 text-white py-2 rounded-full font-medium hover:bg-pink-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
