import Footer from '@/components/footer'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Dhamma School Events'
import EventNavigation from '@/components/Dhamma School Events/navigation'

const Home = () => {
  return (
    <div>
      <Navbar />
      <EventNavigation />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
