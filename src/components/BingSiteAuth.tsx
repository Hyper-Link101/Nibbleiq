import { useEffect } from 'react';

/**
 * Component that serves Bing verification XML
 * This is a fallback in case static file serving doesn't work
 */
export function BingSiteAuth() {
  useEffect(() => {
    // Redirect to the actual XML file in the public folder
    window.location.href = '/BingSiteAuth.xml';
  }, []);

  // In case redirect doesn't work, show the XML content
  const xmlContent = `<?xml version="1.0"?>
<users>
    <user>C6848EF4CBA628BDD16B53FC2C7F722D</user>
</users>`;

  return (
    <pre style={{ 
      fontFamily: 'monospace', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      whiteSpace: 'pre-wrap'
    }}>
      {xmlContent}
    </pre>
  );
}
