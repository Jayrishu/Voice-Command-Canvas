x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML = "System is ready, Please speak.";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML = "Speech is recognised as " + content;
    if (content == "circle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        draw_circle = "set"
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        draw_rect = "set"
    }
}
function setup(){
    canvas = createCanvas(900,600);
}
function draw(){
    fill(167,210,34)
    if (draw_circle == "set") {
        radius = Math.floor(Math.random()*100)
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        length = Math.floor(Math.random()*200);
        height = Math.floor(Math.random()*80);
        rect(x,y,length,height);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
}
function clear_canvas(){
    background("pink")
}
