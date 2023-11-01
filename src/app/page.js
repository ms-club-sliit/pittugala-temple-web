import DhammaSchoolEventsPage from '@/components/dhammaSchoolEvents'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'
import Projects from '@/components/projects'

const Home = () => {
  return (
    <>
      <Navbar />
      <DhammaSchoolEventsPage />
      <Projects />
      <Footer />
    </>
  )
}

export default Home
