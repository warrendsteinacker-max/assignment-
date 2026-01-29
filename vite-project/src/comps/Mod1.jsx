import React from 'react'

const Mod1 = () => {
  return (
    <div className="preview-container">
  <h3>Flyer Preview: Talk Your Way into Writing!</h3>
  
  {/* This displays the PDF preview */}
  <iframe 
    style={{borderRadius: '15px', width: '100%', height: '500px'}}
    src="/literacy-flyer.pdf"  
    title="Literacy Flyer Preview"
  ></iframe>

  {/* This provides the actual download button */}
  <a href="/literacy-flyer.pdf" download="Family_Literacy_Flyer.pdf">
    <button>Download as PDF</button>
  </a>
</div>
  )
}

export default Mod1