Authentication: OAuth with help by passport js
Deployment: Azure Web Apps
DB: MongoDB

Dependencies:
npm install --save nodemon
npm install --save express
npm install --save passport passport-google-oauth20
npm install --save mongoose
npm install --save cookie-session
npx create-react-app client
npm install --save concurrently
npm install --save stripe
npm install --save body-parser
npm install --save path-parser
npm install --save lodash

in client:
npm install http-proxy-middleware --save
npm install --save redux react-redux react-router-dom
npm install --save materialize-css
npm install --save axios redux-thunk
npm install --save react-stripe-checkout
npm install --save sendgrid
npm install --save redux-form@8.1.0
npm install --save lodash

Steps:
1- set server up
2- deploy to github and azure
3- setup Oauth
4- setup MongoDB and create Schemas
5- [Optional]: split environment to prod and dev, and add env parameters to azure
6- install react
7- install redux and other dependencies and setup redux store and reducers in index.js
8- create main components with empty content at setup routing with BrowserRoute and Route
9- install and configure Materialize
10- To fetch users: install axios and thunk
11- install and configure stripe js in client side
12- install stripe and body parser in server side to handle charge requests
13- Prepare Project to production. Build Process...

The rest is not MERN specific. But we used sendgrid to send mails to recipients, and we used ngrok to forward notificatons from sendgrid to localhost dev environment. And we used path-parser to extract survey id from path.

npm install --prefix client && npm run build --prefix client && node index.js
