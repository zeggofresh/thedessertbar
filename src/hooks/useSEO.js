import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const useSEO = ({ title, description, keywords, canonical, image, type, article, schema }) => {
  useEffect(() => {
    // Set default values if not provided
    const defaultTitle = "The Dessert Bar - Premium Desserts & Sweet Delights";
    const defaultDescription = "Indulge in premium desserts at The Dessert Bar. From chocolate brownies to cheesecakes, experience the finest sweet treats crafted with love and premium ingredients.";
    const defaultKeywords = "desserts, cakes, chocolate, brownies, cheesecake, sweets, bakery, dessert bar, premium desserts";
    const defaultImage = "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80";

    const seoTitle = title || defaultTitle;
    const seoDescription = description || defaultDescription;
    const seoKeywords = keywords || defaultKeywords;
    const seoImage = image || defaultImage;

    // Update document title
    document.title = seoTitle;

    // Update meta tags
    const updateMetaTag = (name, content) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    const updatePropertyTag = (property, content) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || window.location.href);

    // Update meta tags
    updateMetaTag('description', seoDescription);
    updateMetaTag('keywords', seoKeywords);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'The Dessert Bar');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('theme-color', '#6b3f2a');
    updateMetaTag('format-detection', 'telephone=no');

    // Open Graph tags
    updatePropertyTag('og:title', seoTitle);
    updatePropertyTag('og:description', seoDescription);
    updatePropertyTag('og:image', seoImage);
    updatePropertyTag('og:url', canonical || window.location.href);
    updatePropertyTag('og:type', type || 'website');
    updatePropertyTag('og:site_name', 'The Dessert Bar');
    updatePropertyTag('og:locale', 'en_US');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', seoTitle);
    updateMetaTag('twitter:description', seoDescription);
    updateMetaTag('twitter:image', seoImage);
    updateMetaTag('twitter:site', '@thedessertbar');

    // Article tags (if applicable)
    if (type === 'article' && article) {
      updatePropertyTag('article:published_time', article.published_time);
      updatePropertyTag('article:modified_time', article.modified_time);
      updatePropertyTag('article:author', article.author);
      updatePropertyTag('article:section', article.section);
      updatePropertyTag('article:tag', article.tags);
    }

    // Add JSON-LD schema if provided
    let schemaScript = null;
    if (schema) {
      schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Remove any existing schema script that might be outdated
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => {
      if (schemaScript && !script.isEqualNode(schemaScript) && script !== schemaScript) {
        script.remove();
      }
    });

    // Cleanup function
    return () => {
      // Reset to default values when component unmounts
      document.title = defaultTitle;
      
      // Remove the schema script on unmount if it exists
      if (schemaScript && document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, [title, description, keywords, canonical, image, type, article, schema]);

  return null;
};

export default useSEO;