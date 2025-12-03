import { useEffect } from 'react';

/**
 * Component that serves Google verification HTML
 * This is a fallback in case static file serving doesn't work
 */
export function GoogleVerification() {
  useEffect(() => {
    // Redirect to the actual HTML file in the public folder
    window.location.href = '/google-Z6h6hI3EauwQNX8USE1RH-RYH4W_daafjBpsfdDFlk.html';
  }, []);

  return (
    <div style={{ 
      fontFamily: 'monospace', 
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      google-site-verification: -Z6h6hI3EauwQNX8USE1RH-RYH4W_daafjBpsfdDFlk
    </div>
  );
}
