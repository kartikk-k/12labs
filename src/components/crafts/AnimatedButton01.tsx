"use client"

import React from 'react'

function AnimatedButton01() {

  const fullWord = 'Subscribe'
  const word = fullWord.split('')

  return (
    <div>
      <button className='bg-primary group flex items-center overflow-hidden text-white px-6 h-12 rounded-full'>
        <span className='inline-flex items-center relative overflow-hidden h-[14px]'>
          {word.map((letter, index) => (
            <span
              key={index}
              className={`inline-block group-hover:-translate-y-8 duration-[600ms] ease-in-out`}
              style={{
                transitionDelay: `${index * 30}ms`,
              }}
            >
              {letter}
            </span>
          ))}

          <span className='inline-flex left-0 absolute top-0 h-[14px] items-center'>
            {word.map((letter, index) => (
              <span
                key={index}
                className={`inline-block translate-y-[18px] group-hover:-translate-y-[0px] duration-[600ms] ease-in-out`}
                style={{
                  transitionDelay: `${index * 30}ms`,
                }}
              >
                {letter}
              </span>
            ))}

          </span>
        </span>
      </button>
    </div>
  )

}

export default AnimatedButton01