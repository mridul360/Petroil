import React from 'react'
import Container from '../Layout/Container'
import { FiPhoneCall } from 'react-icons/fi'

const Top = () => {
  return (
    <div>
      
      <Container>
        <div className=''>
          <div>
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
