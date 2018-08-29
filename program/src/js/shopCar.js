$(function($){
	let goHome = $(".cart_position h2");
	goHome.on("click",function(){
		location="./index.html";
	});

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
  
	  var cookies = getCookie('username');
	  var username = getCookie('username').replace(/\"/g, "");
	  console.log(username)
	 var table = $(".cart_table tbody");

	$.ajax({
		url:"http://localhost:2566/showCar",
		type:'get',
		data: {
			username:username
		  },
		success:function(data){
			console.log(data)
			 $.each(data,function(idx,item){
				 console.log(item.goodsid)
				//防止异步 无法成功接收数据
				var shopCart = new Promise(function(resolve, reject){
					resolve(
						$.ajax({
							url:"http://localhost:2566/getGoods",
							type:'get',
							data: {
								id:item.goodsid
							},
							success:function(data){
								if(data[0].id == item.goodsid){
									data.qty = item.qty;
									console.log(data.qty)
								}
								console.log(data[0].id);
								var tr = `<tr data-id=${data[0].id} class="goodscar">
									<td><input type="checkbox" class="single" name="choose"></td>
									<td><img src="${data[0].img}"></td>
									<td class="goodsname">${data[0].name}</td>
									<td class="singlePrice">￥${(data[0].price).toFixed(2)}</td>
									<td class="goodqty"><input type="number" value = ${data.qty} ></td>
									<td class="singlePrice">￥${(data.qty*1*data[0].price*1).toFixed(2)}</td>
									<td class="del"><button>删除</button></td>
								</tr>`;
								$(tr).appendTo(table);
								
							}	
						})
					)
				}).then
				(function(res){
					// console.log($(".goodscar").attr("data-id")*1 == item.goodsid)
						if($(".goodscar").attr("data-id")*1 == item.goodsid){
							console.log(666,item.qty);
							$(".goodqty").val(item.qty);
							$(".single").click(function(data){
								var xiaoji = $(".singlePrice").text().slice(2);
								console.log(xiaoji);
							})
						}
					
					
				}).catch(function(error){	
				})
			})
			var total = `
						<p>总计:</p>
						<span>￥551</span>
						<button>结算</botton>
						`;
			$(total).appendTo(".btn");
		}
	});
	$(".allchoose").click(function(){
		$(".goodscar :checkbox").attr("checked", true);
	});
	// var $subBox = $(".goodscar>input[class='single']");console.log($subBox.length)
	// $subBox.click(function(){
	// 	console.log($subBox)
	// 	$(".allchoose").attr("checked",$subBox.length == $("input[class='single']:checked").length ? true : false);
	// });
});

						// if($(".goodscat").attr("data-id")*1 == item.goodsid){
						// 	console.log(666)
						// 	$(".goodqty").val(item.qty)
						// }
// });