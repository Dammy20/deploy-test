import React from 'react'
import Header from '../../common/Header'
import UserRoute from '../../routes/UserRoute'
import ComingSoon from '../comingsoon/ComingSoon'




function ComingSoonWrap() {
    return (

        <UserRoute>
            <Header />
            <ComingSoon />

        </UserRoute>



    )
}

export default ComingSoonWrap
