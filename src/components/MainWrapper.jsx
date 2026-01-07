import React, { useState, useEffect } from 'react';
import LoadingAnimation from './LoadingAnimation';

const MainWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if content is already loaded
    if (document.readyState === 'complete') {
      // Add a small delay to ensure all components are rendered
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }

    // Handle page load event
    const handlePageLoad = () => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // Small delay to show the loading animation briefly
      return () => clearTimeout(timer);
    };

    // If page is still loading
    if (document.readyState !== 'complete') {
      window.addEventListener('load', handlePageLoad);
    } else {
      setLoading(false);
    }

    // Also add a safety timeout in case something goes wrong
    const safetyTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // Maximum 5 seconds loading

    // Cleanup
    return () => {
      window.removeEventListener('load', handlePageLoad);
      clearTimeout(safetyTimeout);
    };
  }, []);

  // Hide loading when all images are loaded
  useEffect(() => {
    if (loading) {
      const images = document.querySelectorAll('img');
      let loadedImages = 0;
      const totalImages = images.length;

      if (totalImages === 0) {
        setTimeout(() => setLoading(false), 800);
        return;
      }

      const handleImageLoad = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setTimeout(() => setLoading(false), 300);
        }
      };

      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageLoad); // Also count errors
        }
      });

      if (loadedImages === totalImages) {
        setTimeout(() => setLoading(false), 300);
      }

      return () => {
        images.forEach(img => {
          img.removeEventListener('load', handleImageLoad);
          img.removeEventListener('error', handleImageLoad);
        });
      };
    }
  }, [loading]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return <>{children}</>;
};

export default MainWrapper;