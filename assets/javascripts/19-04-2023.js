window.onload = function(){
    var canvas = document.getElementById("Bio");
    var ctx = canvas.getContext("2d");
    let myFont = new FontFace("Concert+One", "https://fonts.googleapis.com/css2?family=Concert+One&display=swap");

    //TEXTO
   
    ctx.font = "15px Concert+One";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("BIOHAZARD",200,200);
    //CIRCULO
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(200,100,50,0,2 * Math.PI);
    ctx.stroke();
    //ARCO MITAD
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.arc(200,100,70,Math.PI,0);
    ctx.stroke();
    ctx.closePath();
    //BORDE IZQUIERDO
    ctx.beginPath();
    ctx.moveTo(130,100);
    ctx.lineTo(130,250);
    ctx.stroke();
    ctx.closePath();
    //BORDE DERECHO
    ctx.beginPath();
    ctx.moveTo(270,100);
    ctx.lineTo(270,250);
    ctx.stroke();
    ctx.closePath();
    //ESQUINA INFERIOR IZQUIERDA
    ctx.beginPath();
    ctx.arc(150,250,20,-(3/2)*Math.PI,-Math.PI);
    ctx.stroke();
    ctx.closePath();
    //ESQUINA INFERIOR IZQUIERDA
    ctx.beginPath();
    ctx.arc(250,250,20,0,Math.PI/2);
    ctx.stroke();
    ctx.closePath();
    //BORDE INFERIOR
    ctx.beginPath();
    ctx.moveTo(150,270);
    ctx.lineTo(250,270);
    ctx.stroke();
    ctx.closePath();
    
    

}