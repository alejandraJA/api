const express = require("express");
const app = express();

app.use(require("body-parser").urlencoded({ extended: false }));

const axios = require("axios");


app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());


var mysql = require("mysql"); 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "crud"
});

app.get("/getAll", function (req, res) {
    var sql = "SELECT * FROM `user`"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result);
    });
});

app.post("/insert", function (req, res) {
    var sql = "INSERT INTO `user` (`id`, `name`, `lastName`, `age`) VALUES (" + req.body.id + ", '"+ req.body.name + "', '" + req.body.lastName + "', " + req.body.age + ")"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(req.body)
        res.json("ok");
    });
});


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});