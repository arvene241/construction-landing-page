import React from 'react';
import './investor.css'
import logo1 from '../../assets/LOGO (1).png';
import logo2 from '../../assets/LOGO (2).png';
import logo3 from '../../assets/LOGO (3).png';
import logo4 from '../../assets/LOGO (4).png';
import logo5 from '../../assets/LOGO (5).png';

const Investors = () => {
    return (
        <div className="construction-investors">
            <img src={logo5} alt="" />
            <img src={logo4} alt="" />
            <img src={logo3} alt="" />
            <img src={logo2} alt="" />
            <img src={logo1} alt="" />
        </div>
    )
}

export default Investors;
