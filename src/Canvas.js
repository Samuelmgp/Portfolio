/* CSS Styles */
const primary_color = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');   
const secondary_color = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary');
const background_color = getComputedStyle(document.documentElement).getPropertyValue('--color-background');

function getColors(){
    return {
        primary_color: getComputedStyle(document.documentElement).getPropertyValue('--color-primary') || '#3399ff', 
        secondary_color: getComputedStyle(document.documentElement).getPropertyValue('--color-secondary') || '#eeff33',
        background_color: getComputedStyle(document.documentElement).getPropertyValue('--color-background') || '#131313',   
    }
}

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width_center = canvas.width/2;
var height_center = canvas.height/2;

var context = canvas.getContext('2d');

function drawSquare(pos_x, pos_y, length, i){
    var c = getColors();
    context.beginPath();
    context.rect(pos_x, pos_y, length, length)
    context.strokeStyle = (i % 2 === 0 ? c.primary_color : c.secondary_color);
    context.fillStyle = c.background_color;
    context.fillRect(pos_x, pos_y, length, length)
    context.stroke();
}

function DrawSquares(pos_x, pos_y, length, count, spacing, wrap){
    context.clearRect(0, 0, context.width, context.height)
    /* Draw the Square */
    for (var i = 0; i < count; i++){
        if (wrap){
            if (pos_x + length >= canvas.width){
                pos_x = spacing;
                pos_y = pos_y + (length + spacing);
            }
        }

        drawSquare(pos_x, pos_y, length, i)

        pos_x = pos_x + (length + spacing)
    }
}

/* Drawing Section & Math */
const p_width = 0.12;
var square_size = canvas.width * p_width;

function fillScreenMath(size, spacing){
    if (size !== 0){
    var fit_width = canvas.width / (size + 2 * spacing);
    var fit_height = (canvas.height) / (size);
    return (fit_height * fit_width) ;
    }   
    return 0;
}

function preload(size, spacing) {
    var count = fillScreenMath(size,spacing);
    console.log(count)
    DrawSquares(spacing, spacing + 10, size, count, spacing, true)
}

function refresh() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    width_center = canvas.width/2;
    height_center = canvas.height/2;
    square_size = canvas.width * p_width;
    preload(square_size, square_size/2);
}

window.addEventListener('resize', refresh)
preload(square_size, square_size/2)