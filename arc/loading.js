var delay = 40
var ctx   = canvas_loading.getContext('2d')

var width  = canvas_loading.width
var height = canvas_loading.height

var centerX = width/2
var centerY = height - 20
var diffs   = []
var angles  = []

var interval = null


function pause() {
    if (interval === null) {
        interval = setInterval(gameLoop, delay)
    } else {
        clearInterval(interval)
        interval = null
    }
}


function keyBinding(event) {
    switch (event.keyCode) {
        case 80: pause(); break // p|P
    }
}


function draw_arc(r, start, end) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, r*10, start, end);
    ctx.stroke();
}


function gameLoop() {
    ctx.clearRect(0, 0, width, height)
    for (var i = 0; i < angles.length; i++) {
        start = Math.PI
        end   = Math.PI - angles[i]
        if (angles[i] <= 0) {
            end = Math.PI - 1/360
            diffs[i] *= -1
        } else if (angles[i] >= Math.PI) {
            end   = 0
            diffs[i] *= -1
        }
        draw_arc(i, start, -end)
        angles[i] += diffs[i]
    }
}


function newGame() {
    ctx.lineWidth = 5
    ctx.lineCap = "round"
    diff = Math.PI/delay
    for (var i = 0; i < 20; i++) {
        angles[i] = (i*29/180)%Math.PI
        diffs[i]  = diff // i/180
    }
    interval = setInterval(gameLoop, delay)
}
