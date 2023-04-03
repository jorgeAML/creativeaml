window.onload = function() {
    var canvas = document.getElementById("p4");
    var context = canvas.getContext("2d");
    let myFont = new FontFace("Ephesis", "https://fonts.googleapis.com/css2?family=Ephesis&display=swap");

    myFont.load().then(() => {
        context.font = "15pt Ephesis";
    })
    context.font = "25pt Ephesis";
    context.fillStyle = "black";
    context.textAlign = "left";
    context.textBaseline = "middle";
    context.fillText("largo", 280, 20);
    context.fillText("ancho", 120, 100);

    context.rect(canvas.width/2 - 100, canvas.height / 2 -50, 200,100);
    context.fillStyle = "#495F75";
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = "#EEEEEE";
    context.stroke();
}