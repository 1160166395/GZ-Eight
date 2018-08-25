jQuery($=>{
    var id = location.search.slice(1).split("=")[1];
    console.log(id)


    $.ajax({
        type: "get",
        url: "http://localhost:1804/project/src/api/dataList.php",
        data: {id:id},
        success: function(data){
            let wdata = JSON.parse(data);
            console.log(wdata);
            $('.big img').attr('src', `${wdata[0].img}`);
            $(".zhu-name").text(`${wdata[0].name}`);
            $(".small li img").attr('src',`${wdata[0].img}`);
            $(".shuoming").text(`${wdata[0].explain}`);
            $(".num strong").text(`${wdata[0].price}`);
            $(".jiaqian").text(`￥${wdata[0].price}`);
            $(".rongliang").text(`${wdata[0].qty}`);
            $(".place span").text(`${wdata[0].place}`);
        }
    })

    //放大镜
    $(".big").hiZoom({
        width: 500,
        position: 'right',
        // distance: 10
     
    });




})