function preload() {}
  
  function setup() {
    //put setup code here
    //For eg - setting canvas
    canvas=createCanvas(640,380);
    canvas.position(100,300)
    video=createCapture(VIDEO);
    video.hide();
    tintcolour=""
  }
  
  function draw() {
    //put drawing code here
    //For eg - drawing circle
    image(video,0,0,640,380)
    tint(tintcolour)
  }
  
  function take_snapshot(){
    save("neemay's filter.jpg")
  }

  function filter_tint(){
    tintcolour= document.getElementById("colourname").value
  }