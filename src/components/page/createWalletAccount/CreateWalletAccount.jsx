import React from 'react'
import Header from '../../common/Header'
import UserRoute from '../../routes/UserRoute'
import CreateWalletAccountWrap from './CreateWalletAccountWrap'

function CreateWalletAccount() {
    return (
        <div>
            <UserRoute>

                <CreateWalletAccountWrap />
            </UserRoute>

        </div>
    )
}

export default CreateWalletAccount
