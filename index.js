let timeout;

function showabout(){
    moveCamera('about');
    $('#middle').css('margin-top','30vh')
}
function closeabout(){
    // moveCamera('close');
}
function showwork(){
    moveCamera('work');
    $('#middle').css('margin-top','30vh')
}
function closework(){
    // moveCamera('close');
}
function showcv(){
    moveCamera('cv');
    $('#middle').css('margin-top','unset')
}
function closecv(){
    // moveCamera('close');
}

$(document).keyup(function(e) {
    if (e.key === "Escape") {
        closebg();
        closecv();
        closeabout();
        closework();
   }
});

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#cv").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
