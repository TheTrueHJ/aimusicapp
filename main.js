song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("");
    song2 = loadSound("");
}
function setup(){
    canvas = createCanvas(480,360);
    video = createCapture(VIDEO);
    video.hide();
    canvas.position('center');
    background("white");
    //poseNet = ml5.poseNet(video, ModelLoaded);
    //poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,480,360);
    //song1.play;
    //song2.play;
}