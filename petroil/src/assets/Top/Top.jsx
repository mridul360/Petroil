import React from 'react'
import Container from '../Layout/Container'
import { FiPhoneCall } from 'react-icons/fi'
import { LuMailCheck } from 'react-icons/lu'

const Top = () => {
  return (
    <div className='px-4 py-100 bg-black-500'  >
      
      <Container>
        <div className='flex '>
          <div>
            <LuMailCheck />
            <h1><a href=""></a>mail@yourcompany.com</h1>
          </div>
          <div>
            <FiPhoneCall />
            <h1><a href="">+896 120 5889 (Toll free)</a></h1>
          </div>
        </div>
      </Container>
      
    </div>
  )
}

export default Top
