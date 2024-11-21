import React from 'react'
import {heroContent} from '../constants/constants'
import { mockups } from '../assets/assets'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Hero() {
  return (
    <section className='w-full px-12 py-8 flex lg:flex-row sm:flex-col xs:flex-col justify-between lg:gap-0 sm:gap-10 xs:gap-10 items-center'>
      {
        heroContent.map((hc)=>(
          <motion.article
            variants={fadeIn("right",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount:0.7}}
            key={hc.id} className='font-Poppins text-VDarkCyan flex flex-col lg:justify-normal lg:text-start lg:items-start sm:justify-center sm:items-center sm:text-center xs:justify-center xs:items-center xs:text-center gap-8 flex-1'>
                <h1 className='capitalize lg:w-[90%] sm:w-[70%] leading-[4rem] lg:text-5xl sm:text-3xl xs:text-3xl font-xbold'>{hc.title}</h1>
                <p className='lg:w-[73%] sm:w-[53%] xs:w-[80%]'>{hc.content}</p>
                <motion.button
                  variants={fadeIn("up",0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  className='capitalize w-fit rounded-3xl font-Poppins font-xbold text-sm bg-Pink text-white border border-none py-3 px-12 shadow-md hover:shadow-lg hover:opacity-80 transition-all duration-[250ms] ease-in'>
                    {hc.button}
                </motion.button>
          </motion.article>
        ))
      }
     <motion.section
        variants={fadeIn("left",0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount:0.7}}
       className='flex flex-1'>
      <img src={mockups} alt="" />
     </motion.section>
    </section>
  )
}
