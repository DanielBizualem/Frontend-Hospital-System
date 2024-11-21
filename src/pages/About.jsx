import React from 'react'
import { assets } from '../asset/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At [Your Company Name], we believe in the power of connection and collaboration. Founded in [Year], our mission is to [briefly describe your mission or purpose, e.g., "provide innovative solutions that enhance the lives of our customers"].</p>
          <p>We are a passionate team of [describe your team, e.g., "dedicated professionals, creative thinkers, and industry experts"] who share a common goal: to make a positive impact in our community and beyond. Our diverse backgrounds and experiences drive us to think outside the box and deliver exceptional results.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At [Your Company Name], our vision is to create a world where [describe the ideal outcome related to your mission, e.g., "innovation drives progress," "every individual has access to quality education," or "sustainability is at the heart of every business decision"].</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Streamlined the appointment scheduling that fits into your busy life style.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
           <b>Personalization</b>
          <p>Tailored recommendations and reminder to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About