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

    var canvasB = document.getElementById("myQuadratic");
    var ctb = canvasB.getContext("2d");

    ctb.lineWidth = 10;
    ctb.strokeStyle = "orange";
    ctb.lineCap = "round";
    ctb.moveTo(100, canvas.height - 50);
    ctb.quadraticCurveTo(canvas.width/2, -50, canvas.width - 100, canvas.height -50);
    ctb.moveTo(300,200);
    ctb.quadraticCurveTo(150,10,150,150);
    ctb.moveTo(100,100);
    ctb.quadraticCurveTo(10,90,200,50);
    ctb.stroke();

    var canvasC = document.getElementById("myCanvasCC");
    var cc = canvasC.getContext("2d");

    cc.lineWidth = 10;
    cc.strokeStyle = "red";
    cc.lineCap = "round";
    cc.moveTo(180,130);
    cc.bezierCurveTo(150, 10, 420, 10, 420, 180);
    cc.stroke();

    var canvasD = document.getElementById("Zigzag");
    var ac = canvasD.getContext("2d");

    var startX = 10;
    var startY = 70;
    var zigzagSpacing = 80;
    
    ac.lineWidth = 10;
    ac.strokeStyle = "blue";
    ac.beginPath();
    ac.moveTo(startX, startY);

        for (var n = 0; n < 5; n++) {
            var x = startX + ((n + 1) * zigzagSpacing);
            var y;
            
            if(n % 2 == 0) {
            y = startY + 100;
            }
            else {
            y = startY;
            }
            ac.lineTo(x, y);
            
        }
        ac.stroke();


    //Spiral
    var canvasE = document.getElementById("Spiral");
    var ad = canvasE.getContext("2d");

    var radius = 0;
    var angle = 0;

    //Style spiral
    ad.lineWidth = 10;
    ad.strokeStyle = "#8F3A84";
    ad.beginPath();
    ad.moveTo(canvasE.width / 2, canvasE.height / 2);
    for(var n = 0; n < 150; n++){
        radius += 0.55;
        angle += (Math.PI * 2) / 70;
        var x = canvasE.width / 2 + radius * Math.cos(angle);
        var y = canvasE.height / 2 + radius * Math.sin(angle);
        ad.lineTo(x, y);
    }
    ad.stroke();

    //TEXT Tutorial
    var canvasF = document.getElementById("Text");
    var ae = canvasF.getContext("2d");

    ae.font = "40pt Calibri";
    ae.fillStyle = "black";
    ae.textAlign = "left";
    ae.textBaseline = "middle";
    ae.fillText("Hello Jorge!", canvasF.width / 2, 120);

    //TEXT SHADOW TUTORIAL
    var canvasG = document.getElementById("Tshadow");
    var af = canvasG.getContext("2d");

    af.font = "40pt calibri";
    af.fillStyle = "grey";
    af.textAlign = "center";
    af.textBaseline = "middle";
    draw3dText(af, "Text en 3d! Serote", canvasG.width/2, 120,5);
};
function draw3dText(context, text,x,y, textDepth) {
    var n;
    for(n = 0; n < textDepth; n++) {
        context.fillText(text, x - n, y - n);
    }
    context.fillStyle = '#5E97FF';
    context.shadowColor = 'black';
    context.shadowBlur = 10;
    context.shadowOffsetX = textDepth + 2;
    context.shadowOffsetY = textDepth + 2;
    context.fillText(text, x - n, y - n);
}

    
