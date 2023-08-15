import React from 'react'
import './ProjectStack.scss'
import ProjectStackCard from './ProjectStackCard'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaSass } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoReact } from 'react-icons/bi'

const ProjectStack = () => {
  const htmlCard = {
    name: 'HTML',
    icon: <AiFillHtml5 size={95} />,
  }

  const cssCard = {
    name: 'CSS',
    icon: <FaCss3Alt size={95} />,
  }

  const scssCard = {
    name: 'SASS',
    icon: <FaSass size={95} />,
  }

  const jsCard = {
    name: 'JavaScript',
    icon: <BiLogoJavascript size={95} />,
  }

  const reactCard = {
    name: 'React',
    icon: <BiLogoReact size={95} />,
  }

  return (
    <>
      <h3 className='techWrapper'>Tech Stack</h3>
      <div className='pstackColWrapper'>
        <ProjectStackCard name={htmlCard.name} icon={htmlCard.icon} />
        <ProjectStackCard name={cssCard.name} icon={cssCard.icon} />
        <ProjectStackCard name={scssCard.name} icon={scssCard.icon} />
        <ProjectStackCard name={jsCard.name} icon={jsCard.icon} />
        <ProjectStackCard name={reactCard.name} icon={reactCard.icon} />
      </div>
    </>
  )
}

export default ProjectStack
