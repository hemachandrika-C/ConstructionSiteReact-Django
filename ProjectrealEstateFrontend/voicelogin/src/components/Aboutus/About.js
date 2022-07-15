import React from 'react'
import './About.scss'

function About() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <img src="https://t3.ftcdn.net/jpg/00/62/46/08/360_F_62460828_pKPQlx4cfIneTE6x9fe9z4bV4RTTzLhe.jpg" className="img-fluid aboutus_img" />

                </div>
                <div className="col-lg-6 hs">
                    <h5 className="about_txt">About us</h5>
                    <p>
                    Make the important decisions ahead of time and on your own schedule. Then there's nothing to worry about when it's time to eat.
                    </p>
                    <p>
                    Planning ahead means less produce going bad in the fridge. Add what you already own to the virtual pantry and our algorithms will use it up with priority.
                     </p>
                    <p>No more skipping meals because you're missing ingredients. Review your meals for the week and the grocery list automatically updates.
Then get it delivered with our Instacart or AmazonFresh integration.</p>

                </div>

            </div>
            
        </div>
    )
}

export default About
