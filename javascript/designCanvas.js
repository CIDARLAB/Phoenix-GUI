// Make the paper scope global, by injecting it into window:
paper.install(window);

// define Global Variables
var highlightRectangle;

// Load the window
window.onload = function() {
    // Setup directly from canvas id:
    paper.setup('sbolCanvas');
    sbolCanvas.style.background = 'lightgreen'; 

    highlightRectangle = new Path.Rectangle({
        point: [0, 0],
        size: [92, 160],
        fillColor: 'yellow',
    })

    // textItem = new PointText({
    //     point: new Point(100, 100),
    //     fillColor: 'black',
    //     content: 'Coords: ',
    // });

    // selectLine = new Tool();
    // selectLine.onMouseDown = function(event) {
    //     textItem.content = 'Coords: ' + event.point + "\n" + view.bounds;
    //     // limits use to within graph bounds: 
    // }

}
