import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import {
  ABOUT,
  ADDRESS,
  CONNECT_WITH_US,
  DHAMMA_SCHOOL,
  EVENTS,
  PROJECTS,
  REFERENCES
} from '@/consts/consts'

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="text-black">
          <div className="grid gap-6 lg:gap-8 grid-cols-12">
            <div className="lg:col-span-4 col-span-12">
              <div className="mb-6 md:mb-0 justify-center items-center">
                <a href="/" className="flex items-center">
                  <img
                    src="/static/pittugala-temple-web-logo.png"
                    className="h-12 sm:h-16 md:h-20 mx-auto object-contain"
                    alt="pittugala-temple-web-logo"
                  />
                </a>
                <p className="my-8 text-lg">
                  මාලබේ පිට්ටුගල ශ්‍රී සුදර්ශනාරාමය අවුරුදු 300 කට වඩා පැරණි
                  පුරාණ මහා විහාරයකි.
                </p>

                <div className="flex mt-4 space-x-5 sm:justify-start sm:mt-0">
                  <Link
                    href="https://web.facebook.com/SriTharunodayaDahamPasala"
                    className="transition-all hover:scale-125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://web.facebook.com/srisudarshanaramatemple/"
                    className="transition-all hover:scale-125"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 col-span-6">
              <h2 className="mb-6 text-xl font-semibold uppercase">{REFERENCES}</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    {ABOUT}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/projects" className="hover:underline">
                    {PROJECTS}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/events" className="hover:underline">
                    {EVENTS}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/dhammaSchool" className="hover:underline">
                    {DHAMMA_SCHOOL}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-6">
              <h2 className="mb-6 text-xl font-semibold uppercase">
                {CONNECT_WITH_US}
              </h2>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <a href="tel:+94713990912">
                    <span>+94 71 399 0912</span>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="mailto:srisudharmaramaya@gmail.com">
                    <span>srisudharmaramaya@gmail.com</span>
                  </a>
                </li>
                <li className="mb-4">
                  <span>{ADDRESS}</span>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3 col-span-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.1059336962744!2d79.96935574475854!3d6.908835252637313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256d72b7ea4e1%3A0xa0057ffacc69689c!2sSri%20Sudharshanarama%20Temple%20-%20Pittugala%2CMalabe!5e0!3m2!1sen!2sde!4v1707636552160!5m2!1sen!2sde"
                width="400"
                height="300"
                allowfullscreen=""
                loading="lazy"
              />
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
