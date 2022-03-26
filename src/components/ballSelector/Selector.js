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
        const newSelector = [...selector, ball];
   
        const array = selector.find(({id}) => id === ball.id);
    
        for (let index = 0; index < newSelector.length; index++) {
            if(newSelector.length > 4){
                alert('Not more than 4 items');
                break;
            }
            else if(array){
                break;
            }
            else{
                setSelector(newSelector);
            }           
        }
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