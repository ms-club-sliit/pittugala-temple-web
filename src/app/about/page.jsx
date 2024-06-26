'use client'
import React, { useEffect, useContext } from 'react'
import historyData from '@/data/HistoryData.json'
import LangContext from '../../context/LangContext'

const About = () => {
  const { t } = useContext(LangContext)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`show-${entry.target.dataset.direction}`)
        } else {
          entry.target.classList.remove(
            `show-${entry.target.dataset.direction}`
          )
        }
      })
    })

    const hiddenRightElements = document.querySelectorAll('.hide-right')
    const hiddenLeftElements = document.querySelectorAll('.hide-left')

    hiddenRightElements.forEach((el) => {
      el.dataset.direction = 'right'
      observer.observe(el)
    })

    hiddenLeftElements.forEach((el) => {
      el.dataset.direction = 'left'
      observer.observe(el)
    })
  }, [])

  return (
    <>
      <div className="min-h-screen w-full bg-white px-[10px] sm:px-[40px] py-[20px] overflow-hidden ">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-[40px]">
            <div>
              <div className="text-center text-black font-semibold text-sm sm:text-lg md:text-xl">
                {t('HISTORY')}
              </div>
              <div className="flex justify-center">
                <div className="bg-[#740000] w-[180px] sm:w-[220px] mt-1 h-[1.5px] sm:h-[2px]"></div>
                <div className="bg-[#E35F00] w-[190px] sm:w-[240px] mt-1 h-[1.5px] sm:h-[2px]"></div>
              </div>

            </div>
            <div className="flex justify-center">
              <div className="w-fit lg:w-full">
                {historyData && historyData.data.length ? (
                  historyData.data.map((item, index) => (
                    <div
                      key={index}
                      className="max-w-[500px] lg:max-w-full justify-between relative"
                    >
                      <div className="w-full lg:flex">
                        <div
                          className={`w-full lg:w-1/2 flex justify-center items-center border-[#740000] pt-[20px] lg:pb-[20px] px-[40px] xs:px-[50px] lg:px-[0px] ${index % 2 == 0
                            ? 'border-l-[4px] lg:border-r-[2px] lg:border-l-0 order-1'
                            : 'border-l-[4px] lg:border-l-[2px] order-2'
                            }`}
                        >
                          <div className={`w-[240px] max-h-[150px] xs:w-[300px] xs:max-h-[180px] sm:w-[400px] sm:max-h-[250px] lg:w-[360px] lg:max-h-[220px] ${index % 2 == 0 ? 'hide-right' : 'hide-left'}`}>
                          </div>
                        </div>
                        <div
                          className={`w-full lg:w-1/2 flex justify-center border-[#740000] pt-[20px] pb-[20px] px-[40px] xs:px-[50px] lg:px-[0px] ${index % 2 == 0
                            ? 'border-l-[4px] lg:border-l-[2px] order-2'
                            : 'border-l-[4px] lg:border-r-[2px] lg:border-l-0 order-1'
                            }`}
                        >
                          <div className={`grid gap-[20px] lg:gap-[0px] text-black w-[240px] xs:w-[300px] sm:w-[400px] lg:w-[360px] ${index % 2 == 0 ? 'hide-left' : 'hide-right'}`}>
                            <div className="font-bold pb-[10px]">{item.year}</div>
                            {
                              t('LANGUAGE') === 'en' ?
                                <div>{item.description_en}</div>
                                :
                                <div>{item.description}</div>
                            }
                          </div>
                        </div>
                      </div>
                      <div className="rounded-full w-[25px] h-[25px] bg-[#E35F00] absolute left-[2px] lg:left-[50%] top-[20px] translate-x-[-50%]"></div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
