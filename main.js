function setup(){
    video=createCapture(VIDEO);
    video.size(425,400);
    canvas=createCanvas(425,400);
    canvas.position(800,250);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background(255,189,34);
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
    } 
} 
 
