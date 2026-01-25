
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
        <img src='Gemini_Generated_Image_1.png' style={{borderRadius: '10px', width: '500px', height: 'auto', marginBottom: '30px'}}/>

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
          <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Oral language is the bedrock upon which all literacy skills are built. Before children can spell or write, they must first develop a strong foundation in spoken language. Research consistently demonstrates that phonological “awareness is an umbrella term that refers to an awareness of the different units of sounds in oral language" (Tompkins et al., 2021, p. 108). When children engage in rich oral language experiences, they develop the phonological awareness, vocabulary, and narrative skills essential for spelling and composing written texts.</p>
          <p style={{color: 'black', fontSize: '1.2rem'}}>The connection between speaking and writing is direct and powerful. As children learn the alphabetic principle, "they realize that the sounds (phonemes) they hear in oral language can be represented by letters (graphemes) in print" (Tompkins et al., 2021, p. 107). This understanding transforms speech into print. Furthermore, when children narrate their experiences orally, they practice organizing ideas in logical sequences—a skill that directly transfers to written composition. Every conversation, story, and word game strengthens the neural pathways that support literacy development.</p>
        </div>

        {/* 5. REMAINING HEADINGS - Stacking below the paragraphs */}
        <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
          Home Language as a Strength
        </h2>

        <div style={{width: '80%', marginBottom: '40px'}}>
          <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Your child's home language and cultural experiences are powerful assets for literacy learning. Research affirms that skills developed in one language transfer to support learning in another language. Here are three meaningful ways to leverage your family's linguistic and cultural strengths:</p>
          <p style={{color: 'black', fontSize: '1.2rem'}}><span style={{textDecoration: 'underline'}}>1. Telling Family Stories </span>
          Encourage your child to share stories from your family's history, traditions, or daily experiences in your home language. This practice builds narrative structure—the ability to sequence events with a beginning, middle, and end. During "the last 40 minutes of the reading period, Mrs. Firpo conducts guided reading lessons" (Tompkins et al., 2021, p. 106). Similarly, families can conduct guided storytelling during meals or bedtime, helping children organize their thoughts before transferring them to paper.</p>
          <p style={{color: 'black', fontSize: '1.2rem'}}><span style={{textdecoration: 'underline'}}>2. Brainstorming Ideas in Home Language</span>
          Before your child writes, allow them to talk through their ideas in whichever language feels most comfortable. Mrs. Firpo's students take turns using their letter-sound knowledge to sound out these words: my, fish, can, at, and me.  Mrs. Firpo “guides the students to say each word slowly and listen to the sound” (Tompkins et al., 2021, p. 106). Just as Mrs. Firpo's students use what they know to build new learning, children who discuss concepts in their home language develop clearer, more sophisticated ideas that they can then express in writing in any language.
          </p>
        </div>

        <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
          Simple, No-Cost Activities for Home
        </h2>

        <div style={{width: '80%', marginBottom: '40px'}}>
          <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}></p>
          <p style={{color: 'black', fontSize: '1.2rem'}}></p>
        </div>

        <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
          The Research-Practice Connection
        </h2>

        <div style={{width: '80%', marginBottom: '40px'}}>
          <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}></p>
          <p style={{color: 'black', fontSize: '1.2rem'}}></p>
        </div>

        <h2 style={{fontSize: '2.5rem', borderBottom: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '40px 0'}}>
          References
        </h2>

        <div style={{width: '80%', marginBottom: '40px'}}>
          <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}></p>
          <p style={{color: 'black', fontSize: '1.2rem'}}></p>
        </div>
      </div>
    </>
  )
}

export default App
