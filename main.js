canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
var mars_surfaceimgs=[
   "mars_1.jpg", 
   "mars_2.jpg", 
   "mars_3.jpg", 
   "mars_4.jpg"
];
var random_number=Math.floor(Math.random()*4);
console.log(random_number);

backgroung_img=mars_surfaceimgs[random_number];
console.log("background image= "+backgroung_img);
rover_img="rover.jpg";

rover_x=10;
rover_y=10;

function add(){
    backgroung_imgTag = new Image();
    backgroung_imgTag.onload = uploadBackground;
    backgroung_imgTag.src = backgroung_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(backgroung_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y-= 10;
        console.log("when up arrow is pressed ="+rover_x + "-"+rover_y);
        uploadBackground();
        uploadrover();

    }
}
function down(){
    if(rover_y<=500){
        rover_y+= 10;
        console.log("when down arrow is pressed ="+rover_x + "-"+rover_y);
        uploadBackground();
        uploadrover();
        
    }
}
function left(){
    if(rover_x>=0){
        rover_x-= 10;
        console.log("when left arrow is pressed ="+rover_x + "-"+rover_y);
        uploadBackground();
        uploadrover();
        
    }
}
function right(){
    if(rover_x<=700){
        rover_x+= 10;
        console.log("when right arrow is pressed ="+rover_x + "-"+rover_y);
        uploadBackground();
        uploadrover();
        
    }
}