import React, { useEffect, useState } from 'react';
import Ball from '../balls/Ball';
import SelectorCart from '../selectorCart/SelectorCart';
import './Seloctor.css'

const Selector = () => {
    //load data
    const [balls, setBalls] = useState([]);
    const[selector, setSelector] = useState([]);

    useEffect(()=>{
        fetch('ball.json')
        .then(res => res.json())
        .then(data => setBalls(data))
    },[])

    const handleAddBallToSelector = (ball) => {
        const newselector = [...selector, ball];
        setSelector(newselector);
        
    }
    return (
        <div className='main-container'>
            <div className="ball-container">      
                {
                balls.map(ball =>
                <Ball
                key={ball.id}
                ball={ball}
                handleAddToSelector = {handleAddBallToSelector}
                ></Ball>)
                }
            </div>
            <div className="selector-container">
                <SelectorCart selector={selector}></SelectorCart>
            </div>
            
        </div>
        
    );
};

export default Selector;