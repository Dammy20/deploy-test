import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import HowItWorkContent from './HowItWorkContent'
import WhyCHooseUs from './WhyCHooseUs'

function HowItWork() {
  return (
    <>
     <Breadcrumb pageName="How It Works" pageTitle="How It Works"/>  
     <HowItWorkContent/>
     <WhyCHooseUs/> 
     <AboutUsCounter/>
    </>
  )
}

export default HowItWork