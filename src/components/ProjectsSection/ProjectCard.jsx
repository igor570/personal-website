import React from 'react'
import './ProjectCard.scss'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const ProjectCard = ({ cardName, cardImg, gitURL, vercelURL }) => {
  // Cards must be 450 x 300
  return (
    <div className='projectWrapper'>
      <div className='cardWrap'>
        <img src={cardImg} className='cardImg'></img>
        <div className='cardText'>{cardName}</div>
        <div className='cardLinks'>
          <a href={gitURL} target='_blank' className='gitLogo'>
            <AiFillGithub size={30} />
          </a>
          <a href={vercelURL} target='_blank' className='linkLogo'>
            <AiOutlineLink size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
