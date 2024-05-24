'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import LangContext from '../../context/LangContext'

const DhammaSchoolPage = () => {
  const { t } = useContext(LangContext)
  return (
    <div className="bg-white py-8">
      <div className="text-black container mx-auto px-4 sm:px-10 lg:px-20">
        <div className="block mx-auto my-12 font-semibold w-full lg:w-2/4">
          <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mb-4 leading-normal">
            {t('PROJECT_TOPIC')}
          </p>
        </div>
        <div className="block my-12">
          <p className="text-left text-md sm:text-lg md:text-xl mb-4 leading-normal">
            {t('CURRENT_CONDITION')}
          </p>
          <img
            className=" w-full"
            src="/static/coverproject.jpeg "
            alt="project images"
          />
        </div>
        <div className="block my-12">
          <p className="text-left text-md sm:text-lg md:text-xl mb-4 leading-normal">
            {t('COMPLETED_CONDITION')}
          </p>
          <img
            className=" w-full"
            src="/static/coverproject2.png"
            alt="project images"
          />
        </div>
        <div className="block my-12">
          <p className="text-base">
            {t('PROJECT_PARAGRAPH')}
          </p>
          <br />
          <br />
          <div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1w03ee5MPccFFa2I4yCjqf0Owrl1TK1-r/view?usp=sharing"
              className="  text-blue-800
             underline"
            >
              {t('PROJECT_ESTIMATION')}
            </a>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <br />
              <br />
              <p className="text-xl text-orange text-center">{t('DONATION_HEADER')}</p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'left',
                  flexDirection: 'column',
                }}
                className="my-4 items-center"
              >
                <Image
                  src="/static/boc.png"
                  alt="pittugala-temple-web-logo"
                  width={150}
                  height={100}
                  loading="lazy"
                />
              </div>
              <p>{t('DONATION_TEXT1')}</p>
              <p>{t('DONATION_TEXT2')}</p>
              <p>{t('DONATION_TEXT3')} - 8576912</p>
              <p>0715608209</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DhammaSchoolPage
