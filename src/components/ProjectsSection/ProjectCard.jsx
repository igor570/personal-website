import React from 'react'
import './ProjectCard.scss'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const ProjectCard = ({ cardName, cardImg, gitURL, vercelURL }) => {
  // Cards must be 400x270
  return (
    <div className='projectWrapper'>
      <div className='cardWrap'>
        <img src={cardImg} className='cardImg'></img>
        <div className='cardText'>{cardName}</div>
        <div className='cardLinks'>
          <a href={gitURL} className='gitLogo'>
            <AiFillGithub />
          </a>
          <a href={vercelURL} className='linkLogo'>
            <AiOutlineLink />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
