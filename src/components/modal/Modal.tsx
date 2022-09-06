import React from 'react'
import closeButton from '../../assets/icons/x-default.svg'

export default function Modal (props: {isOpen: boolean, children: React.ReactNode, title: string, closeModal: Function}): any {
  return (
      <div className={ `${ props.isOpen ? 'block' : 'hidden' } fixed inset-0 bg-gray-700 bg-opacity-20 flex items-center overflow-auto w-screen` }>
          <div className='m-auto p-4 z-20 min-w-[48rem] bg-white rounded-xl'>
              <div className='flex justify-between'>
                  <h1 className='font-bold text-3xl capitalize'>{ props.title }</h1>
                  <img src={ closeButton } alt='close modal' onClick={ props.closeModal() } className='w-6'></img>
              </div>
              { props.children }
          </div>
      </div>
  )
}
