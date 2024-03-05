import './SkillListItem.css'

export default function SkillListItem({skill, level}){

	// key skill, is defined in the parents component
	// when the component is being rendered, 
	// refer SkillList, and look for the word skill
	return (
		<li className='SkillListItem'>{skill}</li>
	)
}