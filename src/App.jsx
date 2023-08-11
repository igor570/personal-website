import './App.scss'
import NavBar from './components/NavBar'
import ProjectSwitcher from './components/ProjectsSection/ProjectSwitcher'
import ScrollBar from './components/ScrollBar'

function App() {
  return (
    <>
      <div className='bodyWrapper'>
        <NavBar />
        <section className='heroSection'>
          <div className='heroWrapper'>
            <div className='textWrapper'>
              <h1 className='headerText'>Header</h1>
              <div className='bodyText'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                fugit suscipit veritatis exercitationem totam tempore labore ab
                rerum, rem deleniti.
              </div>
            </div>
            <img className='img' src='./src/assets/placeholder.jpg' />
          </div>
        </section>
        <ScrollBar />

        <section id='projects' className='projectsSection'>
          <ProjectSwitcher />
        </section>

        <section id='contact' className='contactSection'></section>
      </div>
    </>
  )
}

export default App
