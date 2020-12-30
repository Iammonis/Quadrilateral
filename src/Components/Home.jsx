import React from 'react'
import { Navbar } from './Navbar'

export const Home = () => {
    return (
        <div >
            <Navbar />
            <div style={{background: `url(${'http://static.naukimg.com/s/7/109/assets/images/homepagebgImage.d92f90dc.webp'})`, width:'100vw', height:'100vh'}} />
        </div>
    )
}
