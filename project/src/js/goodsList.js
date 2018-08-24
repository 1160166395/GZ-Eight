jQuery($=>{

    var product = decodeURI(location.search.slice(1).split("=")[1]);
    // var  = type.slice(.1,-1);
    // decodeURI
    console.log(product);

    $.ajax({
        url: "http://localhost:1804/project/src/api/goodsList.php",
        type: "get",
        data: "text=1",
        success: function(data){
            let randerdata = JSON.parse(data);
            console.log(randerdata);
            let res = randerdata.filter(function(item,idx){
                var style = item.style.split('e')[0];
                var term = item.term.split('m')[0];
                console.log(item)
                // if(term == product){
                //     $(".product ul").append(goods(item,idx));
                //     console.log(item)
                // }
                return term === product || style === product
            });
            console.log(res);
            $(".m-top").append(goods(res[0]));
            randerdata.map(function(item,idx){
                var style = item.style.split('e')[0];
                var term = item.term.split('m')[0];
                if(term == product || style == product){
                    // console.log(5555)
                    $(".product ul").append(pro(item,idx));
                    console.log(item)
                }
            });
            randerdata.map(function(item,idx){
                var style = item.style.split('e')[0];
                var term = item.term.split('m')[0];
                if(term == product || style == product){
                    // console.log(5555)
                    $("#Y_main .select ul").append(prospan(item,idx));
                    console.log(item)
                }
            });
        } 
    })
    function pro(item,idx){
        console.log(item)
        return`
                <li class="first">
                    <a href="./dataIlist.html" alt="暂时无货">
                        <img src="${item.img}">
                        <div class="bottom">
                            <div class="name"><a href=".\dataIlist.html">${item.name}</a></div>
                            <div class="price"><em>￥</em>${item.price}</div>
                        </div>
                        <div class="buy">
                            <span>${item.explain}</span>
                            <div class="incar">加入购物车</div>
                        </div>
                    </a>
                
                </li>
                
             `
    }
    function goods(item){
        // console.log(idx)
        return `
                <h1 class="first"><a href=".\goodsList.html"><img src="${item.img1}"></a></h1>
                <ul>
                    <li><a href=".\goodsList.html"><img src="${item.img2}"></a></li>
                    <li><a href=".\goodsList.html"><img src="${item.img3}"></a></li>
                    <li><a href=".\goodsList.html"><img src="${item.img4}"></a></li>
                    <li class="last"><a href=".\goodsList.html"><img src="${item.img5}"></a></li>
                </ul>
              `
    }
    function prospan(item){
        return `
                <li>
                    <a>
                        <span>${item.term}</span>
                    </a>
                </li>
                `
    }
})