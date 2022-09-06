import React, { useState } from 'react'
import { Interface } from 'readline'

export default function TodoForm (props: {form: Interface}): any {
  const [ form, setForm ] = useState<Interface | undefined>()
  console.log(form)
  return (
      <div></div>
  )
}
