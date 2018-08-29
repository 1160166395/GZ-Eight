
$(function($){ 
  $("#all")
  .filter(".three")
  .hide()
  .end()
  .filter("#all")
  .hover(
    function () {
      $(this).toggleClass("active")
        .next().stop(true, true).slideToggle();
    }
  );


var id = location.search.slice(1).split("=")[1];
console.log(location.search);
var t = $(".cart_num");


  function getCookie(key){
    // 先获取所有cookie
    var cookies = document.cookie;
    if(cookies.length === 0){
        return '';
    }
    // 拆分每一个cookie
    cookies = cookies.split('; ');
    for(var i=0;i<cookies.length;i++){
        // 拆分key,value
        var arr = cookies[i].split('=');
        if(arr[0] === key){
            return arr[1];
        }
    }
  }

  var cookies = getCookie('username');
  var username = getCookie('username').replace(/\"/g, "");
  var qty = $(".num").val();


  $.ajax({
    url:"http://localhost:2566/details",
    type:'get',
    data: {
      id:id
    },
    success:function(data){    
        $('.toBig').attr('src', `${data[0].img}`);
        $('.detail_mid h2').text('' + `${data[0].name}`);
        $('.detail_mid .exp').text('' + `${data[0].descript}`);
        $('.pris .price').text('￥' + `${data[0].price}`);
        $('.pris .reviews').text('' + `${data[0].discuss}`);
        console.log(data)
    }
  })    


  $.ajax({
    url:"http://localhost:2566/showCar",
    type:'get',
    data: {
      username:username
    },
    success:function(data){    
      t.text(data.length);
    }
  })


//数量增减

  //获得文本框对象
  var t = $(".num");
  //初始化数量为1,并失效减
  $('.minus').attr('disabled',true);
    //数量增加操作
    $(".plus").click(function(){ 
    // 给获取的val加上绝对值，避免出现负数
      t.val(Math.abs(parseInt(t.val()))+1);
      if (parseInt(t.val())!=1){
      $('.minus').attr('disabled',false);
    };
    }) 
    //数量减少操作
    $(".minus").click(function(){
      t.val(Math.abs(parseInt(t.val()))-1);
      if (parseInt(t.val())==1){
      $('.minus').attr('disabled',true);
      };
    })
    
    
    if(cookies == []){
      window.location.href =  "login.html";
    }else{
      $(".addCart button").click(function(){ 

        
        // console.log(qty);
        $.ajax({
          url:"http://localhost:2566/clicktocar",
          type:'get',
          data: {
            goodsid:id,
            username:username,
            qty:qty
          },
          success:function(data){  
            console.log  (data)
            
          }
        })
      }) 
    }
          


    //放大镜
    $(".hizoom").hiZoom({
      width: 300,
      position: 'right',
      // distance: 10
   
    });


})
