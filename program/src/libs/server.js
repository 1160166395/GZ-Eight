// var express = require('express');
// var app = express();
// app.use(express.static('../../src'));
// require('./route.js').dog(app);//dog是函数名

// app.listen(2333);




var express = require('express');
var app = express();
app.use(express.static('../../src'));
require('./route.js').drug(app);
require('./route.js').user(app);
require('./route.js').regists(app);
require('./route.js').goodslist(app);
require('./route.js').details(app);
require('./route.js').shopCar(app);
require('./route.js').clicktocar(app);
require('./route.js').showCar(app);
require('./route.js').getGoods(app);
app.listen(2566);