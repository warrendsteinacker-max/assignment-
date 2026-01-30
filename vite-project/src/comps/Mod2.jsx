import React from 'react'

const Mod2 = () => {


    const repoName = "assignment-";
  const pdfPath1 = `/${repoName}/Teacher Prep Lesson Plan Format.pdf`; 

  return (
    <div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
        Module 2 Part 2 Assignment
      </h3>
      <div style={{border: '2px solid black', borderRadius: '10px', padding: '10px', marginBottom: '15px'}}>
        <p style={{ color: 'black', margin: 0 }}>This assignment focuses on the creation of a professional Literacy Instructional Guide website that expands my instructional toolkit into long-term planning and detailed lesson design. In Part 2a, I developed a Literacy Lesson Curriculum Map that outlines a logical 1–2 week instructional sequence for a specific grade level, Kindergarten, ensuring vertical alignment between Michigan standards, research-based materials, and diverse differentiation strategies for English learners and students with IEPs. In Part 2b, I translated that map into a formal Literacy Lesson Plan using the Baker College format, focusing on the two of five literacy components called fluency and decoding, and compose a reflective essay evaluating how I planned to support standard alignment and responsive instruction. The final product is a visually polished, professional website section intended to demonstrate my mastery of data-informed, intentional lesson design to potential school administrators.</p>
      </div>
      <p style={{ fontSize: '14px', color: 'black', marginBottom: '15px' }}>
        Preview of Module 2 Part 2 Assignment 
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
        src={pdfPath1}  
        title="1"
      ></iframe>

      {/* Download Section */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={pdfPath1} download="teacher-prep-lesson-plan-format-1-1.docx">
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
            Download Part of Assignment
          </button>
        </a>
      </div>
    </div>
  );
}

export default Mod2