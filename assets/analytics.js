// Vercel Web Analytics initialization for static HTML site
// Based on @vercel/analytics package v1.6.1

(function() {
  'use strict';
  
  // Initialize the analytics queue
  if (!window.va) {
    window.va = function() {
      (window.vaq = window.vaq || []).push(arguments);
    };
  }
  
  // Detect environment (production vs development)
  function detectEnvironment() {
    var hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '') {
      return 'development';
    }
    return 'production';
  }
  
  // Set the mode
  var mode = detectEnvironment();
  window.vam = mode;
  
  // Only inject the tracking script in production
  if (mode === 'production') {
    // Create and inject the Vercel analytics script
    var script = document.createElement('script');
    script.defer = true;
    script.src = '/_vercel/insights/script.js';
    
    script.onerror = function() {
      console.warn('Vercel Analytics: Failed to load script. Make sure the site is deployed on Vercel and analytics is enabled in the dashboard.');
    };
    
    // Insert the script
    if (document.head) {
      document.head.appendChild(script);
    }
  } else {
    // In development, log to console
    console.log('[Vercel Analytics] Running in development mode - events will be logged to console only');
  }
})();
