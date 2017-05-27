function nextPage() {
    if (circleOne.radius == radiusLarge) {
        // resize circleOne
        circleOne.radius = radiusSmall;
        textOne.fontSize = '15px';
        textOne.point = new Point(yAxis - 5, xOne + 5);
        captionOne.fillColor = '#9b9b9b';
        captionOne.fontSize = '14px';
        subCaptOne.visible = false;
        // resize and color circleTwo
        circleTwo.radius = radiusLarge;
        circleTwo.fillColor = '#08ca75';
        circleTwo.strokeColor = null;
        textTwo.fontSize = '30px';
        textTwo.fillColor = 'white';
        textTwo.point = new Point(yAxis - 7.5, xTwo + 10);
        captionTwo.fillColor = '#08ca75';
        captionTwo.fontSize = '20px';
        subCaptTwo.visible = true;

        // update page layout:
        $(".stl").hide();
        $(".functional").show();
        // document.getElementById('stl').style.visibilility = hidden;
        // document.getElementById('functional').style.visibilility = visible;
    } else if (circleTwo.radius == radiusLarge) {
        // resize circleTwo
        circleTwo.radius = radiusSmall;
        textTwo.fontSize = '15px';
        textTwo.point = new Point(yAxis - 5, xTwo + 5);
        captionTwo.fillColor = '#9b9b9b';
        captionTwo.fontSize = '14px';
        subCaptTwo.visible = false;
        // resize and color circleThree
        circleThree.radius = radiusLarge;
        circleThree.fillColor = '#08ca75';
        circleThree.strokeColor = null;
        textThree.fontSize = '30px';
        textThree.fillColor = 'white'
        textThree.point = new Point(yAxis - 7.5, xThree + 10);
        captionThree.fillColor = '#08ca75';
        captionThree.fontSize = '20px';
        subCaptThree.visible = true;

        // update page layout:
        $(".functional").hide();
        $(".editor").hide();
        $(".struct").show();
        // document.getElementById('functional').style.visibilility = hidden;
        // document.getElementById('library').style.visibilility = visible;
    };
}

// SETTINGS FUNCTIONS 
function openSettings() {
    $(".settings").css({"width":"500px","padding":"60px 40px"});
    // $(".settings").css("padding","60px 40px");
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSettings() {
    $(".settings").css({"width":"0px","padding":"0px"});

    // document.getElementById("settings").style.width = "0px";
    // $(".settings").css("padding","0px");
    // document.body.style.backgroundColor = "white";
}

function addRegistry() {
    var newReg = $("#addReg").val();
    $("#settings ul").append('<li>',newReg,'</li>');}

+ function($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function(files) {
        console.log(files)
    }

    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

}(jQuery);

