import React from 'react'
import Header from '../../common/Header'
import { UserProvider } from '../../common/UserContext'



function CreateProductWrap() {
    return (
        <div>
            <UserProvider>
                <Header />

            </UserProvider>
        </div>
    )
}

export default CreateProductWrap
