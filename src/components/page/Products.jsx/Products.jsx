import React from 'react'
import AboutUsCounter from '../../common/AboutUsCounter'
import Breadcrumb from '../../common/Breadcrumb'
import ProductsWrap from './ProductsWrap'
import HeroBanner3 from '../home/HeroBanner3'
import Catagory from '../home/Catagory'
import UserRoute from '../../routes/UserRoute'
import { UserProvider } from '../../common/UserContext'


function products() {
    return (
        <>

            <UserProvider>
                <UserRoute>


                    <ProductsWrap />


                </UserRoute>
            </UserProvider>


        </>
    )
}

export default products