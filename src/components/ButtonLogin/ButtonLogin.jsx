import React from 'react'
import './ButtonLogin.css'

function ButtonLogin({children}) {
  return (
    <button className='btn-login'>{children}</button>
  )
}

export default ButtonLogin