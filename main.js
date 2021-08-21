function setup() {
    canvas = createCanvas(400,300);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw() {
    image(video,0,0,400,300);
     tint(tint_color);
}



function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot() {
    save('student.png');
}
