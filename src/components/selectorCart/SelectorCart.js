import React from 'react';
import './SelectorCart.css'

const SelectorCart = ({selector}) => {
    const items = selector;

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
                <button className='choose1-btn'>Choose 1 For Me</button><br></br>
                <button className='chooseAgain-btn'>Choose Again</button>
                </div>
        </div>
    );
};

export default SelectorCart;