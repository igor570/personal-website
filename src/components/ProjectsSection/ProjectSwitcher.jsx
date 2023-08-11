import React, { useState } from 'react'
import './ProjectSwitcher.scss'
import ProjectCard from './ProjectCard'

const ProjectSwitcher = () => {
  const [cardsTopic, setCardTopic] = useState()

  const webprojDetails = [
    {
      id: crypto.randomUUID,
      cardName: 'Ecommerce Page',
      cardImg: '../src/assets/ecomProject.jpg',
      gitURL: 'https://github.com/igor570/ecommerce-page-react',
      vercelURL: 'https://ecommerce-page-react.vercel.app/',
    },
  ]

  const gameprojDetails = [
    {
      id: crypto.randomUUID,
      cardName: 'Game Page',
      cardImg: '../src/assets/ecomProject.jpg',
      gitURL: 'test',
      vercelURL: 'test',
    },
  ]

  function webTopic() {
    setCardTopic(
      webprojDetails.map((card) => (
        <ProjectCard
          key={card.id}
          cardName={card.cardName}
          cardImg={card.cardImg}
          gitURL={card.gitURL}
          vercelURL={card.vercelURL}
        />
      ))
    )
  }

  function gameTopic() {
    setCardTopic(
      gameprojDetails.map((card) => (
        <ProjectCard
          key={card.id}
          cardName={card.cardName}
          cardImg={card.cardImg}
          gitURL={card.gitURL}
          vercelURL={card.vercelURL}
        />
      ))
    )
  }

  return (
    <>
      <div className='subheaderWrapper'>
        <h2 className='subheaderText'>Projects</h2>
      </div>
      <div className='switcherContainer'>
        <div className='switch' onClick={webTopic}>
          Web Development
        </div>
        <div className='switch' onClick={gameTopic}>
          Game Development
        </div>
      </div>
      <div className='cardWrapper'>{cardsTopic}</div>
    </>
  )
}

export default ProjectSwitcher
