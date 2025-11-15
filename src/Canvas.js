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

// Use CSS dimensions instead of window dimensions for better mobile Safari support
function setCanvasSize() {
    const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const vw = window.visualViewport ? window.visualViewport.width : window.innerWidth;

    canvas.width = vw;
    canvas.height = vh;
}

setCanvasSize();

var width_center = canvas.width/2;
var height_center = canvas.height/2;

var context = canvas.getContext('2d');

// Store shape data for hover detection
var shapes = [];
var hoveredShape = null;

function drawSquare(pos_x, pos_y, size, color, isHovered){
    context.beginPath();
    context.rect(pos_x, pos_y, size, size);
    context.strokeStyle = color;
    context.lineWidth = isHovered ? 6 : 1.5;
    if (isHovered) {
        context.shadowColor = color;
        context.shadowBlur = 10;
    } else {
        context.shadowBlur = 0;
    }
    context.stroke();
}

function drawTriangle(pos_x, pos_y, size, color, isHovered){
    context.beginPath();
    var height = size * Math.sqrt(3) / 2;
    context.moveTo(pos_x + size / 2, pos_y);
    context.lineTo(pos_x, pos_y + height);
    context.lineTo(pos_x + size, pos_y + height);
    context.closePath();
    context.strokeStyle = color;
    context.lineWidth = isHovered ? 6 : 1.5;
    if (isHovered) {
        context.shadowColor = color;
        context.shadowBlur = 10;
    } else {
        context.shadowBlur = 0;
    }
    context.stroke();
}

function drawCircle(pos_x, pos_y, size, color, isHovered){
    context.beginPath();
    var radius = size / 2;
    context.arc(pos_x + radius, pos_y + radius, radius, 0, 2 * Math.PI);
    context.strokeStyle = color;
    context.lineWidth = isHovered ? 6 : 1.5;
    if (isHovered) {
        context.shadowColor = color;
        context.shadowBlur = 10;
    } else {
        context.shadowBlur = 0;
    }
    context.stroke();
}

function DrawMixedShapes(size){
    context.clearRect(0, 0, canvas.width, canvas.height);
    shapes = []; // Reset shapes array

    var c = getColors();
    var colors = [c.primary_color, c.secondary_color, '#ff6b6b', '#4ecdc4', '#45b7d1'];
    var shapeTypes = ['square', 'triangle', 'circle'];

    var columns = 5;

    // Extra padding to account for 45-degree rotation (diagonal extends ~1.4x)
    var padding = Math.max(32, size * 0.4);
    var availableWidth = canvas.width - (2 * padding);

    // Calculate spacing to fill the available width
    var totalShapeWidth = columns * size;
    var totalSpacingWidth = availableWidth - totalShapeWidth;
    var spacing = totalSpacingWidth / (columns - 1);

    var startX = padding;
    var shapeSpacing = size + spacing;
    var rows = Math.ceil(canvas.height / (size + size/2)) + 2;
    var startY = size/2;

    for (var row = 0; row < rows; row++){
        var y = startY + row * shapeSpacing;

        // 45-degree rotation alternation per line
        var rotation = (row % 2) * 45;

        // Alternate color sequence per line
        var colorOffset = row % colors.length;

        for (var col = 0; col < columns; col++){
            var x = startX + col * (size + spacing);

            // Skip if outside canvas bounds
            if (y > canvas.height + size) break;

            var shapeIndex = (row * columns + col) % shapeTypes.length;
            var colorIndex = (col + colorOffset) % colors.length;
            var shapeType = shapeTypes[shapeIndex];
            var color = colors[colorIndex];

            // Store shape data for hover detection
            var shapeData = {
                type: shapeType,
                x: x,
                y: y,
                size: size,
                color: color,
                rotation: rotation,
                centerX: x + size/2,
                centerY: y + size/2
            };
            shapes.push(shapeData);

            // Check if this shape is being hovered
            var isHovered = hoveredShape === shapes.length - 1;

            // Save context for rotation
            context.save();
            context.translate(x + size/2, y + size/2);
            context.rotate(rotation * Math.PI / 180);
            context.translate(-size/2, -size/2);

            switch(shapeType) {
                case 'square':
                    drawSquare(0, 0, size, color, isHovered);
                    break;
                case 'triangle':
                    drawTriangle(0, 0, size, color, isHovered);
                    break;
                case 'circle':
                    drawCircle(0, 0, size, color, isHovered);
                    break;
            }

            context.restore();
        }
    }
}

/* Drawing Section & Math */
const p_width = 0.10; // Optimal size for 5 columns with spacing
var shape_size = canvas.width * p_width;

function preload(size) {
    DrawMixedShapes(size);
}

function refresh() {
    setCanvasSize();
    width_center = canvas.width/2;
    height_center = canvas.height/2;
    shape_size = canvas.width * p_width;
    preload(shape_size);
}

// Mouse hover detection
function isPointInShape(mouseX, mouseY, shape) {
    var dx = mouseX - shape.centerX;
    var dy = mouseY - shape.centerY;
    var distance = Math.sqrt(dx * dx + dy * dy);

    // Simple circular hit detection (works well for all shapes)
    return distance <= shape.size / 2 + 10; // Extra padding for easier hovering
}

function handleMouseMove(event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    var newHoveredShape = null;

    // Check each shape for hover
    for (var i = 0; i < shapes.length; i++) {
        if (isPointInShape(mouseX, mouseY, shapes[i])) {
            newHoveredShape = i;
            break;
        }
    }

    // Only redraw if hover state changed
    if (newHoveredShape !== hoveredShape) {
        hoveredShape = newHoveredShape;
        canvas.style.cursor = hoveredShape !== null ? 'pointer' : 'default';
        preload(shape_size); // Redraw with new hover state
    }
}

canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseleave', function() {
    if (hoveredShape !== null) {
        hoveredShape = null;
        canvas.style.cursor = 'default';
        preload(shape_size);
    }
});

window.addEventListener('resize', refresh);
preload(shape_size);