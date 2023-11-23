import LandingEvents from '@/components/landingPage/events'
import About from '@/components/About'
import Projects from '@/components/projects'
import Discover from '@/components/landingPage/discover'

const Home = () => {
  return (
    <>
      <Discover />
      <About />
      <Projects />
      <LandingEvents />
    </>
  )
}

export default Home
