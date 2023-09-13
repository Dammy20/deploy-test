import React from 'react'
import Breadcrumb from '../../common/Breadcrumb'
import SubscribArea from '../../common/SubscribArea'
import BlogStandardWrap from './BlogStandardWrap'

function BlogStandard() {
  return (
    <>
     <Breadcrumb pageName="Blog Standard" pageTitle="Blog Standard"/>   
     <BlogStandardWrap/>
     <SubscribArea/>
    </>
  )
}

export default BlogStandard