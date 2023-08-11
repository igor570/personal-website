import React, { useState } from 'react'
import './ProjectSwitcher.scss'
import ProjectCard from './ProjectCard'

const ProjectSwitcher = () => {
  const [cards, setCards] = useState()

  const projDetails = {
    cardName: 'Ecommerce Page',
    cardImg: '../src/assets/placeholder.jpg',
    gitURL: 'test',
    vercelURL: 'test',
  }

  return (
    <>
      <div className='subheaderWrapper'>
        <h2 className='subheaderText'>Projects</h2>
      </div>
      <div className='switcherContainer'>
        <div className='switch'>Option 1</div>
        <div className='switch'>Option 2</div>
      </div>
      <div className='cardWrapper'>
        <ProjectCard
          cardName={projDetails.cardName}
          cardImg={projDetails.cardImg}
          gitURL={projDetails.gitURL}
          vercelURL={projDetails.vercelURL}
        />
      </div>
    </>
  )
}

export default ProjectSwitcher
