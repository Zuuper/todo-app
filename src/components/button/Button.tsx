import React from 'react'
// import { ReactComponentElement as  } from 'react'

export default function ButtonComponent (props: {use_icon: boolean, text: string, onClickEffect: any}): any {
  return (
      <button className='bg-purple-600 text-white flex justify-center space-x-2 w-full py-6 rounded-lg text-xl' onClick={ props.onClickEffect() }>
          {props.text}
      </button>
  )
}
