var express = require('express');

// tells node we are using express server
var app = express();

var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlRoutes')(app)
require('./app/routing/apiRoutes')(app)

app.listen(port, function(){
    console.log("app listening on http://localhost:" + port);
})
