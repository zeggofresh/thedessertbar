import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner">
        <div className="dessert-icon">🍰</div>
        <div className="loading-text">The Dessert Bar</div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <style jsx>{`
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #fef6f0 0%, #faf7f2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.5s ease-out;
        }
        
        .loading-overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }
        
        .loading-spinner {
          text-align: center;
          animation: float 2s ease-in-out infinite;
        }
        
        .dessert-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: bounce 1s ease-in-out infinite alternate;
        }
        
        .loading-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: bold;
          color: #6b3f2a;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }
        
        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .loading-dots span {
          width: 12px;
          height: 12px;
          background: #6b3f2a;
          border-radius: 50%;
          display: inline-block;
          animation: loading-dot 1.4s infinite ease-in-out both;
        }
        
        .loading-dots span:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .loading-dots span:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes loading-dot {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;