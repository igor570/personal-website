import './App.scss'
import NavBar from './components/NavBar'
import ProjectSwitcher from './components/ProjectsSection/ProjectSwitcher'
import Form from './components/ContactSection/Form'
import ScrollBar from './components/ScrollBar'
import ProjectStack from './components/ProjectsSection/ProjectStack'

function App() {
  return (
    <>
      <div className='bodyWrapper'>
        <NavBar />
        <section className='heroSection'>
          <div className='heroWrapper'>
            <div className='textWrapper'>
              <h1 className='headerText'>Hey there! I'm Igor 👋</h1>
              <div className='bodyText'>
                A self-studying Junior Front End Developer who
                <strong> loves</strong> solving problems! I am
                <strong> looking for work</strong>, below you will find my
                projects.
              </div>
              <p className='bodyText'>
                Let's work together - contact me below! 👇
              </p>
            </div>
            {/* <img className='img' src='./src/assets/placeholder.jpg' /> */}
          </div>
        </section>
        <ScrollBar />

        <section id='projects' className='projectsSection'>
          <ProjectSwitcher />
          <ProjectStack />
        </section>

        <section id='contact' className='contactSection'>
          <Form />
        </section>
      </div>
    </>
  )
}

export default App
