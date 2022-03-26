import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Ball.css';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Ball = ({ball, handleAddToSelector}) => {
    // const {ball, handleAddToSelector} = props;
    const {name, picture, price} = ball;
    return (
        <div className='ball'>
            <img src={picture} alt="" />
            <div className="ball-info">
                <p className='ball-name'>Name: {name}</p>
                <p>Price: ${price}</p>
            </div>
            <div className='btn'>
                <button onClick={()=> handleAddToSelector(ball)} className='btn-select'>
                <p>Select</p>
                <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
            </button>
            </div>
        </div>
        
    );
};

export default Ball;