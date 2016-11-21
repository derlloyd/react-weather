import React from 'react';

const About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About component</h1>
            <p>welcome to the about page</p>
            <p>Some tools used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>The JS frameword
                <li>    
                    <a href="http://openweathermap.org">Open Weather Map</a>
                </li>The search API
            </ul>
        </div>
    );
};

export default About;
