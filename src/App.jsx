import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'


 function App() {
  const skills = ['Learn react', 'Learn PHP', 'Learn Bootstrap']


  return (
    <>
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm />
    </div>
    </>
  )
}

export default App
