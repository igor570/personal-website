import React from 'react'
import './ProjectStackCard.scss'

const ProjectStackCard = ({ name, icon }) => {
  return (
    <>
      <div className='pstackColWrapper'>
        <div className='pstackWrapper'>
          <div className='pstackContainer'>
            <div className='icon'>{icon}</div>
          </div>
          <div className='cardName'>{name}</div>
        </div>
      </div>
    </>
  )
}

export default ProjectStackCard
