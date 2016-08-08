
/*  verificar esl codiog y mejorarlo 
$(document).ready(function(){
//este es el array
var botones=document.querySelectorAll("img");
for (var i = 0; i < botones.length; i++) {
	botones[i].addEventListener("mouseover",aumentar,false);
	

}

});

function aumentar(e){
	var zonaActuacion;
	if (e.target==ja_) {
zonaActuacion="#not_";
	}
	//var tamDefecto=$(zonaActuacion).css("animated rotateIn");
	//alert(tamDefecto);
	//tamDefecto=parseInt(tamDefecto);
$(zonaActuacion).css("animated rotateIn");
}

*/

/*  */
$(document).ready(function(){
   $(".animated_1").mouseover(function(event){
      $("#capa1").addClass("flip");
   });
   $("div").mouseout(function(event){
      $("#capa1").removeClass("flip");
   });
});

/*  */
$(document).ready(function(){
   $(".animated_2").mouseover(function(event){
      $("#capa2").addClass("flip");
   });
   $("div").mouseout(function(event){
      $("#capa2").removeClass("flip");
   });
});
/*  */
$(document).ready(function(){
   $(".animated_3").mouseover(function(event){
      $("#capa3").addClass("flip");
   });
   $("div").mouseout(function(event){
      $("#capa3").removeClass("flip");
   });
});
/*  */
$(document).ready(function(){
   $(".animated_4").mouseover(function(event){
      $("#capa4").addClass("flip");
   });
   $("div").mouseout(function(event){
      $("#capa4").removeClass("flip");
   });
});



