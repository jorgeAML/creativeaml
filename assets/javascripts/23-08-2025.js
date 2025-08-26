window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var color = '#cfad7a';
    var lineWidth_AML = 10;
    var round = "round";
    //linea central
    context.beginPath();   
    context.lineWidth = 15;
    context.strokeStyle = color;
    context.lineCap = round;
    context.moveTo(300,250);
    context.lineTo(300,650);
    context.stroke();
    context.closePath();

    //LINEA FINAL
    context.beginPath();
    context.lineWidth = 15;
    context.strokeStyle = color;
    context.lineCap = round;
    context.moveTo(250, 600);
    context.lineTo(350,600);
    context.stroke();

    //ARCO SUPERIOR
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    //punto de inicio
    context.moveTo(210,210);
    // control x,y = centro del arco
    // darle efecto de hoja bajar los puntos de tangentes endpoint x,y
    context.quadraticCurveTo(300,-60,400,210);
    context.stroke();

    //LINEA IZQUIERDA
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(210,210);
    context.lineTo(210,500);
    context.stroke();

    //ARCO INFERIOR
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(210,500);
    context.quadraticCurveTo(300,600,400,500);
    context.stroke();

    //LINEA DERECHA
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(400,500);
    context.lineTo(400,300);
    context.stroke();

    //corte de hoja
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(400,210);
    context.bezierCurveTo(380,280,300,320,400,300);
    context.stroke();

    //linea 45 grados parte 1 izquierda
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(210,300);
    context.lineTo(300,350);
    context.stroke();

    //linea 45 grados parte dos izquierda
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(210,350);
    context.lineTo(300,400);
    context.stroke();

    //linea 45 grados parte 1 derecha
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(400,350);
    context.lineTo(300,400);
    context.stroke();
    
    //linea 45 grados parte 2 derecha
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.moveTo(400,400);
    context.lineTo(300,450);
    context.lineTo(210,400);
    context.stroke();

    //agujeros
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.arc(250,210,10,0,2*Math.PI,false);
    context.stroke();
    
    context.beginPath();
    context.lineWidth = lineWidth_AML;
    context.strokeStyle = color;
    context.arc(240,470,10,0,2*Math.PI,false);
    context.stroke();
    
}