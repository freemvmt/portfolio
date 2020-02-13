import React from 'react'
import './App.css'
import { H1 } from '../styled'
import styled from 'styled-components'

const App = () => {
  return (
    <div className='app'>
      <H1>DAN GOSS</H1>
    </div>
  )
}

styled(App)`
  padding: var(--component-padding);
`

export default App
