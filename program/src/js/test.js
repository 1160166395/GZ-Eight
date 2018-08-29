// $(function(){
//     var index = 0;
//     // var document = document;
//     // var body = document.body;
//     function lowEnough(){
//         var pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
//         var viewportHeight = window.innerHeight || 
//             document.documentElement.clientHeight ||
//             document.body.clientHeight || 0;
//         var scrollHeight = window.pageYOffset ||
//             document.documentElement.scrollTop ||
//             document.body.scrollTop || 0;
//         // console.log(pageHeight);
//         // console.log(viewportHeight);
//         // console.log(scrollHeight);
//         return pageHeight - viewportHeight - scrollHeight < 20;
//     }

//     function doSomething(){
//         var htmlStr = $('.itemSearchList>li');
//         for(var i=0;i<10;i++){
//             htmlStr += "<li></li>";
//         }
//         $('.itemSearchList').append(htmlStr);
//         index++;
//         pollScroll();//继续循环
//         $('#spinner').hide();
//     }

//     function checkScroll(){
//         if(!lowEnough()) return pollScroll();

//         $('#spinner').show();
//         setTimeout(doSomething,900);
        
//     }
//     function pollScroll(){
//         setTimeout(checkScroll,1000);
//     }
//     checkScroll();
// })


$(function($){
    $.ajax({
        url:"./datas.json",
        type:'get',
        // dataType:"json",
        success:function(res){
            var str = "<ul class='con_ul'>";
            $.each(res.books, function(idx,val) {
                str +="<li class=\"sec_li\"><a href='goodsDetail.html?booksId="+val.id+"' class='lp_li_a'><div class='lp_li_imgWrap'><img src='"+val.imgUrl+"'/></div><p class='lp_li_name'>"
                +val.title+"</p><p class='lp_li_price'>"
                +'￥'+val.price+"</p></a><li>";
            });
            str += "</ul>";
            $('.content').append(str);
        },error:function(){
            alert(error)
        }
    });
})

$(function($){
    //获取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    //接收URL中的参数booksId
    var id = getUrlParam('booksId');
    console.log('id:'+id);
    $.ajax({
        url:"./datas.json",
        type:'get',
        // dataType:'json',
        success:function(res,status){
            console.log(status)
            $.each(res.books, function(idx,val) {
            //根据id获取详情数据
                if(id == val.id){
                var str = "<img src='"+val.imgUrl+"'/><p>出版编号："+val.id+"</p><p>出版社："+val.publish+"</p><p>页数："+val.num+"</p><p>简介："+val.desc+"</p>";
                console.log('index:'+idx);
                }
                $('.booksDeatail').append(str);
            });
        }
    })
})