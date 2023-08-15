import React from 'react'
import './ProjectStackCard.scss'

//HTML, CSS, SCSS, JavaScript, React
//Use react-icons for icons of each thing

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
