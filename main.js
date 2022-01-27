function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    Posenet=ml5.poseNet(video,modelloaded);
    Posenet.on('pose',gotposes);
}
function draw(){
image(video,0,0,300,300);
}
function take_snapshot(){
    save("myFilterImage.png");
}
function modelloaded(){
    console.log('posenet is initialise');
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("mustache x="+ results[0].pose.mustache.x);
        console.log("mustache y="+ results[0].pose.mustache.y);

    }
}

