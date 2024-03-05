import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'


function App() {
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];


  return (
    <>
      <div className='App'>
        <h1>React Dev Skills</h1>
        {/* skills is the array not name */}
        <SkillList skills={skills}/> 
        <NewSkillForm />
      </div>
    </>
  )
}

export default App
