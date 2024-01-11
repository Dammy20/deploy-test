import React from 'react'
import Header from '../../common/Header'
import UserRoute from '../../routes/UserRoute'
import Footer from '../../common/Footer'
import LinkAccountWrap from './LinkAccountWrap'
function LinkAccount() {
    return (
        <div>
            {/* <Header> */}
            <UserRoute>
                <Header />

                <LinkAccountWrap />

                <Footer />
            </UserRoute>
            {/* </Header> */}

        </div>
    )
}

export default LinkAccount
