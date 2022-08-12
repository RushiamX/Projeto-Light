import React from 'react'

import './Header.css'

import { UilPrevious } from '@iconscout/react-unicons'
import { UilBars } from '@iconscout/react-unicons'

export default function Header() {
  return (
    <div className='Header'>
      <a 
        href="#"><UilPrevious size="40" color="black" />
      </a>
      <h1>
        TEAM LIGHT
      </h1>
      <a 
        href="#"><UilBars size="40" color="black" />
      </a>
    </div>
  )
}
