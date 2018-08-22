jQuery($=>{
    let $move = $("#Y_main .floor1 .f-bottom .f1-right li a");
    
    let left = $move.css("width");console.log(left)
    $move.mouseenter(function(e){
        var endx = 5;
        $move.css("width",endx + "px");
    })
    $move.mouseout(function(e){
        // var endx = 5;
        $move.css("width");
    })
})