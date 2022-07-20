canvas=document.getElementById('myCanvas')
ctx= canvas.getContext('2d')
console.log(ctx)

rover_x=10
rover_y=10

rover_width=100
rover_height=90

mars_img=["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg"]

random_no=Math.floor(Math.random()*4)

background_img= mars_img[random_no]
rover_img= "rover.png"

function add(){
    bg_imgTag= new Image()
    console.log(bg_imgTag)
    bg_imgTag.onload=uploadBg
    bg_imgTag.src= background_img

    rover_imgTag = new Image()
    console.log(rover_imgTag)
    rover_imgTag.onload= uploadRover
    rover_imgTag.src= rover_img
}

function uploadBg(){
    ctx.drawImage(bg_imgTag, 0 , 0 , canvas.width , canvas.height)


}

function uploadRover(){
    ctx.drawImage(rover_imgTag , rover_x , rover_y , rover_width , rover_height)
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e){
    console.log(e)
    keypressed=e.keyCode
    console.log(keypressed)
    if(keypressed=="38"){
        console.log("UP")
        up()
    }
    if(keypressed=="40"){
        console.log("DOWN")
        down()
    }
    if(keypressed=="37"){
        console.log("LEFT")
        left()
    }
    if(keypressed=="39"){
        console.log("RIGHT")
        right()
    }
}
function up(){
    if(rover_y > 0){
        rover_y= rover_y - 10
        console.log(rover_y)
        uploadBg()
        uploadRover()
    }
}

function down(){
    if(rover_y < 500){
        rover_y= rover_y+10
        console.log(rover_y)
        uploadBg()
        uploadRover()
    }
}

function left(){
    if(rover_x > 0){
        rover_x= rover_x - 10
        console.log(rover_x)
        uploadBg()
        uploadRover()
    }
}

function right(){
    if(rover_x < 700){
        rover_x= rover_x + 10
        console.log(rover_x)
        uploadBg()
        uploadRover()
    }
}