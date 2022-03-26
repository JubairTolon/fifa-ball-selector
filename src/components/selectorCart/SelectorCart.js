import React, { useState } from 'react';
import Choose1 from '../chooseOne/Choose1';
import './SelectorCart.css'
const SelectorCart = ({selector}) => {
    const items = selector;
    const [oneForMe, setOneForMe] = useState([]);
    const [chooseAgain, setChooseAgain] = useState([]);
    
    const ChooseOne = (items) => {
        const oneSelect = Math.floor(Math.random() * items.length + 1);
        const oneSelectItem = items[oneSelect];
        setOneForMe(oneSelectItem);
        selector.length = 0;
        
    }
    const ChooseAgain = () => {
        const blank = [];
        setChooseAgain(blank);
        selector.length = 0;

    }
    
    return (      
        <div className='selector-cart'>
            <h3>Ball Selection Summary</h3>
                <div className='selection-info'>
                    <div className='item'> 
                        {  
                            items.map(item => 
                            <p key={item.id}>
                                {item.name}
                            </p>
                            )
                        }                        
                    </div>  
                    <Choose1 finalOne={oneForMe}></Choose1>                        
                <button onClick={()=> ChooseOne(items)}  className='choose1-btn'><strong>Choose 1 For Me</strong></button><br></br>
                <button onClick={()=> ChooseAgain(chooseAgain)} className='chooseAgain-btn'><strong>Choose Again</strong></button>
                </div>
        </div>
    );
};

export default SelectorCart;