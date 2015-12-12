$(document).ready(function(){
    var status="waiting";
    var score= 0;
    $('.planet').mouseenter( function(){
        if (status == "started") {
           $('#score').text("GAME OVER! Your score is " + score);
            status = "lost";
        }
    });
          
    document.clickStart = function(){
        if (status != "started") {
            status = "started";
            score = 0;
            resize();
        
            $('#score').text(score);
            $('.collect').show();
        } else {
             alert("You have already started");
        }
    }       

function resize() {
    $('.planet').animate({width:'-=20px',height:'-=20px'},"slow");
    $('.planet').animate({width:'+=20px',height:'+=20px'},"slow",resize);
}
         
    
    
    
     $('.collect').mouseenter(function(event){
        if (status == "started"){
            score = score + 1;
            $('#score').text(score); 
            $(event.target).hide();
        }
    });
    
    $('#earth').mouseenter(function(){
        $('#score').text("YOU HAVE WON!! Your score is " + score);
    });
    
});
