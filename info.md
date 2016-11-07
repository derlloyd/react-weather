

install webpack
npm install -g webpack@1.12.13 

add react and react dom to package.json
npm install --save react@0.14.7 react-dom@0.14.7 



npm install --save-dev webpack@1.12.13 babel-core@6.5.1 babel-loader@6.2.2 babel-preset-es201                   
5@6.5.0 babel-preset-react@6.5.0

npm install --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react              

webpack first arg is location of file
second is where you want to put the bundle.js file
webpack ./public/app.js ./public/bundle.js 



var {Route, Router, IndexRoute, hashHistory} = require ('react-router');
// object destructuring
// same as var Route = require(react-router).Route