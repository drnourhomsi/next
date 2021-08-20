import React from 'react'

import Meta from '../Components/Header/Meta'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'


const layout = ({children}) => {
    return (
        <>
            <Meta />
            <Header />
            <main>
            {children}
            
            </main>
            <Footer />
        </>
    )
}

export default layout