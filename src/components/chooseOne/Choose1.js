import React from 'react';
import './Choose1.css'

const Choose1 = ({finalOne, items}) => {
    const {name} = finalOne;
    // console.log(items)

    return (
        <div  className='one-for-me'>
            <p>{name}</p>
        </div>
    );
};

export default Choose1;