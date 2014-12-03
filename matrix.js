var width = matrix_canvas.width = window.innerWidth;
var height = matrix_canvas.height = window.innerHeight;

var yPositions = Array(300).join(0).split('');
var ctx = matrix_canvas.getContext('2d');

var draw = function() {
    ctx.fillStyle='rgba(0, 0, 0, .05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#0F0';
    ctx.font = '15pt Georgia';
    yPositions.map(function(y, index) {
        // latin 1e2
        var text = [];
        text[0] = String.fromCharCode("क".charCodeAt() + parseInt(Math.random() * 33));
        text[1] = String.fromCharCode("아".charCodeAt() + parseInt(Math.random() * 33));
        x = (index * 25) + 25;
        matrix_canvas.getContext('2d').fillText(text[Math.round(Math.random()*1)], x, y);
        if(y > 100 + Math.random() * 1e4) {
            yPositions[index] = 0;
        }
        else {
            yPositions[index] = y + 25;
        }
    });
};

function RunMatrix() {
    if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
    Game_Interval = setInterval(draw, 40);
}

RunMatrix();

function StopMatrix() {
    clearInterval(Game_Interval);
}

//setInterval(draw, 33);
// $("button#pause").click(function(){
//     StopMatrix();});
// $("button#play").click(function(){RunMatrix();});
