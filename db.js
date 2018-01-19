var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/rest-api")
            .then(conn => global.conn = conn.db("rest-api"))
            .catch(err => console.log(err))

    
function findAll(callback){  
    global.conn.collection("instagrams").find({}).toArray(callback);
}

function insert(customer, callback){
    global.conn.collection("customers").insert(customer, callback);
}

var ObjectId = require("mongodb").ObjectId;
function findOne(id, callback){  
    global.conn.collection("customers").find(new ObjectId(id)).toArray(callback);
}

function update(id, customer, callback){
    global.conn.collection("customers").update({_id:new ObjectId(id)}, customer, callback);
}

function deleteOne(id, callback){
    global.conn.collection("customers").deleteOne({_id: new ObjectId(id)}, callback);
}

function findData(callback){
    global.conn.collection("instagrams").find().sort({hora_coleta: -1}).toArray(callback);
}



module.exports = {findAll, insert, findOne, update, deleteOne, findData }
 
