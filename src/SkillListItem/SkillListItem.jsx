import './SkillListItem.css'

function SkillListItem({skill, level}){

	// key skill, is defined in the parents component
	// when the component is being rendered, 
	// refer SkillList, and look for the word skill
	return (
		<li 
			className={'SkillListItem'}>
			<div className='skill_name'>{skill}</div>
			<div className='skill_level'> Level: {level}</div>
		</li>
	);
}

export default SkillListItem;