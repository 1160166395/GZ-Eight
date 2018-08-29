$(function($){
    let btn1 = $(".btn_reg");

	btn1.on("click",function(){
		
		let username = $(".reg_phone").val();
		let password = $(".reg_pwd").val();
		let password2 = $(".reg_pwd2").val();
		$.ajax({
			url:"http://localhost:2566/regists",
        	type:'get',
			data:{
				username : username,
				password : password
			},
			success:function(data){
				console.log(data);
				if(data == "success"){
					console.log(1)
					location.href = "index.html?username="+data[0].username;
				}else{
					alert("用户名已存在");
					console.log(2)
				}

			}
			
		});
		
	});
})