

const Mod5 = () => {

    const pdfPath1 = `./Teacher Prep Lesson Plan Format (5) (1).pdf`; 
    const pdfPath2 = `./part a mod 5 and one page reflection (1).pdf`;
    

    

    return (<div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
        Module 5 Part 5 Assignment
      </h3>
      
      <div style={{ border: '2px solid black', borderRadius: '10px', padding: '10px', marginBottom: '15px' }}>
        <p style={{ color: 'black', margin: 0 }}>
          This assignment focuses on the creation of a professional Literacy Instructional Guide website...
          {/* (Your text continues here) */}
        </p>
      </div>

      <p style={{ fontSize: '15px', color: 'black', marginBottom: '15px' }}>
        Preview of Module 5 Part 5 Assignment 
      </p>

      {/* --- Section 1 --- */}
      <iframe 
        style={{ borderRadius: '15px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
        src={pdfPath1} title="PDF 1"
      ></iframe>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <a href={pdfPath1} download>
          <button style={{ backgroundColor: '#5A90E2', color: 'white', padding: '12px 25px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
             Download Part of Assigment
          </button>
        </a>
      </div>

      {/* --- Section 2 --- */}
      <iframe 
        style={{ borderRadius: '15px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
        src={pdfPath2} title="PDF 2"
      ></iframe>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <a href={pdfPath2} download>
          <button style={{ backgroundColor: '#5A90E2', color: 'white', padding: '12px 25px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Download Part of Assigment 
          </button>
        </a>
      </div>



    </div>
  )

}

export default (Mod5)
