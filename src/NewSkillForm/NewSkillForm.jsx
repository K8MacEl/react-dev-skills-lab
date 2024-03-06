import { useState } from "react";
import "./NewSkillForm.css"

function NewSkillForm({ onAddSkill}) {
    const [skillName, setSkillName] = useState('');
    const [skillLevel, setSkillLevel] = useState('3'); //defaults level to 3

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddSkill({ name: skillName, level: parseInt(skillLevel)});
        setSkillName('');
        setSkillLevel('');
    };

    return (
        <form onSubmit={handleSubmit} className="NewSkillForm">
            <label> Skill :
                <input 
                    type="text" 
                    required="true"
                    className="skill_input" 
                    value={skillName}
                    onChange={(e)=> setSkillName(e.target.value)}
                />
            </label>
            <label htmlFor="SkillLevel">Level :
                <select 
                    name="SkillLevel" 
                    className="level_options"
                    value={skillLevel}
                    onChange={(e) => setSkillLevel(e.target.value)}
                    >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button type="submit"className="AddSkill">ADD SKILL</button>
        </form>
    )
}


export default NewSkillForm