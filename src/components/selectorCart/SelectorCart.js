import React from 'react';

const SelectorCart = ({selector}) => {
    const {name} = selector;
    return (
        <div>
            <h3>Ball Selection Summary</h3>
                <div className='selection-info'>    
                <p>Ball Name: {name}</p>
                </div>
        </div>
    );
};

export default SelectorCart;