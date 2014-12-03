var width = matrix_canvas.width = window.innerWidth;
var height = matrix_canvas.height = window.innerHeight;

var yPositions = Array(300).join(0).split('');
var ctx = matrix_canvas.getContext('2d');

var draw = function() {
    ctx.fillStyle = 'rgba(0, 0, 0, .08)'; //alpha: erase old matrix
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#0F0';
    ctx.font = '15pt Georgia';
    yPositions.map(function(y, index) {
        var char_pool = [];
        char_pool[0] = String.fromCharCode("क".charCodeAt() + Math.random() * 33);
        char_pool[1] = String.fromCharCode("아".charCodeAt() + Math.random() * 24);
        char_pool[2] = String.fromCharCode("あ".charCodeAt() + Math.random() * 46);
        char_pool[3] = String.fromCharCode("a".charCodeAt() + Math.random() * 26);

        var rand_i = Math.round(Math.random() * (char_pool.length - 1));
        x = (index * 27) + 5; // 5: offset x-axis
        matrix_canvas.getContext('2d').fillText(char_pool[rand_i], x, y);
        if(y > 100 + Math.random() * 1e4) {
            yPositions[index] = 0;
        }
        else {
            yPositions[index] = y + 27;
        }
    });
};

window.addEventListener('resize', function() {
    width  = window.innerWidth;
    height = window.innerHeight;
    ctx.canvas.width  = width;
    ctx.canvas.height = height;
}, false);

function RunMatrix() {
    if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
    Game_Interval = setInterval(draw, 60); //time tweaker
}

RunMatrix();

function StopMatrix() {
    clearInterval(Game_Interval);
}

//setInterval(draw, 33);
// $("button#pause").click(function(){
//     StopMatrix();});
// $("button#play").click(function(){RunMatrix();});
