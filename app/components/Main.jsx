import React from 'react';
import Nav from './Nav';

const Main = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component title</h2>
            {props.children}
        </div>
    );
};

export default Main;
