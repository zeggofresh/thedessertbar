import React from "react";
import useSEO from "../../../hooks/useSEO";

export default function InstagramReels() {

  useSEO({
    title: "Instagram Reels - The Dessert Bar",
    description: "Watch our delicious dessert creations and behind-the-scenes content on Instagram Reels at The Dessert Bar.",
    keywords: "dessert reels, instagram videos, dessert bar instagram",
    canonical: `${window.location.origin}/instagram-reels`,
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    type: "website",
  });

  // ✅ EMBED URL ONLY
 const reelsData = [
  {
    id: 1,
    title: "Chocolate Dessert",
    caption: "Indulge in our rich chocolatey goodness! 🍫",
    date: "2024-01-05",
    embedUrl: "https://www.instagram.com/reel/DSFcdUGAeDj/embed"
  },
  {
    id: 2,
    title: "Behind the Scenes at The Dessert Bar",
    caption: "See how we create magic in our kitchen! ✨",
    date: "2024-01-02",
    embedUrl: "https://www.instagram.com/reel/DS2PCqdiPN4/embed"
  },
  {
    id: 3,
    title: "Behind the Scenes at The Dessert Bar",
    caption: "See how we create magic in our kitchen! ✨",
    date: "2024-01-02",
    embedUrl: "https://www.instagram.com/reel/DRfWJSSCM1Z/embed"
  },
  {
    id: 4,
    title: "Behind the Scenes at The Dessert Bar",
    caption: "See how we create magic in our kitchen! ✨",
    date: "2024-01-02",
    embedUrl: "https://www.instagram.com/reel/DSXViQgiD09/embed"
  },
  {
    id: 5,
    title: "Delicious Dessert Moments",
    caption: "Sweet memories and happy customers! 🍨",
    date: "2024-01-02",
    embedUrl: "https://www.instagram.com/reel/DP8MVNLgRFI/embed"
  },
  {
    id: 6,
    title: "Dessert Creations",
    caption: "Handcrafted desserts made with love ❤️",
    date: "2024-01-02",
    embedUrl: "https://www.instagram.com/reel/DSujYYrAYph/embed"
  },
  {
    id: 7,
    title: "Kitchen Magic",
    caption: "Behind the scenes of our sweet creations ✨",
    date: "2024-01-02",
    embedUrl: "https://www.instagram.com/reel/DTLKCaliP_p/embed"
  },
  {
    id: 8,
    title: "Dessert Happiness",
    caption: "Serving smiles with every dessert! 😋",
    date: "2024-01-02",
    embedUrl: "https://www.instagram.com/reel/DSzsmEXCJDh/embed"
  }
];


  return (
    <div className="pt-16 bg-white font-[Poppins]">

      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-100 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-[Playfair_Display] font-bold mb-4">
            Instagram Reels
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Watch our delicious desserts & behind-the-scenes moments
          </p>
        </div>
      </section>

      {/* Reels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {reelsData.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
            >
              {/* IFRAME */}
              <iframe
                src={reel.embedUrl}
                width="100%"
                height="480"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-xl"
                title={reel.title}
              />

              <div className="pt-4">
                <h3 className="font-semibold text-lg">{reel.title}</h3>
                <p className="text-gray-600 text-sm">{reel.caption}</p>
                <p className="text-xs text-gray-400 mt-2">{reel.date}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center">
        <h2 className="text-3xl font-[Playfair_Display] font-bold mb-4">
          Follow Us on Instagram
        </h2>
        <p className="mb-6">
          Stay updated with our latest desserts & offers
        </p>
        <a
          href="https://www.instagram.com/_the_dessert_bar__"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Follow @thedessertbar
        </a>
      </section>

    </div>
  );
}
