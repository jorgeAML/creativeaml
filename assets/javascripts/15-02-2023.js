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
    context.lineTo(200,160);
    
    context.moveTo(50,50);
    context.lineTo(200,50);

    //Linea a 45 grados
    context.moveTo(200,50);
    context.lineTo(50, 200);

    //Segundo cuadrado
    context.moveTo(200,200);
    context.lineTo(200,160);
    //base
    context.moveTo(200,200);
    context.lineTo(350,200);
    //linea derecha
    context.moveTo(350,200);
    context.lineTo(350,130);

    //punto
    context.moveTo(350,100);
    context.lineTo(350,100);

    context.moveTo(490,70);
    context.lineTo(490,70);
    //Diagonal
    context.moveTo(370,100);
    context.lineTo(470,75);

    context.stroke();

}