import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import DashbordWrap from './DashboardWrap'
import Header from '../../common/Header'
import UserRoute from '../../routes/UserRoute'

function Dashboard() {
  return (
    <>
      <UserRoute>
        <Header />

        <DashbordWrap />
      </UserRoute>


    </>
  )
}

export default Dashboard