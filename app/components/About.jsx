var React = require('react');

// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About component</h3>
//         )
//     }
// });

// can only refactor this stateless functional component with only Render method
var About = (props) => {
    return (
        <div>
            <h3>About component</h3>
            <p>welcome to the about page</p>
        </div>
    )
};

module.exports = About;