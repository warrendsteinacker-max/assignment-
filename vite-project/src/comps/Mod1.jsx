import React from 'react';

export default function Mod1() {
  // Use the repo name for the base path if deploying to GitHub Pages
  // Your repo is "assignment-"
  const pdfPath = "/assignment-/literacy-flyer.pdf"; 

  return (
    <div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ fontFamily: 'sans-serif', color: '#2c3e50' }}>
        Flyer Preview: Talk Your Way into Writing!
      </h3>
      
      <p style={{ fontSize: '14px', color: '#555', marginBottom: '15px' }}>
        Preview our family activities below. Learn how oral language helps with 
        <strong> phonemic awareness</strong> and <strong>spelling</strong>.
      </p>
      
      {/* This displays the PDF preview */}
      <iframe 
        style={{
          borderRadius: '15px', 
          width: '100%', 
          height: '600px', 
          border: '2px solid #eaeaea',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
        src={pdfPath}  
        title="Literacy Flyer Preview"
      ></iframe>

      {/* Download Section */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={pdfPath} download="Family_Literacy_Flyer.pdf">
          <button style={{
            backgroundColor: '#4A90E2',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            Download Flyer for Home
          </button>
        </a>
      </div>
    </div>
  );
}