jQuery($=>{
    let $yanzhengma = $(".yanzheng");
    let $name = $(".username");
    let $password = $(".password");
    let $shouji = $(".shouji");
    let $queren = $(".sure");
    let $invite = $(".invite");
    let one = false;
    let two = false;
    let three = false;
    let four = false;

    let usernum = '';
    let psw = '';

    //手机号 设置不能为空  聚焦 是否存在
    $name.on('blur',function(){
        if($name.val() == '请输入您的手机号'){
            $name.val("输入不能为空！");
            $name.css("color","#f99");
            one = false;
        }
        usernum = $name.val();
        usernum = $name.val(),
        phone = /^1[3456789]\d{9}$/; //手机正则表达式
        if(phone.test(usernum)){
            $name.css("color","green");
            one = true;
        }else{
            $name.val("电话输入有误！");
            $name.css("color","#f99");
            one = false;
        }
    })
    $name.on('focus',function(){
        if($name.val() == '输入不能为空！'){
            $name.val('');
            $name.css("color","#ccc");
            one = false;
        }
    })

    //密码
    $password.on('blur',function(){
        if($password.val() == '6-20位字母，符号或数字'){
            $password.val("输入不能为空！");
            $password.css("color","#f99");
            two = false;
        }else{
            psw = $password.val();
            pass = /^[\S]{6,20}$/;
            if(pass.test(psw)){
                two = true;
            }else{
                $password.val("请输入6-20位密码");
                $password.css("color","#f99");
                two = false;
            }
        }
    })
    $password.on('focus',function(){
        if($password.val() == '输入不能为空！'){
            $password.val('');
            $password.css("color","#ccc");
            two = false;
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
        if($yanzhengma.val() == '输入不能为空！'){
            $yanzhengma.val('');
            $yanzhengma.css("color","#ccc");
            three = false;
        }
    })
    
    //手机验证码
    $shouji.on('blur',function(){
        if($shouji.val() == '手机验证码'){
            $shouji.val("#");
            $shouji.css("color","#58bc58");

        }
    })
    $shouji.on('focus',function(){
        if($shouji.val() == '#'){
            $shouji.val('');
            $shouji.css("color","#ccc");
        }
    })



    //确认密码
    $queren.on('blur',function(){
        if($queren.val() == '再次输入密码'){
            $queren.val("输入不能为空！");
            $queren.css("color","#f99");
            four = false;
        }
        else if($password.val() != $queren.val()){
            $queren.val("请输入正确密码");
            $queren.css("color","#f99");
            four = false;
        }
        else{
            $queren.css("color","green");
            four = true;
        }
    })
    $queren.on('focus',function(){
        if($queren.val() == '输入不能为空！'){
            $queren.val('');
            $queren.css("color","#ccc");
            four = false;
        }
    })


    //邀请码
    $invite.on('blur',function(){
        if($invite.val() == '邀请码'){
            $invite.val("#");
            $invite.css("color","#58bc58");
        }
    })
    $invite.on('focus',function(){
        if($invite.val() == '#'){
            $invite.val('');
            $invite.css("color","#ccc");
        }
    })


    //点击注册
    $(".liji").on('click',function(){
        if(one && two && three && four && $(".check").prop('checked')){
            signIn();
        }else{
            alert("注册失败");
        }
    })
    function signIn(){
        $.ajax({
            type: "post",
            url: "http://localhost:1804/project/src/api/register.php",
            data: `userid=${usernum}&password=${psw}`,
            success: function(data){
                if(data === 0){
                    alert('用户名已存在'); 
                    console.log(5445)
                }
                if(data == 1){
                    location.href = "http://localhost:1804/project/src";
                    console.log(999)
                }
            }
        })
       
    }

})