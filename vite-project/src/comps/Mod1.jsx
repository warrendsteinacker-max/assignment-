import React from 'react';

export default function Mod1() {
  // Use the repo name for the base path for GitHub Pages
  // Since the file is in 'public', use the absolute path including the repo name
  const repoName = "assignment-";
  const pdfPath = `/${repoName}/project-1-2-1.pdf`; 

  return (
    <div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
        Module 1 Part 1 Assignment
      </h3>
      
      <p style={{ fontSize: '14px', color: 'black', marginBottom: '15px' }}>
        Preview of Module 1 Part 1 Assignment 
      </p>
      
      {/* PDF preview iframe */}
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
        <a href={pdfPath} download="project-1-2-1.pdf">
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
            Download Assignment
          </button>
        </a>
      </div>
    </div>
  );
}