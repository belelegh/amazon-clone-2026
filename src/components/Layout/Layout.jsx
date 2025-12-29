import React from 'react'
import Header from '../Header/Header'

function Layout({children}) {
  return (
    <di>
        <Header/>
        {children}
    </di>
  )
}

export default Layout
