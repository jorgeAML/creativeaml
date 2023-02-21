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
    context.moveTo(350,105);
    context.lineTo(350,105);

    context.moveTo(490,70);
    context.lineTo(490,70);
    //Diagonal 2
    context.moveTo(370,100);
    context.lineTo(470,75);

    context.moveTo(490,50);
    context.lineTo(650,50);

    //Serie de puntos
    function serieA(x,y, inicio,aumento) {
        this.x = x;
        this.y = y;
        while (y < inicio) {
            y += aumento;
            context.moveTo(x,y);
            context.lineTo(x,y);
        }
    }
    serieA(370,120,200,20);
    serieA(390,120,200,20);
    serieA(410,120,200,20);
    serieA(430,100,200,20);
    serieA(450,100,200,20);
    serieA(470,100,200,20);
    serieA(490,100,200,20);
    serieA(510,80,200,20);
    serieA(530,80,200,20);
    serieA(550,80,200,20);
    serieA(570,80,200,20);
    serieA(590,60,200,20);
    serieA(590,60,200,20);
    serieA(610,60,200,20);
    serieA(630,60,200,20);
    serieA(650,60,200,20);
    /*

    let x = 370;
    let y = 120;
    
    while (y < 200) {
        y += 20;
        context.moveTo(370,y);
        context.lineTo(x,y);
    }
    */

    context.stroke();

    var canvasJ = document.getElementById("myArc");
    var ctx = canvasJ.getContext("2d");

    ctx.lineWidth = 10;
    ctx.strokeStyle = "black";
    ctx.lineCap = "square";
    ctx.arc(canvas.width / 2, canvas.height / 2 + 40, 80, 1.1 * Math.PI, 1.9 * Math.PI, false);
    ctx.moveTo(50,100); //punto de encuentro
    ctx.arc(100,100,50,Math.PI,0*Math.PI,false);
    ctx.moveTo(50,110);
    ctx.arc(100,110,50,Math.PI, 2*Math.PI, true);
    ctx.moveTo(70,100);
    ctx.arc(100,100,30,(Math.PI),0, false);
    ctx.moveTo(70,110);
    ctx.arc(100,110,30,Math.PI,0, true);
    ctx.moveTo(90,100);
    ctx.arc(100,100,10,Math.PI,0, false);
    ctx.moveTo(90,110);
    ctx.arc(100,110,10,Math.PI,0,true);
    ctx.stroke();
};

    
