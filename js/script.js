$('.perso1').mouseover(function(){
  $('.perso1').css({"background-image" : "url(image/mario1.gif)"})
})
.mouseout(function(){
    $('.perso1').css({"background-image" : "url(image/perso1.jpg)"})
});

$('.perso2').mouseover(function(){
  $('.perso2').css({"background-image" : "url(image/luigi2.gif)"})
})
.mouseout(function(){
  $('.perso2').css({"background-image" : "url(image/perso2.jpg)"})
});


$('.choix1').click(function(){
    sessionStorage.setItem("perso","mario")
});
$('.choix2').click(function(){
  sessionStorage.setItem("perso","luigi")
});
var joueurPerso = sessionStorage.getItem('perso');

if (joueurPerso === "mario") {
  $('.persoJoueur').css({'background-image' : 'url(image/mariorunning.gif)'})
}
else {
    $('.persoJoueur').css({'background-image' : 'url(image/luigirun2.gif)', 'height' : '80px', 'width' : '60px'})
}

$(document).keyup(function(e){
if (e.keyCode == 39) {
  
}
else if(e.keyCode == 37){

}
else if(e.keyCode == 38){

}
else if(e.keyCode == 40){

}

});
