jQuery($=>{
    var goodslist = getCookie('goodslist') || [];
    // judge();
    if(typeof goodslist === 'string'){
        console.log(goodslist)
        goodslist = JSON.parse(goodslist);
    }
    // function judge(){
    //     if(goodslist.length == 0){
    //         $(".tips").show();
    //         $(".cartlist").hide();
    //     }else{
    //         $(".tips").hide();
    //         $(".cartlist").show();
    //     }  
    // }

    //写入数据    
    $.each($(goodslist),function(idx,item){
        var cont = $(`
                <tr data-id="${item.id}">
                    <td><input type="checkbox" class="che" checked/></td>
                    <td><img src="${item.img}" /></td>
                    <td class="goodsname">${item.name}</td>
                    <td>￥<span class="pri">${item.price}</span></td>
                    <td>
                        <div class="clearfix">
                            <input type="number" value='${item.qty}' class="qty" min="1"/>
                            
                        </div>
                     </td>
                    <td><span class='price'> ${item.guige}<span></td>
                    <td>￥ <span class="sum">${item.price*item.qty}</span></td>
                    <td><span class="del">删除</span> | <span>收藏</span></td>
                </tr>
            `).appendTo('tbody');
    });


    //全选
    var $checkbox = $('.cart_table tbody :checkbox');
    var $trs = $('.cart_table tbody tr');
    $('.allchoose').click(function(){console.log($('#all'))
        $checkbox.prop('checked',this.checked);
        $trs[this.checked?'addClass':'removeClass']('selected');
        
    });
    // checkAll();
    $('.cart_table tbody').on('click','td',function(){
        var $currentTr = $(this).closest('tr');
        $currentTr.toggleClass('selected');
        $currentTr.find(':checkbox').prop('checked',$currentTr.hasClass('selected'));
        checkAll();
    })

    function checkAll(){
        var $checked = $checkbox.filter(':checked');
        $('.allchoose').prop('checked',$checked.length === $checkbox.length);
    }


   
    $('tbody').on('click',".qty",function(){
        var qty = $(this).val()*1
        var price = ($(this).parents("td").siblings().find(".pri").text()*1).toFixed(2);
        //console.log(qty,pri)
        if(qty<1){
            var res = confirmDel();
            if(res){
                $.each($(goodslist),(idx,item)=>{
                    if(item.id == $(this).parents('tr').attr("data-id")){
                        goodslist.splice(idx,1);
                        var now=new Date();
                        now.setDate(now.getDate()+7);
                        document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';
                    }
                })
                $(this).parents('tr').remove();
                judge();
                // count();
            }else{
                qty = 1;
            }
        }
        
        //$(this).prev(':input').val(val);
        var sum = $(this).parents("td").siblings().find(".sum");
        sum.text((price*qty*1).toFixed(2));
        // count();
        $.each($(goodslist),(idx,item)=>{
            if(item.id == $(this).parents('tr').attr("data-id")){
                goodslist[idx].qty =qty;
                var now=new Date();
                now.setDate(now.getDate()+7);
                document.cookie='goodslist='+JSON.stringify(goodslist)+';expires='+now.toUTCString()+';path=/';
            }
        })
    })

    //计算总价
    count();
    function count(){
        var total = 0;
        for(var i=0; i<$(".sum").length; i++){
        // console.log($(".sum")[i])
            total += $(".sum")[i].innerText*1;
        }
        $("#totalnum").html(total.toFixed(2))
    }

    var $btnAll = $(".allchoose");
    function checkall(){
        // 获取选中的复选框
        var $checkeds = $checkbox.filter(':checked');
        // 判断勾选数量与checkbox的数量是否相等
        $btnAll.prop('checked',$checkbox.length==$checkeds.length);
    }
    checkall();

    //点击复选框改变价格
    $('tbody').on('click',':checkbox',function(){
        count();
        checkall();
    })
    

    //封装cookie
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
})