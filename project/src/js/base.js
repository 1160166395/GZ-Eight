jQuery($=>{

    //吸顶
    //获取元素
    let $xitop = $("#Y_header .logo");
    let $banxin = $xitop.children(".container");
    let $goodName = $banxin.children("#Y_header .logo .form").children("#Y_header .logo .form p");
    console.log($goodName);    
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll >= 150){
            $xitop.addClass("logo1 logo");
            $goodName.css("display","none")
        }else{
            $xitop.removeClass("logo1");
        }

        //显示边边
        if(scroll >= 600){
            $("#Y_side").css("display","block");
            $("#Y_aside").css("display","block")
        }else{
            $("#Y_side").css("display","none");
            $("#Y_aside").css("display","none")
        }
    });
    $("#Y_aside .totop").click(function(){
        $("html,body").animate({scrollTop: 0},'slow');
    })

    //轮播图

    let $page = $("#Y_banner"); 
    let $img = $page.children("div").children();console.log($img)
    let timer;
    // $("#Y_banner div").hide();
    let index = 0;

    function show(){
        timer = setInterval(()=>{
            index++;
            autoPlay();
        },3333);  
    }
    show();
    function autoPlay(){console.log(5555)
        if(index >= $img.length){
            index = 0;

        }else if(index<0){
            index = $img.length-1;
        }
        $.each($img,i=>{
            if(i === index){
                $($img[i]).show();
                // $(allyuan[i]).addClass("active");
            }else{
                $($img[i]).hide();
                // $(allyuan[i]).addClass("active");
            }
        });
    }
   
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

    
    
})