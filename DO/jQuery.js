$(document).ready(function(){

    //divs
    $("#off").hide();
    $(".c1").hide();    
    $("#on").click(function(){
        $("#off").fadeIn();
        $(this).hide();
        $(".c1").fadeIn();
    });
    
    $("#off").click(function(){
        $("#on").fadeIn();
        $(this).hide();
        $(".c1").fadeOut();
    });
         
});