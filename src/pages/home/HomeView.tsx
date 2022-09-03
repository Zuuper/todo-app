import React from 'react'
import ButtonComponent from '../../components/button/Button'
import useDate from '../../hooks/time'
import EmptyState from '../../components/state/EmptyState'
function Header (): any {
  return (
      <div className="mb-16 w-full">
          <h1 className="uppercase font-bold text-4xl lg:text-7xl ">
              Todo App
          </h1>
          <p className="capitalize text-sm lg:text-xl">Help Your Time Management</p>
      </div>
  )
}
function Clock (): any {
  const date = useDate()
  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
      <div className="mb-12">
          <p className="text-2xl font-bold capitalize">{date.toDateString()}</p>
          <p className="text-4xl">{date.toLocaleTimeString()}</p>
      </div>
  )
}

function HomeView (): any {
  return (
      <div className="xl:flex xl:justify-between xl:space-x-4 items-center min-h-screen">
          <div className="mb-16 mt-6 xl:my-0 xl:w-1/2  text-center xl:text-left">
              <Header />
              <Clock />
              <div className="hidden md:block md:w-1/2 md:mx-auto xl:mx-0">
                  <ButtonComponent use_icon={ true } text="Create todo App" />
              </div>
          </div>
          <div className="w-full xl:w-1/2">
              <div className='mb-8 md:mb-0'>
                  <EmptyState/>
              </div>
              <div className='block md:hidden mb-16'>
                  <ButtonComponent use_icon={ true } text={ 'create todo app' }/>
              </div>
          </div>
      </div>
  )
}

export default HomeView
