'use client'
import { useContext } from 'react';
import EventContainer from '@/components/dhammaSchoolEvents/eventContainer'
import events from './data/events.json'

import LangContext from '../../context/LangContext'

const DhammaSchoolPage = () => {
  const { t } = useContext(LangContext)
  const filteredEvents = events.filter(
    (event) => event.category === 'Dhamma School'
  )

  return (
    <>
      <div className="text-black container mx-auto px-4 sm:px-10 lg:px-20">
        <div className="block mx-auto my-12 font-semibold w-full lg:w-2/4">
          <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-4 leading-normal">
            {t('DHAMMA_SCHOOL_HEADER')}
          </p>
        </div>
        <div className="block my-12">
          <img
            src="/static/dammaSchool.jpeg"
            className="w-full"
            alt="dhamma school image"
          />
        </div>
        <div className="block my-12 text-center font-bold">
          <p className="text-base text-justify">
            {t('DHAMMA_SCHOOL_TEXT1')}
          </p>
          <br />
          <p className="text-base text-justify">
            {t('DHAMMA_SCHOOL_TEXT2')}
          </p>
        </div>
        <div className="block my-12">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredEvents.length ? (
              filteredEvents.map((event) => (
                <EventContainer key={event.id} event={event} />
              ))
            ) : (
              <p className="flex justify-center">
                No events to display for the selected category.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DhammaSchoolPage
