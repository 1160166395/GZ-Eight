// var masql=require("./mysql.js");
// function dog(app){
//   app.get("/dog",function(req,res){
//     res.append("Access-Control-Allow-Origin","*");
//     db.connect("select * from introduce",function(error,data){
//       console.log(123);
//     });
//     res.send("<h1>success</h1>");
//   });
// }

// module.exports = {
//   dog
 
// }

//传参
// var db = require("./mysql.js");
// function drug(app){
//     app.get("/drug",function(req,res){
//         var id=req.query.id;
//         res.append("Access-Control-Allow-Origin","*");
//       db.connect("SELECT * FROM yiyao where id="+id,function(error,data){
//         res.send(data);
//       });
//     });
// };
// module.exports= {   
//     drug
// }

//主页路由 node语句
var db = require("./mysql.js");
function drug(app){
    app.get("/drug",function(req,res){
        res.append("Access-Control-Allow-Origin","*");
        db.connect("SELECT * FROM yiyao",function(error,data){
        res.send(data);
        // console.log(2222);
      });

    });
};
function user(app){
    app.get("/user",function(req,res){
        var username=req.query.username;
        var password=req.query.password;
            console.log(2525);
            res.append("Access-Control-Allow-Origin","*");
            db.connect("SELECT * FROM user WHERE username ="+ username+" and password="+password,function(error,data){
            res.json(data);
            // console.log(data);
        });
    });
};
function regists(app){
    app.get("/regists",function(req,res){
        var username=req.query.username;
        var password=req.query.password;
        //console.log(2525);
        res.append("Access-Control-Allow-Origin","*");
            db.connect("SELECT * FROM user WHERE username ="+ username,function(error,data){
                console.log(data);
                if(data.length == 0 ){
                    db.connect("INSERT INTO `user`(`username`, `password`) VALUES ('"+username+"','"+password+"')",function(error,data){
                        res.send("success");
                    });     
                }else{
                    res.send("fail");
                }
            });
        })
        
    };
function goodslist(app){
    app.get("/goodslist",function(req,res){
        res.append("Access-Control-Allow-Origin","*");
        db.connect("SELECT * FROM goods",function(error,data){
        res.send(data);
        // console.log(data);
        });
    });
};



function details(app){
    app.get("/details",function(req,res){
        res.append("Access-Control-Allow-Origin","*");
        db.connect("SELECT * FROM goods where id="+req.query.id,function(error,data){
            res.send(data);
            // console.log(data);
        });
    });
    
};

function clicktocar(app){
    app.get("/clicktocar",function(req,res){
        res.append("Access-Control-Allow-Origin","*");
        var goodsid=req.query.goodsid;
        var username=req.query.username;
        var qty = req.query.qty*1;
        var goodnum = 0;
        db.connect("SELECT * FROM shopcar WHERE username ="+ username+" and goodsid="+goodsid,function(error,data){ 
            if(data.length != 0){
                qty = qty +  data[0].qty*1;
                db.connect("UPDATE shopcar set qty="+ qty+" where goodsid ="+ goodsid+" and username="+username,function(error,data){

                });
            }else{
                db.connect("INSERT INTO `shopcar`(`goodsid`,`username`, `qty`) VALUES ('"+goodsid+"','"+username+"','"+qty+"')", function(error,data){
                    // if( data.affectedRows == 1 ){
                    // }
                }); 
            }
            
            
            res.send(data);
        });
        
    });
    
};
function shopCar(app){
    app.get("/shopCar",function(req,res){
        res.append("Access-Control-Allow-Origin","*");
        db.connect("SELECT * FROM shopcar where id="+req.query.id,function(error,data){

            res.send(data);
            // console.log(data);
        });
    });
    
};

function showCar(app){
    app.get("/showCar",function(req,res){
        res.append("Access-Control-Allow-Origin","*");
        db.connect("SELECT * FROM shopcar where username="+req.query.username,function(error,data){
            res.send(data);
            console.log(data,222)
        });
    });
    
};


function getGoods(app){
    app.get("/getGoods",function(req,res){
        res.append("Access-Control-Allow-Origin","*");
        db.connect("SELECT * FROM goods where id="+req.query.id,function(error,data){
            res.send(data);
            console.log(data,111)
        });
    });
    
};

module.exports= {   
    drug,
    user,
    regists,
    goodslist,
    details,
    clicktocar,
    shopCar,
    showCar,
    getGoods
}



// var exprss = require('express');
// var app = express();

// app.post('/post', function(req, res){
//   var db = require('./mysql');
//   db.select('select * from user where username= amd pass', function(res){
//     req.send('{}')
//   })
// })



// db.select('select * from bb', function(res){
  
// })