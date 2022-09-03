import React from 'react'
import emptyStateImage from '../../assets/images/illustration/91.svg'

export default function EmptyState (): any {
  return (
      <>
          <img src= { emptyStateImage } alt="Empty State Illustration" className='w-80 lg:w-[32rem] mb-4 flex mx-auto'></img>
          <p className='text-sm sm:text-xl text-center font-bold capitalize'>Nothing Todo righ now</p>
          <p className='text-sm sm:text-xl capitalize text-center'>Create something</p>
      </>
  )
}
