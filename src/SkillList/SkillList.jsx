// Defining and exporting a component from this file
// to be rendered by another component
import SkillListItem from "../SkillListItem/SkillListItem";

// ALL components must capitalized!
export default function SkillList({skills}) {
  // The point of our components
  // is to return some UI (what the user sees on the screen)

  const skillsLi = skills.map((skill, idx) => {
	return (<SkillListItem key={idx} skill={skill}  level={"high"} />)
  })
  return (
    <ul>
		{skillsLi}
    </ul>
  );
}