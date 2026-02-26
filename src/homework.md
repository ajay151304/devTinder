- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install expresss
- Create Server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update script inside package.json
- What is the use of "-g" while npm install
- Diff b/w caret(^) and tilde(~)

- Initialize git
- .gitignore
- Create a remote repo
- push all code to remote origin
- Play with route extensions ex. /hello, /, hello/2
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection >test API call
- Write logic to handle GET, POST, PATCH, DELETE API Calls and test themon Postman
- Explore routing and use of ? , + , (), 8 in the routes
- USe of regex in routes /a/, /.\*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple Route Handlers- Play with the code
- next()
- next() function and errors along with res.send()
- app.use("/route", rH1, rH2, [rH3, rH4], rH5);
- What is a Middleware & why do we need it ?
- How express JS Basically handles requests behind the scenes
- Difference app.use() and app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login

- Error Handling using a app.use("/,(err,req,res,next))

- Create a free cluster on mongoDB official website (Mongo Atlas)
- install mongoose library
- Connect your application to the Database <connection_url>/devTinder
- Call the connectDB function and connect to database before starting application on 7777 or 3000

- Create a userSchema and user Model
- Create POST/signup API to add data to database
- Push some documents using API calls from postman
