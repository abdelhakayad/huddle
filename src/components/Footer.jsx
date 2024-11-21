import React from 'react'
import { flogo } from '../assets/assets'
import { companyInfo, links, socialIcons } from '../constants/constants'
import {motion} from 'framer-motion'
import {fadeIn} from '../animations/variants'

export default function Footer() {
  return (
    <footer className='bg-VDarkCyan w-full  text-white'>
      <section className='w-full lg:pt-32 sm:pt-40 xs:pt-44 pb-10 lg:pl-32 sm:pl-6 xs:pl-5 flex flex-col gap-8'>
      <motion.a
        variants={fadeIn("down",0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount:0.7}}
        className='block' href="#"><img src={flogo} className='w-40 cursor-pointer' alt="" /></motion.a>
      <motion.section
        variants={fadeIn("right",0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount:0.7}}
        className='grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-rows-3 xs:grid-rows-3'>
        <section className='flex flex-col lg:gap-3 sm:gap-5 xs:gap-5'>
        {
          companyInfo.map((info, index)=>(
              <section key={info.id} className={`flex ${index==0 ? 'items-start':'items-center'} flex-row lg:gap-3 sm:gap-6 xs:gap-5`}>
                <img src={info.icon} className='' alt="" />
                <p className='lg:min-w-full sm:w-[40%] xs:w-[60%]'>{info.content}</p>
              </section>
              ))
          }
          </section>
        <section className='flex flex-col lg:ml-32 lg:mt-0 sm:mt-20 xs:mt-20 gap-3'>
        {
          links[0].first.map((link1)=>(
                <a  href="#">{link1.link}</a>
          ))
        }
        </section>
        <section  className='flex flex-col lg:ml-20 sm:ml-0 xs:ml-0 gap-3'>
        {
          links[0].second.map((link2)=>(
                <a key={link2.id} href="#">{link2.link}</a>
              ))
            }
        </section>
        <section className='flex lg:justify-normal sm:justify-center xs:justify-center gap-3'>
        {
          socialIcons.map((icons)=>(
            <img key={icons.id} src={icons.icon} className='w-6 h-6 p-1 border cursor-pointer border-white rounded-full
            hover:shadow-md hover:opacity-80 hover:border-Pink transition-all duration-[250ms] ease-in' alt="" />
          ))
        }
        </section>
      </motion.section>
      <motion.section
        variants={fadeIn("up",0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: true, amount:0.7}}
        className='flex lg:pr-10 sm:pr-0 xs:pr-0 lg:justify-end sm:justify-center xs:justify-center'>
        <h1 className='font-openSans text-sm'>© Copyright 2018 Huddle. All rights reserved</h1>
      </motion.section>
      </section>
    </footer>
  )
}
