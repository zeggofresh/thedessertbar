import React, { useState, useEffect } from "react";
import useSEO from "../../../hooks/useSEO";
import profileImg2 from "../../../assets/bowl1.jpeg"
import profileImg1 from "../../../assets/waffles.jpeg"

const products = [
  {
    id: 1,
    name: "Chocolate Bowl (Personal)",
    price: "₹100",
    category: "Chocolate Bowls",
    image: profileImg2
  }
,
  {
    id: 2,
    name: "Chocolate Bowl (Sharing)",
    price: "₹170",
    category: "Chocolate Bowls",
    image: profileImg2

  },
  {
    id: 3,
    name: "Dark Delight Bowl (Personal)",
    price: "₹110",
    category: "Chocolate Bowls",
    image: profileImg2

  },
  {
    id: 4,
    name: "Dark Delight Bowl (Sharing)",
    price: "₹180",
    category: "Chocolate Bowls",
        image: profileImg2

  },
  {
    id: 5,
    name: "Triple Chocolate Bowl (Personal)",
    price: "₹120",
    category: "Chocolate Bowls",
      image: profileImg2

  },
  {
    id: 6,
    name: "Triple Chocolate Bowl (Sharing)",
    price: "₹190",
    category: "Chocolate Bowls",
    image: profileImg2

  },
  {
    id: 7,
    name: "Oreo Bowl (Personal)",
    price: "₹130",
    category: "Chocolate Bowls",
    image: profileImg2

  },
  {
    id: 8,
    name: "Oreo Bowl (Sharing)",
    price: "₹190",
    category: "Chocolate Bowls",
    image: profileImg2

  },

  // 🧇 WAFFLES
  {
    id: 9,
    name: "Single Waffle - Dark Chocolate",
    price: "₹50",
    category: "Waffles",
    image: profileImg1

  },
  {
    id: 10,
    name: "Single Waffle - Nutella Chocolate",
    price: "₹100",
    category: "Waffles",
      image: profileImg1

  },
  {
    id: 11,
    name: "Double Waffle - Kit Kat Chocolate",
    price: "₹120",
    category: "Waffles",
        image: profileImg1

  },
];

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [errors, setErrors] = useState({});

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    getCurrentLocation(); // Address auto-patch
  };

  const closeModal = () => {
    setModalOpen(false);
    setCustomerName("");
    setCustomerAddress("");
    setCustomerPhone("");
    setErrors({});
  };

  // ================== VALIDATION ==================
  const validate = () => {
    const newErrors = {};
    if (!customerName.trim()) newErrors.name = "Name is required";
    if (!customerAddress.trim()) newErrors.address = "Address is required";
    if (!customerPhone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(customerPhone))
      newErrors.phone = "Phone must be 10 digits";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrder = () => {
    if (!validate()) return;

    const phoneNumber = "918862088631"; // tumhara WhatsApp number
    const message = `Hello! I want to order: ${selectedProduct.name}
Name: ${customerName}
Address: ${customerAddress}
Phone: ${customerPhone}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    closeModal();
  };

  // ================== GET CURRENT LOCATION ==================
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Reverse Geocoding using OpenStreetMap Nominatim
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            setCustomerAddress(data.display_name || "");
          } catch {
            setCustomerAddress("");
          }
        },
        () => {
          setCustomerAddress("");
        }
      );
    }
  };

  // ================== SEO ==================
  useSEO({
    title: "Dessert Menu - Premium Desserts & Sweet Delights | The Dessert Bar",
    description:
      "Explore our delicious dessert menu at The Dessert Bar. From chocolate brownies to cheesecakes, cupcakes and more. Order fresh desserts in Sangmner.",
    keywords:
      "dessert menu, chocolate brownies, cheesecake, cupcakes, tiramisu, macarons, chocolate lava cake, desserts in Sangmner, order desserts online, fresh desserts, premium desserts",
    canonical: `${window.location.origin}/#/products`,
    image:
      "https://images.unsplash.com/photo-1601972599720-bb64d8e23b67?auto=format&fit=crop&w=1200&q=80",
    type: "website",
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Dessert Menu - Premium Desserts & Sweet Delights | The Dessert Bar",
      "description": "Explore our delicious dessert menu at The Dessert Bar. From chocolate brownies to cheesecakes, cupcakes and more. Order fresh desserts in Sangmner.",
      "url": `${window.location.origin}${window.location.hash || ''}#/products`,
      "dateModified": new Date().toISOString(),
      "datePublished": "2024-01-01"
    }
  });

  return (
    <section className="py-20 bg-[#fff7f5] font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-gray-900">
          Our Delicious Products
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore our range of premium desserts, crafted with love and fresh ingredients.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-pink-600 font-bold text-lg">{product.price}</span>
                <button
                  onClick={() => openModal(product)}
                  className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700 transition"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-2xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-center">{selectedProduct.name}</h3>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-2 border rounded-full outline-none ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="text"
                placeholder="Your Address"
                className={`w-full px-4 py-2 border rounded-full outline-none ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

<input
  type="tel"
  placeholder="Your Phone Number"
  maxLength={10} // max 10 digits
  className={`w-full px-4 py-2 border rounded-full outline-none ${
    errors.phone ? "border-red-500" : "border-gray-300"
  }`}
  value={customerPhone}
  onChange={(e) => {
    // Only digits allowed, truncate to 10
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setCustomerPhone(value);
  }}
/>
{errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}


              <button
                onClick={handleOrder}
                className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700 transition"
              >
                Send Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
