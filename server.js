const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get("/", function(req, res, next) {
    res.status(200).render("index", {

    });
});

//For user story 4, if a string is passed onto the website
//ie website.com/string it will then search for the string

/*
app.get("*", function(req, res, next) {
    console.log("404 url:", req.url);
    res.status(404).render("404", {
        url: req.url
    })
});
*/

app.listen(port, function(){
    console.log("Hello world", port);
})
