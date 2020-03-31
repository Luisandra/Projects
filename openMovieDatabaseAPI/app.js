// General Search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb

const express = require('express');
const app = express();
//request no longer used - use node.fetch
const request = require('request');

app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("search");
})

app.get("/results", (req, res) =>{
    let searchFor = req.query.searchTerm;
    let newURL = "http://www.omdbapi.com/?s=" +searchFor + "&apikey=thewdb";
    request(newURL, (error, response, body) => {
        if(!error && response.statusCode == 200){
            const data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
})




app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening on default or 3k");
});