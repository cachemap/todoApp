var express = require('express');
    var app = express();
    var port = process.env.PORT;
    var bodyParser = require('body-parser');

// import routes from ./routes/
var todoRoutes = require('./routes/todos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// GET routes
app.get('/', function(req, res) {
    res.send("Hello from the root route!");
});

app.use("/api/todos", todoRoutes);

app.listen(port, function() {
    console.log("App is running on port: " + port);
});

