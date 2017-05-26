// Make the paper scope global, by injecting it into window:
paper.install(window);

// Load the window
window.onload = function() {
    // Setup directly from canvas id:
    paper.setup('sidebarLeft');
    sidebarLeft.style.background = 'white'; 

    var yAxis = 100;
    var xOne = 100;
    var xIncrease = 150;
    var xTwo = xOne + xIncrease;
    var xThree = xOne + 2*xIncrease;
    var radiusLarge = 36;
    var radiusSmall = 20;

    // center line
    var centerPath = new Path();
    centerPath.add(new Point(yAxis,xOne));
    centerPath.add(new Point(yAxis,xThree));
    centerPath.strokeColor = '#08ca75';
    centerPath.strokeWidth = '2';

    // initialize sidebarLeft menu circles
    var circleOne = new Shape.Circle(new Point(yAxis, xOne), radiusLarge);
    circleOne.fillColor = '#08ca75';
    circleOne.strokeColor = null;

    var textOne = new PointText({
        point: new Point(yAxis-7.5, xOne + 10),
        fillColor: 'white',
        content: '1',
        fontSize: '30px',
    });

    var captionOne = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xOne + 8),
        fillColor: '#08ca75',
        content: 'STL Formula',
        fontSize: '20px',
        fontWeight: 'bold',
    });

    var subCaptOne = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xOne + 24),
        fillColor: '#9b9b9b',
        content: 'Specify time behavior of your design',
        fontSize: '12px',
    });

    var circleTwo = new Shape.Circle(new Point(yAxis, xTwo), radiusSmall);
    circleTwo.fillColor = 'white';
    circleTwo.strokeColor = '#08ca75';
    circleTwo.strokeWidth = '5';

    var textTwo = new PointText({
        point: new Point(yAxis-5, xTwo + 5),
        fillColor: '#08ca75',
        content: '2',
        fontSize: '15px',
    });

    var captionTwo = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xTwo + 4),
        fillColor: '#9b9b9b',
        content: 'Structural Constraints',
        fontSize: '14px',
        fontWeight: 'bold',
    });

    var subCaptTwo = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xTwo + 24),
        fillColor: '#9b9b9b',
        content: 'Specify parts, devices, and their constraints',
        fontSize: '12px',
    });
    subCaptTwo.visible = false;

    var circleThree = new Shape.Circle(new Point(yAxis, xThree), radiusSmall);
    circleThree.fillColor = 'white';
    circleThree.strokeColor = '#08ca75';
    circleThree.strokeWidth = '5';

    var textThree = new PointText({
        point: new Point(yAxis-5, xThree + 5),
        fillColor: '#08ca75',
        content: '3',
        fontSize: '15px',
    });

    var captionThree = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xThree + 4),
        fillColor: '#9b9b9b',
        content: 'Library of Components',
        fontSize: '14px',
        fontWeight: 'bold',
    });

    var subCaptThree = new PointText({
        point: new Point(yAxis + radiusLarge + 10, xThree + 24),
        fillColor: '#9b9b9b',
        content: 'Select parts you want to use',
        fontSize: '12px',
    });
    subCaptThree.visible = false;

    // defines hitOptions - used to check if a click lands on a line or not
    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 3
    };

    var editor = ace.edit("editor");


}