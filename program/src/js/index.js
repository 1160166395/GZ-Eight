
//传输数据
$(function($){
    $.ajax({
        url:"http://localhost:2566/drug?type='home'",
        type:'get',
        // success:function(data){
        //     var wee = data.filter((item,index)=>{
        //         return item.type=='f';
        //     });
        //     console.log(wee);
        // }
        success:function(data){
            data.map(function(item,index){
                if(item.type === 'f'){
                    $('.ul').append(append(item,index));
                }
                if(item.type === 's'){
                    $('.ul1').append(append(item,index));
                }
                if(item.type === 'h'){
                    $('.ul9').append(append(item,index));
                }
                if(item.type === 'v'){
                    $('.ul2').append(append(item,index));
                }
                if(item.type === 'c'){
                    $('.ul3').append(append(item,index));
                }
                if(item.type === 'y'){
                    $('.ul4').append(append(item,index));
                }if(item.type === 'd'){
                    $('.ul5').append(append(item,index));
                }
                if(item.type === 'p'){
                    $('.ul6').append(append(item,index));
                }
                if(item.type === 'm'){
                    $('.ul7').append(append(item,index));
                }
                if(item.type === 'a'){
                    $('.ul8').append(append(item,index));
                }
                if(item.type === '1'){
                    $('.logo1').append(logo(item,index));
                }
                if(item.type === '2'){
                    $('.logo2').append(logo(item,index));
                }
                if(item.type === '3'){
                    $('.logo3').append(logo(item,index));
                }
                if(item.type === '4'){
                    $('.logo4').append(logo(item,index));
                }
                if(item.type === '5'){
                    $('.logo5').append(logo(item,index));
                }
                if(item.type === '6'){
                    $('.logo6').append(logo(item,index));
                }
                if(item.type === '7'){
                    $('.logo7').append(logo(item,index));
                }
                if(item.type === '8'){
                    $('.logo8').append(logo(item,index));
                }
            })
        }
    })
    //渲染数据
    function append(item,index){
        return ` <li>
                    <a href="./detail.html?id=${item.id}">
                        <div class="imgbox">
                            <img src="${item.img}">
                        </div>
                        <p class="medName">${item.name}</p>
                        <p class="medPrice"><i>￥</i>${item.price}</p>
                    </a>
                </li>`
    }
    function logo(item,index){
        return ` <li>
                    <a href="#">
                        <img src="${item.img}">
                    </a>
                </li>`
    }
})
//用户登录成功的主页面
jQuery(function($){
    let url = location.search;
    // var url = location.href.slice(1);
    let username = url.slice(1).split("=")[1];
    if(username){
        let usermsg = $(".nav-self li")[0];
        usermsg.innerHTML = '欢迎<strong style="color:blue;font-size:12px;">' +username+ '</strong>'
    }

    //大轮播
    let $banner = $(".ban_mid>ul");
    $lis = $banner.children("li");
    let len = $lis.length;
    $($lis[0]).clone().appendTo($banner);
    let idx = 0;

    let $circle = $(".ban_mid");
    let $scircle = $("<div/>");
    $scircle.addClass("scircle");
    $scircle.appendTo($circle);
    for(let i=0; i<len; i++){
        $("<div/>").appendTo($scircle);

    }
    $scircle.children()[0].className = "active_ban";
    setInterval(function(){
        idx++;
        if(idx>len){
            $banner.css({"left":0});
            idx = 1;
        }else if(idx<0){
            idx = len-1;

        }
        let banleft = -idx*750;
        $banner.animate({
            left:banleft

        },"slow");

        for(let i=0; i<len; i++){
            if(i == idx){
                $scircle.children()[i].className = "active_ban";

            }else{
                $scircle.children()[i].className = "";
            }
        }
        if(idx == len){
            $circle.children()[0].className = "active_ban";
        }
        

    },3000)


    //小轮播

   
    // let box = $(".f_banner");
    // let $yuan = $("<div/>");
    // $yuan.addClassName = "yuan";
    // $yuan.appendTo(banner);
    // let str = "";
    // for(let i=0; i<img.length; i++){
    //     str += `<li></li>`;
    // }
    // $yuan.append(str);
   
    // let allyuan = $(".yuan li");
    // $.each(img, i=>{
    //     if(i>0){
    //         $(img[i]).hide();

    //     }else{
    //         $(allyuan[i]).addClass('active');
    //     }
    // });



    let banner = $(".first");
    let  img = $(".first img");
    let timer;

    let index = 0;
    function show(){
        timer = setInterval(()=>{
            index++;
            autoPlay();
        },3333)
    }
    show();
    function autoPlay(){
        if(index >= img.length){
            index = 0;

        }else if(index<0){
            index = img.length-1;
        }
        $.each(img,i=>{
            if(i === index){
                $(img[i]).show();
                // $(allyuan[i]).addClass("active");
            }else{
                $(img[i]).hide();
                // $(allyuan[i]).addClass("active");
            }
        });
    }
    // $.each(allyuan, i=>{
    //     $(allyuan[i]).mousemove(()=>{
    //         clearInterval(timer);
    //         $.each(allyuan,j =>{
    //             if(j===i){
    //                 index = j;
    //                 autoPlay();
    //                 $(img[j]).show();
    //                 $(allyuan[j]).addClass("active");

    //             }else{
    //                 $(img[j]).hide();
    //                 $(allyuan[j]).addClass("active");

    //             }
    //         })
    //     })
    //     $(allyuan[i]).mouseleave(()=>{
    //         show(timer);
    //     })
    // })



})
$(function(){
    let banner = $(".two");
    let  img = $(".two img");
    let timer;

    let index = 0;
    function show(){
        timer = setInterval(()=>{
            index++;
            autoPlay();
        },3333)
    }
    show();
    function autoPlay(){
        if(index >= img.length){
            index = 0;

        }else if(index<0){
            index = img.length-1;
        }
        $.each(img,i=>{
            if(i === index){
                $(img[i]).show();
            }else{
                $(img[i]).hide();
            }
        });
    }
})
$(function(){
    let banner = $(".four");
    let  img = $(".four img");
    let timer;

    let index = 0;
    function show(){
        timer = setInterval(()=>{
            index++;
            autoPlay();
        },2222)
    }
    show();
    function autoPlay(){
        if(index >= img.length){
            index = 0;

        }else if(index<0){
            index = img.length-1;
        }
        $.each(img,i=>{
            if(i === index){
                $(img[i]).show();
            }else{
                $(img[i]).hide();
            }
        });
    }
})
$(function(){
    let banner = $(".three");
    let  img = $(".three img");
    let timer;

    let index = 0;
    function show(){
        timer = setInterval(()=>{
            index++;
            autoPlay();
        },2222)
    }
    show();
    function autoPlay(){
        if(index >= img.length){
            index = 0;

        }else if(index<0){
            index = img.length-1;
        }
        $.each(img,i=>{
            if(i === index){
                $(img[i]).show();
            }else{
                $(img[i]).hide();
            }
        });
    }
})