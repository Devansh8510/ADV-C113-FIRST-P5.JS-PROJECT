function preload(){

}
 function setup() {
     canvas=createCanvas(600,450);
     canvas.position(200,100);
     video=createCapture(VIDEO);
     video.hide();
 }
 function  draw() {
    rect(85, 27, 425, 385);
  image(video,200,122,200,200); 
  circle(100, 70, 90);
  circle(500, 70, 90);
  circle(100, 370, 90);
  circle(500, 370, 90);
 }
 
 function take_Snapshot() {
     save("student_name.png");
 }