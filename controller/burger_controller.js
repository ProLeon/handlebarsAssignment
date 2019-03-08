var express = require("express");
var burgers = require("../models/burgers.js")
var connection = require("../config/connections.js")
var router = express.Router();

router.get("/", function(req, res) {
    let currentBurgers = [];
    let devouredBurgers = [];
    burgers.selectAll(function(result){
        for(i=0;i < result.length; i++){
            if(result[i].devoured === 0) currentBurgers.push(result[i])
            else devouredBurgers.push(result[i])
        }
        
        
    })
    res.render("index", {
        burgers: currentBurgers,
        devouredBurgers: devouredBurgers
    });
    
});

router.post("/api/burgers", function(req, res) {
    burger = req.body.burger;
    var queryString = "INSERT INTO burgers (burgerName) VALUE ('" + burger + "')";
    connection.query(queryString, function(err, result){
        if (err) throw err;
    })

});
router.post("/api/devour", function(req,res){
    id = req.body.id;
    console.log(id);
    var queryString = "UPDATE burgers SET devoured=true WHERE id=" + id;
    connection.query(queryString, function(err, result){
        if (err) throw err;

    })
})

module.exports = router;