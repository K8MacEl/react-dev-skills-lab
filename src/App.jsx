import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'



function App() {
  const [skills, setSkills] = useState([
    { name: "", level: ""},
  ]);

  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill]);
  }

  return (
    <>
      <div className='App'>
        <h1>React Dev Skills</h1>
        {/* skills is the array not name */}
        <SkillList skills={skills}/> 
        <NewSkillForm onAddSkill={addSkill}/>
      </div>
    </>
  )
}

export default App
