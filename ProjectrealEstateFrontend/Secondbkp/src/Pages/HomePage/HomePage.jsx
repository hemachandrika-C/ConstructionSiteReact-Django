import React from 'react'
import HomeHeader from '../../components/homeHeader/homeHeader'
import OurworkShortdef from '../../components/ourworksdef/ourworksdef'
import Footer from '../../components/Footer/footer'
import Booknow from '../../components/Booknow/Booknow'
import Awards from '../../components/Awards/Awards'

function HomePage() {
    return (
        <div>
            <HomeHeader />
            <OurworkShortdef />
            <Booknow />
            <Awards />
            <Footer />
          
            
        </div>
    )
}

export default HomePage
