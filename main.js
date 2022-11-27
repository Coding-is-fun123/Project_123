
leftWrist=0;
rightWrist=0;
difference=0;

function setup(){
    video= createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,500);
    canvas.position(600,180);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log( "PoseNet Is Loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist= results[0].pose.leftWrist.x;
        rightWrist= results[0].pose.rightWrist.x;
        difference= Math.floor(leftWrist-rightWrist);
        document.getElementById("output").innerHTML="Width and Height of the square is "+difference+"px!!!!!!!!!!!!!!!"
    }
}
function draw(){
   
   
    background("#e4f2fa");
    textSize(difference);
    fill("black");
    text("Charvi", 50,400);
}