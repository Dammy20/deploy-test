import React from 'react'
import Footer from './common/Footer'
import Header from './common/Header'
import { UserProvider } from './common/UserContext'

function Layout({ children }) {
  return (
    <>
      <UserProvider>
        <Header />
        {children}
        <Footer />
      </UserProvider>
    </>
  )
}

export default Layout