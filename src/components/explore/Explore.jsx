import React from 'react';
import './explore.css';
import Button from '../button/Button';
import Reasons from './Reasons';
import explore_img from '../../assets/image (1).png';

const Explore = (props) => {
    const reasons = props.reasons.map(reason => {
        return (
            <Reasons 
                id={reason.id}
                description={reason.description}
                background={reason.background}
            />
        )
    });

    return (
        <div className="construction-explore">
            <div className="construction-explore-top">
            <div>
                <p>Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.</p>
                <Button 
                    title={props.items[0].title}
                    background={props.items[0].background}
                    border={props.items[0].border}
                    color={props.items[0].color}
                    box_shadow={props.items[0].box_shadow}
                />
            </div>
            <div className="construction-explore-top-header">
                <h1>Why Choose us for best construction experience</h1>
            </div>
            </div>
            <div className="construction-explore-bottom">
                <img src={explore_img} alt="" />
                <div className="construction-explore-bottom-reasons">
                    {reasons}
                </div>
            </div>
        </div>
    )
};

export default Explore;
