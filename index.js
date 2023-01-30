function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcv(){
    $("#cv_container").css("display","inherit");
    $("#cv_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#cv_container").removeClass("animated slideInUp");
    },800);
}
function closecv(){
    $("#cv_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#cv_container").removeClass("animated slideOutDown");
        $("#cv_container").css("display","none");
    },800);
}

$(document).keyup(function(e) {
    if (e.key === "Escape") {
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
