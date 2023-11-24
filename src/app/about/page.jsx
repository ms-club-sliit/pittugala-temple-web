'use client'
import React, { useEffect } from 'react'
import historyData from '@/data/HistoryData.json'

const Image = 'image'

const About = () => {
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
      <div className="min-h-screen w-full bg-white px-[40px] py-[20px] overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid gap-[40px]">
            <div>
              <div className="text-center text-black font-bold text-2xl md:text-3xl">
                Sri Sudharmaramaya
              </div>
              <div className="flex justify-center">
                <div className="bg-[#740000] w-[30px] h-[3px]"></div>
                <div className="bg-[#E35F00] w-[50px] h-[3px]"></div>
              </div>
            </div>
            <div className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              vehicula libero nec augue molestie, non interdum tellus porttitor.
              Sed non ultrices dui. Cras auctor porttitor turpis in feugiat.
              Integer feugiat, ipsum quis commodo pharetra, nisl felis bibendum
              libero, eu congue libero nisl et nulla. Morbi a interdum diam, ut
              elementum sem. Phasellus vulputate egestas lacus a ultricies.
              Proin vestibulum tempus quam ac condimentum. Vivamus at nibh quis
              tortor posuere vehicula ut sit amet augue. Quisque risus enim,
              tristique at dolor nec, hendrerit hendrerit massa. In lib
            </div>
            <div>
              <div className="text-center text-black font-semibold text-lg md:text-xl">
                History of Sri Sudharmaramaya
              </div>
              <div className="flex justify-center">
                <div className="bg-[#740000] w-[100px] h-[2px]"></div>
                <div className="bg-[#E35F00] w-[160px] h-[2px]"></div>
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
                          className={`w-full lg:w-1/2 flex justify-center items-center border-[#740000] pt-[20px] lg:pb-[50px] px-[40px] xs:px-[50px] lg:px-[0px] ${
                            index % 2 == 0
                              ? 'border-l-[4px] lg:border-r-[2px] lg:border-l-0 order-1'
                              : 'border-l-[4px] lg:border-l-[2px] order-2'
                          }`}
                        >
                          <div
                            className={`w-[240px] h-[150px] xs:w-[300px] xs:h-[180px] sm:w-[400px] sm:h-[250px] lg:w-[360px] lg:h-[220px] ${
                              index % 2 == 0 ? 'hide-right' : 'hide-left'
                            }`}
                          >
                            <img
                              className="object-cover w-[240px] h-[150px] xs:w-[300px] xs:h-[180px] sm:w-[400px] sm:h-[250px] lg:w-[360px] lg:h-[220px]"
                              src={`./static/${item.image}`}
                            />
                          </div>
                        </div>
                        <div
                          className={`w-full lg:w-1/2 flex justify-center border-[#740000] pt-[20px] pb-[50px] px-[40px] xs:px-[50px] lg:px-[0px] ${
                            index % 2 == 0
                              ? 'border-l-[4px] lg:border-l-[2px] order-2'
                              : 'border-l-[4px] lg:border-r-[2px] lg:border-l-0 order-1'
                          }`}
                        >
                          <div
                            className={`grid gap-[20px] lg:gap-[0px] text-black w-[240px] xs:w-[300px] sm:w-[400px] lg:w-[360px] ${
                              index % 2 == 0 ? 'hide-left' : 'hide-right'
                            }`}
                          >
                            <div className="font-bold">{item.year}</div>
                            <div>{item.description}</div>
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
