import React from 'react'
import { serviceContent } from '../constants/constants'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Services() {
  return (
    <section className='w-full font-Poppins px-12 pt-16 pb-40 flex flex-col justify-between items-center gap-10'>
      {
        serviceContent[0].Grow.map((sc)=>(
          <motion.article
            variants={fadeIn("up",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true, amount:0.7}}
            key={sc.id} className='flex lg:flex-row sm:flex-col-reverse xs:flex-col-reverse lg:items-center sm:items-center xs:items-center border border-none lg:rounded-md sm:rounded-xl xs:rounded-xl lg:pl-20 lg:pr-10 py-8 sm:gap-20 xs:gap-20 shadow-lg '>
              <motion.article
                variants={fadeIn("right",0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                className='flex flex-col gap-3 lg:items-start lg:text-start lg:justify-normal sm:items-center sm:justify-center sm:text-center xs:items-center xs:justify-center xs:text-center '>
                <h1 className='capitalize text-VDarkCyan text-2xl lg:text-start sm:text-center xs:text-center font-xbold'>{sc.title}</h1>
                <p className='text-GrayishBlue font-medium lg:w-[73%] sm:w-[55%] xs:w-[80%]'>{sc.content}</p>
              </motion.article>
              <motion.article
                variants={fadeIn("left",0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                className='flex '>
                <img className='lg:w-full sm:w-80 xs:w-72' src={sc.img} alt="" />
              </motion.article>

          </motion.article>
        ))
      }
      {
        serviceContent[0].Flowing.map((sc)=>(
          <motion.article
              variants={fadeIn("up",0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: true, amount:0.7}}
              key={sc.id} className='flex lg:flex-row-reverse sm:flex-col-reverse xs:flex-col-reverse lg:items-center sm:items-center xs:items-center border border-none lg:rounded-md sm:rounded-xl xs:rounded-xl lg:pl-20 lg:pr-10 py-8 sm:gap-20 xs:gap-20 shadow-lg '>
              <motion.article
                  variants={fadeIn("left",0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  className='flex flex-col gap-3 lg:items-start lg:text-start lg:justify-normal sm:items-center sm:justify-center sm:text-center xs:items-center xs:justify-center xs:text-center '>
                <h1 className='capitalize text-VDarkCyan text-2xl lg:text-start sm:text-center xs:text-center font-xbold'>{sc.title}</h1>
                <p className='text-GrayishBlue font-medium lg:w-[95%] sm:w-[54%] xs:w-[75%]'>{sc.content}</p>
              </motion.article>
              <motion.article
                variants={fadeIn("right",0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                className='flex '>
                <img className='lg:w-full sm:w-80 xs:w-72' src={sc.img} alt="" />
              </motion.article>

          </motion.article>
        ))
      }
      {
        serviceContent[0].Users.map((sc)=>(
          <motion.article
                variants={fadeIn("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true, amount:0.7}}
                key={sc.id} className='flex lg:flex-row sm:flex-col-reverse xs:flex-col-reverse lg:items-center sm:items-center xs:items-center border border-none lg:rounded-md sm:rounded-xl xs:rounded-xl lg:pl-20 lg:pr-10 py-8 sm:gap-20 xs:gap-20 shadow-lg '>
              <motion.article
                  variants={fadeIn("right",0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  className='flex flex-col gap-3 lg:items-start lg:text-start lg:justify-normal sm:items-center sm:justify-center sm:text-center xs:items-center xs:justify-center xs:text-center '>
                <h1 className='capitalize text-VDarkCyan text-2xl lg:text-start sm:text-center xs:text-center font-xbold'>{sc.title}</h1>
                <p className='text-GrayishBlue font-medium lg:w-[73%] sm:w-[50%] xs:w-[73%]'>{sc.content}</p>
              </motion.article>
              <motion.article
                  variants={fadeIn("left",0.6)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{once: true, amount:0.7}}
                  className='flex '>
                <img className='lg:w-full sm:w-80 xs:w-72' src={sc.img} alt="" />
              </motion.article>

          </motion.article>
        ))
      }
    </section>
  )
}
