jQuery($=>{
    let $move = $("#Y_main .floor1 .f-bottom .f1-right a");
    let $li = $("#Y_main .floor1 .f-bottom .f1-right li");console.log($li)
    let left = $move.width();console.log(left)
    $move.mouseenter(function(){
        // var endx = 5;
        // $move.css("width",endx + left + "px");
        // var c;
        var timer = setTimeout(function(){
            $move.width(function(n,c){
                return c-2;
                $li.addClass("hov");
            });
        })
        
    })
    $move.mouseout(function(){
        // var endx = 5;
        // $move.css("width",endx + left + "px");
        // var c;
        $move.width(function(n,c){
            return c;
        });
    })
})