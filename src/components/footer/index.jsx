import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="text-black">
          <div className="grid gap-6 lg:gap-8 grid-cols-12">
            <div className="lg:col-span-4 col-span-12">
              <div className="mb-6 md:mb-0">
                <a href="#" className="flex items-center">
                  <img
                    src="/static/logo-dharma-chakra.png"
                    className="h-12 mr-3"
                    alt="Pittugala template logo"
                  />
                </a>
                <p className="my-8 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vehicula
                </p>

                <div className="flex mt-4 space-x-5 sm:justify-start sm:mt-0">
                  <Link
                    href="#"
                    className="transition-all hover:scale-125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    className="transition-all hover:scale-125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    className="transition-all hover:scale-125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    className="transition-all hover:scale-125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
                  </Link>
                  <Link
                    href="#"
                    className="transition-all hover:scale-125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-6">
              <h2 className="mb-6 text-xl font-semibold uppercase">Links</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/projects" className="hover:underline">
                    Projects
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/events" className="hover:underline">
                    Events
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/dhammaSchool" className="hover:underline">
                    Dhamma School
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <h2 className="mb-6 text-xl font-semibold uppercase">
                Connect with us
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <span>+94713990912</span>
                </li>
                <li className="mb-4">
                  <span>srisudharmaramaya@gmail.com</span>
                </li>
                <li className="mb-4">
                  <span>Sri Sudarmaramaya Temple, Malabe, Colombo.</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.797616351774!2d79.9724682!3d6.914784299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db0806db0b%3A0x1f268e1d8b84cf05!2sPittugala%20Temple%2C%20162%2F24%2F1%20B263%2C%20Malabe%2C%20Sri%20Lanka!5e0!3m2!1sen!2sde!4v1696947856756!5m2!1sen!2sde"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="flex justify-center items-center">
          <span className="text-lg text-black text-center mr-2">
            Copyright © 2023 - All Rights Reserved | Powered By
          </span>
          <Link href="https://msclubsliit.org/" target="_blank">
            <img
              src="/static/ms-club-logo.png"
              className="h-8 ml-2"
              alt="Pittugala template logo"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
