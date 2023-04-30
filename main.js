Believer_song = ""
Bones_song = ""

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}


function preload(){
    Believer_song = loadSound("Believer.mp3");
    Bones_song = loadSound("Bones.mp3");
}

function draw(){
    image(video,0,0,600,530);
}