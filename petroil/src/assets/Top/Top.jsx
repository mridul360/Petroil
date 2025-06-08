import React from 'react'
import Container from '../Layout/Container'
import { FiPhoneCall } from 'react-icons/fi'
import { LuMailCheck } from 'react-icons/lu'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'

const Top = () => {
  return (
    <div className='py-4 px-100 bg-[#282828] text-white'  >
      
      <Container>
        <div  className=' flex items-center gap-[532px]' >
          <div className='flex gap-[49px] '>
          <div className='flex items-center gap-[5px] ' >
            <LuMailCheck />
            <h1><a href=""></a>mail@yourcompany.com</h1>
          </div>
          <div className='flex items-center gap-[5px]'>
            <FiPhoneCall />
            <h1><a href="">+896 120 5889 <span>(Toll free)</span></a></h1>
          </div>
        </div>
        <div className=' flex items-center gap-[24px]'>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <IoLogoInstagram />
        </div>
        </div>
      </Container>
      <h1>hi</h1>
      <h1>hi</h1>
    </div>
  )
}

export default Top
