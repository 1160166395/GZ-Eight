jQuery($=>{

    //吸顶
    //获取元素
    let $xitop = $("#Y_header .logo");
    let $banxin = $xitop.children(".container");
    let $goodName = $banxin.children("#Y_header .logo .form").children("#Y_header .logo .form p");
    console.log($goodName);    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll >= 150){
            $xitop.addClass("logo1 logo");
            $goodName.css("display","none")
        }else{
            $xitop.removeClass("logo1");
        }
    });

    //轮播图

    let $page = $("#Y_banner"); 
    let $photo = $page.children();
    console.log($photo[1]);
    


})