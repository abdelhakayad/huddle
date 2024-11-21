import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Subscribe() {
  return (
    <motion.section
        variants={fadeIn("up",0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount:0.7}}
        className=' relative lg:mx-auto sm:mx-5 xs:mx-10 z-20 mt-40 text-VDarkCyan'>
      <article className='bg-white lg:w-fit sm:w-full xs:w-full flex flex-col absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-20 py-10 gap-8 justify-center items-center border border-none lg:rounded-md sm:rounded-xl xs:rounded-2xl shadow-xl '>
        <motion.h1
            variants={fadeIn("down",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount:0.7}}
            className='capitalize font-bold text-2xl font-openSans'>ready to build your community?</motion.h1>
        <motion.button
            variants={fadeIn("up",0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount:0.7}}
            className='capitalize w-fit rounded-3xl font-Poppins font-xbold text-sm bg-Pink text-white border border-none py-3 px-12 shadow-md hover:shadow-lg hover:opacity-80 transition-all duration-[250ms] ease-in'>
          get started for free
        </motion.button>
      </article>
    </motion.section>
  )
}
