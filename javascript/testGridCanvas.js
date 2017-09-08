// Make the paper scope global, by injecting it into window:
paper.install(window);
// globalize scope variables
var gC, sC;

// Initialize List of tools
var selectLine, drawLine, drawPoints, deleteLine, movePoints;
var yLabel;

// Initialize Graph values
var timeValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var spatialValues = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
spatialValues.reverse() // graph writes top to bottom therefore reversed
var nSpatialDivs = 12;
var nTimeDivs = 16;
var spatialMin = -6;
var spatialMax = 6;
var spatialThresh = 1;
var timeMax = 16;
var timeThresh = 1; 
var clusterThresh = 1;

// Initialize Save/Output Variables
var allPathsList = [];
var adjustedOutput;

// For Easy Testing
var textItem;

// possible format for the JSON version of the STL formula:
var jsonSTL = 
'[' + 
    '{' + 
        '"G": "[0.0, 6.0]",' +
        '"x": "<= 2.0"' +
    '},' +
    '{' +
        '"G": "[0.0, 1.0]",' +
        '"x": ">= 0.0"' +
    '},' +
    '{' +
        '"G": "[1.0, 5.0]",' +
        '"x": ">= 1.0"' +
    '},' +
    '{' +
        '"G": "[5.0, 6.0]",' +
        '"x": ">= 0.0"' +
    '}' +
']';

// Load the window
window.onload = function() {
    gC = new paper.PaperScope(); // define grid PaperScope
    gC.setup('gridCanvas'); // setup using canvas id
    gridCanvas.style.background = 'white'; 
    yLabel = new Raster('ylabel');
    yLabel.position = new Point(10, 75);

    // initialize variables
    var segment;
    var path = new Path();
    textItem = new PointText({
        point: new Point(60, 30),
        fillColor: 'black',
    });
    
    grid = new gC.Layer();
    grid.removeChildren();

    gridGroup = drawGrid(nTimeDivs, nSpatialDivs, timeValues, spatialValues, paper.view.bounds);

    cnvs = new gC.Layer({
        children: path,
    });

    colorBoxes(nTimeDivs, nSpatialDivs, paper.view.bounds, gridGroup, jsonSTL) // must be implemented after cnvs is defined 

    sC = new paper.PaperScope(); // define sbol PaperScope
    sC.setup('sbolCanvas'); // setup using canvas id
    sbolCanvas.style.background = 'transparent'; 

    svgLayer = new sC.Layer();

}

// part of the infrastructure to implement keyboard shortcuts for tool selection?
        // if (event.modifiers.s) {
        //    selectLine.activate();
        //    document.getElementById("select").checked = true;
        //    document.getElementById("pencil").checked = false;
        //    document.getElementById("segment").checked = false;
        //    document.getElementById("eraser").checked = false;
        //    document.getElementById("move").checked = false;
        // }