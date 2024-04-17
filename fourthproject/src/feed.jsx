import React, { useEffect } from 'react';

const VismeForm = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="visme_d" data-title="Custom Form" data-url="pvm7xm8w-custom-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="56478"></div>
  );
};

export default VismeForm;
