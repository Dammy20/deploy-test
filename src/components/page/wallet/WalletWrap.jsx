import React from 'react'
import Header from '../../common/Header'
import UserRoute from '../../routes/UserRoute'

function WalletWrap() {
    return (
        <div>
            <UserRoute>
                <Header />
            </UserRoute>

        </div>
    )
}

export default WalletWrap
