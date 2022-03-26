import React from 'react';
import './HowReactWorks.css'

const HowReactWorks = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Simple "QA"</h1>
            <div className='how'>
                <h2>How React Works ?</h2>
                <p>React is a famous library of JavaScript. It's immutable and more faster and flexiable. Formost jsx gets converted to the React.createElement Function calls and each of functions return an object that is why we always import React while working with jsk. After that React create a render tree very faster using render method and set it to the memory name virtual DOM. Than compare with real DOM and find the changes very faster using diff Algorithm and show it to rhe UI.</p>
            </div>
            <div className='how'>
                <h2>Differences between "props" and "state" ?</h2>
                <p><strong>props</strong> are known as properties for use. It's use for used to pass data from one component to another. <strong>Props</strong> cannot be modified, it's read-only, and it's also <strong>Immutable</strong>.</p>
                <h1>&</h1>
                <p>The <strong>state</strong> represents parts of an Application that can change the states. Each component can have its <strong>State</strong>. The state is <strong>Mutable</strong> and It's changes from local to the component only.</p>
            </div>
            
        </div>
    );
};

export default HowReactWorks;