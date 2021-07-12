song1 = "";
song2 = "";

leftWrisY = "";
leftWristX = "";

rightWristY = "";
rightWristX = "";

function preload(){
    song1 = loadSound("1.mp3");
    song2 = loadSound("OnMyWay.mp3");
}

function setup() {
     canvas =  createCanvas(600, 500);
     canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function play(){
    
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("left wrist X = " + leftX + " left wrist Y = " + leftY);

        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("right wrist X = " + rightX + " right wrist Y = " + rightY);

    }
}

