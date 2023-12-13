import React from 'react'
import Button from "../../components/button"
import logo from "../../assets/logo.png";
import pp from "../../assets/pp.png";
import "./style.css";
import home_background from "../../assets/home_background.png"

const HomePage = () => {
    return(
        <div className='homepage'>
            <div className='home_img'>
                <img src= {home_background} alt="home_background" />
            </div>
            <div className='home_container'>

                <div className='home_nav'>
                    <div className='nav_left'>
                        <div className='logo_img'>
                            <img src={logo} alt="logo" />
                        </div>
                        <ul >
                            <li>Home</li>
                            <li>Services</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div className='profile_img'>
                        <img src={pp} alt="pp" />
                    </div>
                </div>

                <div className='home_content'>

                    <div>
                        <p>Discover Seamless Transportation with Relax Taxi.</p>
                    </div>

                    <button onClick={console.log('Browse')}>Browse Our Services</button>
                </div>
            </div>
        </div>
    )

}

export default HomePage