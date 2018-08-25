jQuery($=>{

    let url = location.search;
    // var url = location.href.slice(1);
    let usernum = url.slice(1).split("=")[1];
    // console.log($type.usernum)
    if(usernum){
        let usermsg = $("#Y_header .site-right li .log")[0];
        usermsg.innerHTML = '欢迎<strong style="color:blue;font-size:12px;">' +usernum+ '</strong>'
    }
})