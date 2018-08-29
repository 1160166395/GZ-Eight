


$(function($){
    // let $page = $(".spinner");
    // let $pageList = $(".spinner>li");
    let start = 0;
    let end = 20;
    const qty = 20;
    
    $.ajax({
        url:"http://localhost:2566/goodslist",
        type:'get',
        data:{type:"99",
            search:1},
        success:function(data){
            console.log(data);
            showGoods(data);
            //点击页码加载数据
            $(".spinner").on('click',(e)=>{
                let num = $(".spinner>li");
                for(let i=0; i<num.length; i++){
                    if(e.target == num[i]){
                        let curPage = $(e.target).text();//获取页码
                        console.log(curPage);
                        start = ((curPage-1)*qty);//数据从第几个开始
                        end = (curPage*qty);//数据从第几个结束
                        $('.itemSearchList').html("");//清空页面
                        showGoods(data);
                    }
                }
            }) 
        }
    })
    function showGoods(data){
        let renderData = data.slice(start,end);
        renderData.map(function(item,index){
            if(item.type === '99'){
                console.log(111)
                $('.itemSearchList').append(goods(item,index));
            }
        })
    }
    //渲染数据
    function goods(item,index){
        return `<li>
                    <div>
                        <div class="top"><a class="topA">1件</a></div>
                        <div class="infimg">
                            <a class="topb" href="detail.html?id=${item.id}"><img src="${item.img}"></a>
                        </div>
                        <p class="goodsPrice"><span>￥</span><a href="detail.html?id=randon(item.id)">${item.price}</a></p>
                        <p class="goodsTitle"><span></span><a href="detail.html?id=${item.id}">${item.name}</a></p>
                        <p class="ziying bottom"><i class="fa fa-thumbs-up" aria-hidden="true"></i>1药网自营</p>
                        <div class="chakan bottom sam"><i class="fa fa-search" aria-hidden="true"></i>查看详情</div>
                        <div class="ask bottom sam"><i class="fa fa-phone" aria-hidden="true"></i>咨询药师</div>
                    </div>
                </li>`
    }








//转到购物车
    let goCar = $(".cart");
	goCar.on("click",function(){
		location = "shopCar.html";
	})
})
