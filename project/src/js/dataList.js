jQuery($=>{
    var id = location.search.slice(1).split("=")[1];
    console.log(id)

    $.ajax({
        type: "get",
        url: "http://localhost:1804/project/src/api/dataList.php",
        data: {id:id},
        dataType:'json',
        success: function(data){
            console.log(data[0])
            let wdata = data;
            
            //console.log(wdata);
            $('.big img').attr('src', `${wdata[0].img}`);
            $(".zhu-name").text(`${wdata[0].name}`);
            $(".small li img").attr('src',`${wdata[0].img}`);
            $(".shuoming").text(`${wdata[0].explain}`);
            $(".num strong").text(`${wdata[0].price}`);
            $(".jiaqian").text(`￥${wdata[0].price}`);
            $(".rongliang").text(`${wdata[0].qty}`);
            $(".place span").text(`${wdata[0].place}`);
            var goodslist = getCookie('goodslist') || [];
    if(typeof goodslist === 'string'){
        console.log(goodslist)
        goodslist = JSON.parse(goodslist);
         
    }
    
    $("#btnAddcart").on("click",function(e){
        console.log(6666)
        var val = $(".spin").val();
        var idx;
        var has = goodslist.some(function(g,i){
            idx = i;
            return g.id === id;
        });
        if(has){
            goodslist[idx].qty=(goodslist[idx].qty)*1+val*1;
        }else{
                // 获取商品信息
                var goods = {
                    id:data[0].id,
                    name:data[0].name,
                    img:data[0].img,
                    price:data[0].price,
                    guige:data[0].qty,
                    // 商品数量
                    qty:val 
                };
                goodslist.push(goods);
        }
                //if(e.target == $('.join').get(0) || e.target == $('.buyit').get(0)){
        var now=new Date();
        now.setDate(now.getDate()+7);
        document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';

                //}
                //if(e.target == $('.join').get(0)){
                    //$('.animate').fadeIn(500).animate({top:"-4px"},500).fadeOut(500).animate({top:'-330px'},500);
                //}
                //if(e.target == $('.buyit').get(0)){
                    //location.href='shoppingCart.html?id'+par;
                //}       
    })
            
        }
    })

    

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

    var cookies = getCookie('userid');
    //var username = getCookie('userid').replace(/\"/g, "");
    var qty = $(".spin").val();
        //数量增减

    //获得文本框对象
    var t = $(".spin");
    //初始化数量为1,并失效减
    $('.decrease').attr('disabled',true);
        //数量增加操作
    $(".increase").click(function(e){ 
        // e.preventDefault();
        // 给获取的val加上绝对值，避免出现负数
        var res = t.val(Math.abs(parseInt(t.val()))+1);
        console.log(res)
        if (parseInt(t.val())!=1){
            $('.decrease').attr('disabled',false);
        };
    }) 
        //数量减少操作
    $(".decrease").click(function(){
        t.val(Math.abs(parseInt(t.val()))-1);
        if (parseInt(t.val())==1){
            $('.decrease').attr('disabled',true);
        };
    })

    
    //放大镜
    // $(".big").hiZoom({
    //     width: 500,
    //     position: 'left',
    //     distance: 10
     
    // });




})