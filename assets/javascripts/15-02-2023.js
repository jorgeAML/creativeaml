console.log("Archivo cargado con exito");
window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.lineWidth = 10;
    context.strokeStyle = "blue";
    context.lineCap = "round";
    
    //Dibujando
    context.moveTo(50, canvas.height - 50);
    context.lineTo(canvas.width - 50, 50);

    context.moveTo(50, 50);
    context.lineTo(50,200);

    context.moveTo(200,50);
    context.lineTo(200,150);
    
    context.moveTo(50,50);
    context.lineTo(200,50);

    //Linea a 45 grados
    context.moveTo(200,50);
    context.lineTo(50, 200);
    context.stroke();

}