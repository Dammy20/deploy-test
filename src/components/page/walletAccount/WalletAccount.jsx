import React from 'react'
import Header from '../../common/Header'
import UserRoute from '../../routes/UserRoute'
import WalletAccountWrap from './WalletAccountWrap'

function WalletWrap() {
    return (
        <div>
            <UserRoute>
                <Header />
                <WalletAccountWrap />
            </UserRoute>

        </div>
    )
}

export default WalletWrap
