// var mysql=require("mysql");
// exports.connect=function(sql,param,callback){
//   var db=mysql.createConnection({
//     host:"localhost",   ///数据库URL
//     port:"3306",     //数据库端口，默认3306
//     user:"ww315117", 
//     password:"ww315117",
//     password:"ww315117",
//     database:"dog"
//   });
//   db.connect();
//   db.query(sql,param,callback);
//   db.end();
// };


var mysql=require("mysql");
exports.connect=function(sql,callback){
  var db=mysql.createConnection({
    host:"localhost",   ///数据库URL
    port:"3306",     //数据库端口，默认3306
    user:"root", 
    password:"ww315117",
    database:"drug"
  });
  db.connect();
  db.query(sql,callback);
  db.end();
};



// var mysql = require('mysql');

// //创建连接池
// var pool  = mysql.createPool({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   port: 3306,
//   database: '1000phone',
//   multipleStatements: true
// });


// module.exports = {
//     select: function(tsql, callback){
//         pool.query(tsql, function(error, rows){
//       if(rows.length > 1){
//         callback({rowsCount: rows[1][0]['rowsCount'], data: rows[0]});
//       } else {
//         callback(rows);
//       }
//         })
//     }
// }
