jQuery($=>{
    let $username = $(".idd");
    let $psw = $(".password");
    let $yanzhengma = $(".code");
    let one = false;
    let two = false;
    let three = false;
    var usernum = '';
    var password = '';

    //用户名
    $username.on('blur',function(){
        if($username.val() == '已验证手机'){
            $username.val("输入不能为空！");console.log($username.val())
            $username.css("color","#009");
            one = false;
        }
        usernum = $username.val();
        usernum = $username.val(),
        phone = /^1[3456789]\d{9}$/; //手机正则表达式
        if(phone.test(usernum)){
            $username.css("color","green");
            one = true;
        }else{
            $username.val("电话输入有误！");
            $username.css("color","#f99");
            one = false;
        }
    })
    $username.on('focus',function(){
        if($username.val() == '已验证手机'){
            $username.val('');
            $username.css("color","#ccc");
            one = false;
        }
    })

    //生成验证码
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 's', 'y', 'z'];
    function newma(){
        var suiji = '';
        for(var i=0; i<4; i++){
            var num = Math.floor(Math.random() * arr.length);
            suiji += arr[num];
        }
        $(".out").text(suiji);
    }
    newma();
    $(".change").on('click',newma);//重置验证码
    $yanzhengma.on('blur',function(){
        if($yanzhengma.val() == '验证码'){
            $yanzhengma.val("输入不能为空！");
            $yanzhengma.css("color","#f99");
            three = false;
        }
        else if($yanzhengma.val() != $(".out").text()){
            $yanzhengma.val("输入正确的验证码");
            $yanzhengma.css("color","#f99");
            three = false;
        }else{
            $yanzhengma.css("color","green");
            three = true;
        }
    })
    $yanzhengma.on('focus',function(){
        if($yanzhengma.val() == '验证码'){
            $yanzhengma.val('');
            $yanzhengma.css("color","#ccc");
            three = false;
        }
    })
    $psw.on('focus',function(){
        if($psw.val() == '密码'){
            $psw.val('');
            $psw.css("color","#ccc");
            // two = false;
        }
    })
    $(".dl").on('click',function(){
        usernum = $username.val();
        password = $psw.val();
        if($psw.val() != '' && one && three){
            login();
        }
        
    })

    function login(){
        $.ajax({
            type: "post",
            url: "http://localhost:1804/project/src/api/login.php",
            data:`userid=${usernum}&password=${password}`,
            success: function(data){
                // console.log(data);
                if(data == 0){
                    alert("用户名或密码错误");
                }
                if(data == 1){
                    location.href = "http://localhost:1804/project/src/index.html?userid="+usernum;
                    document.cookie='userid='+JSON.stringify(usernum)+';path=/';
                }
                if(data == 2){
                    alert("用户名不存在");
                }
            }
        })
    }

    if(cookies == []){
        window.location.href =  "http://localhost:1804/project/src/login.html";
      }else{
        $(".addCart button").click(function(){ 
  
          
          // console.log(qty);
          $.ajax({
            url:"http://localhost:2566/project/src/api/addcar.php",
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
})