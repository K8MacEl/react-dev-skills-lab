// Defining and exporting a component from this file
// to be rendered by another component
import SkillListItem from "../SkillListItem/SkillListItem";

// ALL components must capitalized!
export default function SkillList({ skills }) {
  // The point of our components
  // is to return some UI (what the user sees on the screen)
  console.log("skills prop before the map------>", skills)
    // Check if skills is an array before mapping
    const skillsLi = Array.isArray(skills) ? skills.map(({ name, level }) => {
      return <SkillListItem key={name} skill={name} level={level} />;
    }) : <li>No skills available</li>;
  
    return (
      <ul>
        {skillsLi}
      </ul>
    );
  }