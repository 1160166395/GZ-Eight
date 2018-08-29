$(function($){

	let $nav = $(".tab_top div");
	// console.log($nav);
	$nav.on("click",function(){
		console.log(666);
		
		if($(this).hasClass("normal_log")){
			$(this).children("a").addClass("active");
			$($nav[1].children[0]).removeClass("active");
			$(".normalForm")[0].style.display = "block";
			$(".phoneForm")[0].style.display = "none";


		}else if($(this).hasClass("phone_log")){
			$(this).children("a").addClass("active");
			$($nav[0].children[0]).removeClass("active");
			$(".phoneForm")[0].style.display = "block";
			$(".normalForm")[0].style.display = "none";
			
		}
	});

	let btn1 = $(".sub_btn1");

	btn1.on("click",function(){
		
		let username = $("#username").val();
		let password = $("#password").val();
		$.ajax({
			url:"http://localhost:2566/user",
        	type:'get',
			data:{
				username : username,
				password : password
			},
			success:function(data){
				console.log(data);
				
				if(data[0]!=null){
					location.href = "index.html?username="+data[0].username;
                    document.cookie='username='+JSON.stringify(username)+';path=/';
				}else{
					alert("用户名或密码错误,请注册");
				}

			}
			
		});
		
	});

});