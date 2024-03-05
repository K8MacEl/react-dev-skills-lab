import "./NewSkillForm.css"

export default function NewSkillForm() {
    return (

        <form className="NewSkillForm"action="skill">
            <label htmlFor="NewName">Skill <input type="text" className="skill_input" /></label>
            <label htmlFor="SkillLevel">Level 
                <select name="SkillLevel" className="level_options">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button className="AddSkill">ADD SKILL</button>
        </form>
    )
}