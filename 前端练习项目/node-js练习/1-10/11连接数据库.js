var mysql=require('mysql')
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student'
})

connection.connect();
connection.query('select * from stu',function (err,rows){
    if(err)throw err;
    console.log(rows)

})
connection.end();
