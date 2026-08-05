-create a repository 
-Initialize the repository 
-node_modules , package.json , package-lock.json 
-install express
-create a server 
-listen to port 7777
-write a request handlers for /test , /hello
-install nodemon and update scripts inside package.json
-what are dependencies 
-what is the use of "-g" while npm install
-diff between caret and tilde


-Initislise git
-gitignore
-create a remote repo on github
-push all the code to remote origin
-play with routes and route extension ex, /hello , hello/2 , /xyz
-order of route matter a lot
-install postman app and make a workspace/ collection > test api call
-write logic to handle GET, POST, PATCH,DELETE API call and test them on postman
-explore routing and use of ?, +, (), * in the routes
-use of regex in routes /a/ , /.*fly$/
-reading the dynamic routes



-Multiple route handlers - play with the code
-next()
-next function mand error along with res.send()
-app.use("/route" , rH , [rH2 ,rH3], rH4 , rH5)
-what is a middleware ? why do we need it?
-How express JS basically handles requests behind the scenes
-Difference app.use and app.all 
-write a dummy auth middleware for admin
-write a dummy auth middleware for all user routes, except /user /login
-Error handling using app.use("/" , (err,req , res , next) = {});