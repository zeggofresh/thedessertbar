import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import AboutUs from "./components/pages/aboutus/AboutUs";
import Franchise from "./components/pages/franchise/Franchise";
import ContactUs from "./components/pages/contactus/ContactUs";
import Footer from "./components/footer/Footer";
import Products from "./components/pages/products/Products";
import PrivacyPolicy from "./components/pages/privacy/PrivacyPolicy";
import TermsOfService from "./components/pages/terms/TermsOfService";
import Testimonials from "./components/pages/testimonials/Testimonials";
import InstagramReels from "./components/pages/instagramreels/InstagramReels";
import ErrorPage from "./components/pages/error/ErrorPage";
import LiveChat from "./components/pages/livechat/LiveChat";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import MainWrapper from "./components/MainWrapper";

function App() {
  return (
    <HelmetProvider>
      <MainWrapper>
        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/instagram-reels" element={<InstagramReels />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />

        <LiveChat />
      </MainWrapper>
    </HelmetProvider>
  );
}

export default App;
