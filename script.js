$(document).ready(function(){
    var status="waiting";
    var score= 0;
    var ping = new Audio();
    ping.src = "music.mp3";
    var fail = new Audio();
    fail.src = "fail.mp3";
    var tada = new Audio();
    tada.src = "tada.mp3";


    $('.planet').mouseenter( function(){
        if (status == "started") {
            fail.play();
//           $('#score').text("GAME OVER! Score: " + score);
            status = "lost";
            $('#button').show();
            $.featherlight("lose.html");
    
        }
    });
          

    document.clickStart = function(){
        if (status != "started") {
            status = "started";
            score = 0;
            resize();

            ping.play();
        
            $('#score').text("Score: " + score);
            $('.collect').show();
            $('#button').hide();
        } else {
             alert("You have already started");
        }
    };       

function resize() {
    if (status == "started") {
        $('.planet').animate({width:'-=20px',height:'-=20px'},"slow");
        $('.planet').animate({width:'+=20px',height:'+=20px'},"slow",resize);
    }
}
         
    
    
    
     $('.collect').mouseenter(function(event){
        if (status == "started"){
            score = score + 1;
            $('#score').text("Score: " + score); 
            $(event.target).hide();
        }
    });
    
    $('#earth').mouseenter(function(){
        if (status == "started") {
        tada.play();
//        $('#score').text("YOU HAVE WON!! Your score is " + score);
        status = "won";
        $.featherlight("win.html");
        }
        $('#button').show();
    });
    
    
    
});
