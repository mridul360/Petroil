import React from 'react'

const Container = ({children}) => {
  return (
    <div>
      <div className='w-auto md:w-[1409px] mx-auto px-5 md:px-0'>{children}</div>
    </div>
  )
}

export default Container
