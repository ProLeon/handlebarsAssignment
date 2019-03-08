var orm = require("../config/orm.js");


burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            console.log(res);
            cb(res);
        });
    },
    insertOne: function(burger,cb){

    }
}


module.exports = burger;