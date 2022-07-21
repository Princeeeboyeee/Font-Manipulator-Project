leftwristX=0;
rightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(525,400);
    canvas=createCanvas(725,700);
    canvas.position(700,125);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background(255,189,34);
    textSize(difference);
    fill('#D8DEE7');
    text('Prince', 50, 50);
}

function modelLoaded()
{
    console.log( "PoseNet Model Loaded !!!");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftwristX= results[0].pose.leftWrist.x;
        rightwristX= results[0].pose.rightWrist.x;
        console.log("Left Wrist X is =" + leftwristX);
        console.log("Right Wrist X is = " + rightwristX);
        difference= floor(leftwristX - rightwristX);
        console.log("Wrist Difference is = " + difference);
    } 
} 
 
