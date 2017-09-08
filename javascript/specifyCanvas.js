// Make the paper scope global, by injecting it into window:
paper.install(window);

// define Scopes
var sL, gC;

// initialize global variables
var yAxis = 100;
var xOne = 100;
var xIncrease = 150;
var xTwo = xOne + xIncrease;
var xThree = xOne + 2*xIncrease;
var radiusLarge = 36;
var radiusSmall = 20;

var groupOne, groupTwo, groupThree;
var circleOne, circleTwo, circleThree;
var textOne, textTwo, textThree;
var captionOne, captionTwo, captionThree;
var subCaptOne, subCaptTwo, subCaptThree;

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

// Load the window
window.onload = function() {

    sL = new paper.PaperScope(); // define grid PaperScope
    sL.setup('sidebarLeft'); // setup using canvas id
    sidebarLeft.style.background = 'transparent'; 

    // center line
    var centerPath = new Path();
    centerPath.add(new Point(yAxis,xOne));
    centerPath.add(new Point(yAxis,xThree));
    centerPath.strokeColor = '#0275d8';
    centerPath.strokeWidth = '2';

    // initialize sidebarLeft menu circles
    circleOne = new Shape.Circle(new Point(yAxis, xOne), radiusLarge);
    circleOne.fillColor = '#0275d8';
    circleOne.strokeColor = null;

    textOne = new PointText({
        point: new Point(yAxis-7.5, xOne + 10),
        fillColor: 'white',
        content: '1',
        fontSize: '30px',
    });

    captionOne = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xOne + 8),
        fillColor: '#0275d8',
        content: 'STL Formula',
        fontSize: '20px',
        fontWeight: 'bold',
    });

    subCaptOne = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xOne + 24),
        fillColor: '#7f7f7f',
        content: 'Specify time behavior of your design',
        fontSize: '12px',
    });

    groupOne = new Group([circleOne, textOne, captionOne, subCaptOne]);

    circleTwo = new Shape.Circle(new Point(yAxis, xTwo), radiusSmall);
    circleTwo.fillColor = 'white';
    circleTwo.strokeColor = '#0275d8';
    circleTwo.strokeWidth = '5';

    textTwo = new PointText({
        point: new Point(yAxis-5, xTwo + 5),
        fillColor: '#0275d8',
        content: '2',
        fontSize: '15px',
    });

    captionTwo = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xTwo + 4),
        fillColor: '#7f7f7f',
        content: 'Structural Constraints',
        fontSize: '14px',
        fontWeight: 'bold',
    });

    subCaptTwo = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xTwo + 24),
        fillColor: '#7f7f7f',
        content: 'Specify parts, devices, and their constraints',
        fontSize: '12px',
    });
    subCaptTwo.visible = false;

    groupTwo = new Group([circleTwo, textTwo, captionTwo, subCaptTwo]);

    
    circleThree = new Shape.Circle(new Point(yAxis, xThree), radiusSmall);
    circleThree.fillColor = 'white';
    circleThree.strokeColor = '#0275d8';
    circleThree.strokeWidth = '5';

    textThree = new PointText({
        point: new Point(yAxis-5, xThree + 5),
        fillColor: '#0275d8',
        content: '3',
        fontSize: '15px',
    });

    captionThree = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xThree + 4),
        fillColor: '#7f7f7f',
        content: 'Parts Library',
        fontSize: '14px',
        fontWeight: 'bold',
    });

    subCaptThree = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xThree + 24),
        fillColor: '#7f7f7f',
        content: 'Select parts you want to use',
        fontSize: '12px',
    });
    subCaptThree.visible = false;

    groupThree = new Group([circleThree, textThree, captionThree, subCaptThree]);

    var hitOptionsSL = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 3
    };

    menuNav = new Tool();
    menuNav.onMouseDown = function(event) {
        // hitTest to see where user clicked:
        var hitResult = sL.project.hitTest(event.point, hitOptionsSL);
        if (hitResult) {
            currentItem = hitResult.item;
            if (groupOne.isChild(currentItem)) {
                activateSTLPage();
            } else if (groupTwo.isChild(currentItem)) {
                activateStructPage();
            } else if (groupThree.isChild(currentItem)) {
                activateLibraryPage();
            }; 
        };
    }

    // GRIDTLI

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
    
    grid = new Layer();
    grid.removeChildren();

    gridGroup = drawGrid(nTimeDivs, nSpatialDivs, timeValues, spatialValues, gC.view.bounds);

    cnvs = new Layer({
        children: path,
    });

    // defines hitOptions for Grid - used to check if a click lands on a line or not
    var hitOptionsGrid = {
        segments: true,
        stroke: true,
        fill: false,
        tolerance: 3
    };

    // Define tool to select a whole line segment
    selectLine = new Tool();
    selectLine.onMouseDown = function(event) {
        cnvs.activate(); // Define active layer:
        // limits use to within graph bounds: 
        if ((50 <= event.point.x) && (event.point.x <= gC.view.bounds.width - 10) &&
        (10 <= event.point.y) && (event.point.y <= gC.view.bounds.height - 50)) {
            var children = cnvs.children; // get all paths
            for (i = 0; i < children.length; i++) {
                if (children[i].selected == true) {
                    path.selected = false; // if any paths are selected, deselect them
                }
            }
            var hitResult = gC.project.hitTest(event.point, hitOptionsGrid); // hit test
            if (hitResult) {
                path = hitResult.item;
                if (path.parent == sL.project.activeLayer) {
                    path.selected = true; // if path is child in cnvs, select it
                }
            } 
        }
    }

    selectLine.onMouseDrag = function(event) {
        return; // prevents selectLine from drawing continuous lines 
    }

    // Define tool for deleting lines
    deleteLine = new Tool();
    deleteLine.onMouseDown = function(event) {
        cnvs.activate(); // Define active layer:
        var hitResult = gC.project.hitTest(event.point, hitOptionsGrid); // check if click is on a line
        if (!hitResult)
            return;
        if (hitResult) {
            path = hitResult.item;
            idx = hitResult.item.index;
            if (path.parent == sL.project.activeLayer) {
                allPathsList.splice(idx,1);
                path.fullySelected = true;
                path.remove();
                colorBoxes(nTimeDivs, nSpatialDivs, gC.view.bounds, gridGroup, cnvs.children);
            }
        }
    }

    // Define tool to draw the whole line segment
    drawLine = new Tool();
    drawLine.onMouseDown = function(event) {
        cnvs.activate(); // Define active layer:
        // limits use to within graph bounds
        if ((50 <= event.point.x) && (event.point.x <= gC.view.bounds.width - 10) &&
        (10 <= event.point.y) && (event.point.y <= gC.view.bounds.height - 50)) {
            var children = cnvs.children;
            for (i = 0; i < children.length; i++) {
                if (children[i].selected) {
                    path.selected = false; // if path is selected, deselect it
                }
            }
            path = new Path({ // create a new path 
                segments: [event.point],
                strokeColor: 'black',
                selected: true
            });
        }
    }

    // While the user drags the mouse, points are added to the path
    // at the position of the cursor:
    drawLine.onMouseDrag = function(event) {
        // limits use to within graph bounds
        if ((50 <= event.point.x) && (event.point.x <= gC.view.bounds.width - 10) &&
        (10 <= event.point.y) && (event.point.y <= gC.view.bounds.height - 50)) {
            numSegments = path.segments.length;
            if (event.point.x > path.segments[numSegments-1].point.x) {
                path.add(event.point)
            }
        textItem.content = event.point.x + ", " + event.point.y; // for testing ONLY
        } 
    }

    // When the mouse is released:
    drawLine.onMouseUp = function(event) {
        if (path.length != 0) {
            cnvs.addChild(path);
        // color the boxes where segments appear
        colorBoxes(nTimeDivs, nSpatialDivs, gC.view.bounds, gridGroup, cnvs.children);
        allPathsList.push(getPointsFromPath(path)); // add new points to the allPathsList
        // for testing:
        // textItem.content = allPathsList + "\n" + allPathsList[allPathsList.length-1];
        // var adjustedOutput = changePathValues(allPathsList, timeMax, spatialMin, spatialMax);
        } else {
            path.remove();
        }
    }


    // Define tool to draw points and connect them
    drawPoints = new Tool();
    drawPoints.onMouseDown = function(event) {
        /* the user can draw a line point-to-point if nothing is selected
           or the user can append to an existing line if already selected */

        cnvs.activate(); // Define active layer:
        // limits use to within graph bounds
        if ((50 <= event.point.x) && (event.point.x <= gC.view.bounds.width - 10) &&
        (10 <= event.point.y) && (event.point.y <= gC.view.bounds.height - 50)) {
            var hitResult = gC.project.hitTest(event.point, hitOptionsGrid);
            // allows you to delete a segment when holding down "shift"
            if (event.modifiers.shift) {
                if (hitResult.type == 'segment') {
                    hitResult.segment.remove();
                };
                return;
            }
            if (path.selected) { // if path is selected, find which one for allPathsList:
                pathIndex = getPathIndex(path)
            } else { // if no path is selected, create a new one:
                path = new Path({
                    segments: [event.point],
                    strokeColor: 'black',
                    selected: true // select path to see segment points
                });
                if (allPathsList) {
                    var pathIndex = allPathsList.length; // will be added as additional path
                } 
                else {
                    var pathIndex = 0;
                }
            }
            if (event.point.x > path.segments[path.segments.length - 1].point.x) {
                path.add(event.point)
            } 
            // color the boxes where segments appear
            colorBoxes(nTimeDivs, nSpatialDivs, gC.view.bounds, gridGroup, cnvs.children);
            allPathsList[pathIndex].push(event.point);
            // for testing purposes, display all paths and latest path
            // textItem.content = allPathsList + "\n" + allPathsList[allPathsList.length-1];
            }
    }

    drawPoints.onMouseDrag = function(event) {
        return; // prevents drawPoints from drawing continuous lines
    }

    drawPoints.onMouseUp = function(event) {
        for (i = 1; i < path.segments.length; i++) {
            path.segments[i-1].smooth();
            // i offset allows smoothing per segment without affecting the whole path
        }        
    }

    // Define tool for moving a single point on a line
    movePoints = new Tool();
    movePoints.onMouseDown = function(event) {
        cnvs.activate(); // Define the active layer:
        segment = path = idx = null;;
        var hitResult = gC.project.hitTest(event.point, hitOptionsGrid);
        // allows you to delete a segment when holding down "shift"
        if (event.modifiers.shift) {
            if (hitResult.type == 'segment') {
                hitResult.segment.remove();
            };
            return;
        }
        if (hitResult) {
            if (hitResult.item.parent == sL.project.activeLayer) {
                if (hitResult.item.selected) {
                    path = hitResult.item;
                    path.fullySelected = true;
                    if (hitResult.type == 'segment') {
                        segment = hitResult.segment;
                        idx = hitResult.segment.index;
                    } else if (hitResult.type == 'stroke') {
                        var location = hitResult.location;
                        segment = path.insert(location.index + 1, event.point);
                        segment.smooth(); // smooths only the strokes around the segment
                    }
                }
            }
	    }
    }

    movePoints.onMouseDrag = function(event) {
        // stores original segment coordinates
        origx = segment.point.x;
        origy = segment.point.y;
        idx = segment.index;   
        if (segment) {
            // adding doesn't function properly using window scope, necessary to add manually
            segment.point.x = segment.point.x + event.delta.x;
            segment.point.y = segment.point.y + event.delta.y;
            // textItem.content = path;
            if ((segment.point.x < path.segments[idx+1].point.x - 2) &&
            (segment.point.x > path.segments[idx-1].point.x + 2)) {
                textItem.content = " ";
            } else {
                textItem.content = "Your line is no longer a function." 
                segment.point.x = origx; // limits x coordinate within boundaries

            }
            segment.smooth(); // smooths only the strokes around the segment
        } else if (path) {
            path.position.x = path.position.x + event.delta.x;
            path.position.y = path.position.y + event.delta.y;
        }
    }
    
    movePoints.onMouseUp = function(event) {
        colorBoxes(nTimeDivs, nSpatialDivs, gC.view.bounds, gridGroup, cnvs.children);
        dif1 = path.segments[idx].point.x - path.segments[idx - 1].point.x;
        while (dif1 < path.curves[idx - 1].bounds.width) {
            path.curves[idx - 1].handle2.x = path.curves[idx - 1].handle2.x + 0.5;
            if (path.curves[idx - 1].handle2.x == 1) 
                break;
        }
        dif2 = path.segments[idx + 1].point.x - path.segments[idx].point.x;
        while (dif2 < path.curves[idx].bounds.width) {
            path.curves[idx].handle1.x = path.curves[idx].handle1.x - 0.5;
            if (path.curves[idx - 1].handle2.x == -1) 
                break;
        }
        pathIndex = getPathIndex(path);
        allPathsList[pathIndex] = getPointsFromPath(path); // overwrite existing entry for the path
        // textItem.content = allPathsList[pathIndex];
        path.fullySelected = false;
        path.selected = true;
    }
    drawLine.activate(); // begins with the pencil activated
}