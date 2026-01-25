
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//will use this fir creating actual website
import './App.css'

function App() {

  return (
    <>
      <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '20px',
        boxSizing: 'border-box',
        width: '100%' // Ensures the container takes full screen width
      }}>
        {/* 1. The Brochure Image */}
        <img src='Gemini_Generated_Image_5.png' style={{borderRadius: '10px', width: '500px', height: 'auto', marginBottom: '30px'}}/>

        {/* 2. MAIN TITLE - Changed to h1 for better accessibility */}
        <h1 style={{fontSize: '4rem', textAlign: 'center', margin: '20px 0', width: '100%'}}>
          Oral Language: The Foundation for Early Spelling and Writing
        </h1>

        {/* 3. SUB-HEADING 1 */}
        <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
          Introduction: Why Talking Builds Writers
        </h2>

        {/* 4. PARAGRAPHS - Kept inside their own width-controlled div */}
        <div style={{width: '80%', marginBottom: '40px'}}>
          <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Oral language is the bedrock upon which all literacy skills are built... (Tompkins et al., 2021, p. 108).</p>
          <p style={{color: 'black', fontSize: '1.2rem'}}>The connection between speaking and writing is direct and powerful... (Tompkins et al., 2021, p. 107).</p>
        </div>

        {/* 5. REMAINING HEADINGS - Stacking below the paragraphs */}
        <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
          Home Language as a Strength
        </h2>

        <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
          Simple, No-Cost Activities for Home
        </h2>

        <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
          The Research-Practice Connection
        </h2>

        <h2 style={{fontSize: '2.5rem', borderBottom: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '40px 0'}}>
          References
        </h2>
      </div>
    </>
  )
}

export default App
