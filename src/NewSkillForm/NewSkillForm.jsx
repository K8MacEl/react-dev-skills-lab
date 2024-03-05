

export default function NewSkillForm() {
    return (

        <form action="skill">
            <label htmlFor="NewName">Skill <input type="text" /></label>
            <label htmlFor="SkillLevel">Level
                <select name="SkillLevel" id="SkillLevel">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button>ADD SKILL</button>
        </form>
    )
}