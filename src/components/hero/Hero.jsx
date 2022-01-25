import React from 'react';
import './hero.css';
import Navbar from '../navbar/Navbar';
import Button from '../button/Button';
import Stats from './Stats';
import hero_background from '../../assets/Mask Group.png';

const Hero = (props) => {
    const stats = props.stats.map(item => {
        return (
            <Stats 
                stat={item.stat}
                title={item.title}
            />
        )
    });

    return (
        <div className="construction-hero">
            <Navbar />
            <img id="construction-hero-background" src={hero_background} alt="" />
            <div className="construction-hero-header">
                <h1><span>Masters</span> of Consistency and <span>Quality</span>.</h1>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                <div className="construction-hero-header-buttons">
                    <Button 
                        title={props.items[0].title}
                        background={props.items[0].background}
                        border={props.items[0].border}
                        color={props.items[0].color}
                        box_shadow={props.items[0].box_shadow}
                    />
                    <Button 
                        title={props.items[1].title}
                        background={props.items[1].background}
                        border={props.items[1].border}
                        color={props.items[1].color}
                        box_shadow={props.items[1].box_shadow}
                    />
                </div>
            </div>
            <div className="construction-hero-stats">
                {stats}
            </div>
        </div>
    )
}

export default Hero;
