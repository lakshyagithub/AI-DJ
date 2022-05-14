song="";
function preload() {
    song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(510, 510);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
  image(video, 0, 0, 510, 510);
}
function play1() {
  song.play();
}
