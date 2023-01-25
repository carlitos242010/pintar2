canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var ultima_posicion_X,ultima_posicion_Y;
color = "blue";
Grosor=2;

var width = screen.width;
 new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
  document.getElementById("myCanvas").width=new_width;
  document.getElementById("myCanvas").height=new_height;
  document.body.style.overflow="hidden";
}

 canvas.addEventListener("touchstart" , my_touchstart); 
  function my_touchstart(e){
    color = document.getElementById("color").value;
    Grosor=document.getElementById("grosor").value;
   ultima_posicion_x = e.touches[0].clientX -canvas.offsetLeft;
    ultima_posicion_y = e.touches[0].clientY -canvas.offsetTop;
   }
  canvas.addEventListener("touchmove" , my_touchmove);
  
  function my_touchmove(e){
    touch_posicion_actual_x = e.touches[0].clientX -canvas.offsetLeft;
    touch_posicion_actual_y = e.touches[0].clientY -canvas.offsetTop;
   
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth=Grosor;
      ctx.moveTo(ultima_posicion_X,ultima_posicion_Y);
      ctx.lineTo(touch_posicion_actual_x,touch_posicion_actual_y);
      ctx.stroke();
    
    ultima_posicion_X=touch_posicion_actual_x;
    ultima_posicion_Y=touch_posicion_actual_y;
  }

  function limpiar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }