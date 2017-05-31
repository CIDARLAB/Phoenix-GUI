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
    };
}

function activatePage(groupId) {
    if (groupID=='groupOne') {
        $(".stl").show();
        $(".editor").show();
        $(".struct").hide();
        $(".functional").hide();
        
        
        circleTwo.radius = radiusLarge;
        circleTwo.fillColor = '#08ca75';
        circleTwo.strokeColor = null;
        textTwo.fontSize = '30px';
        textTwo.fillColor = 'white';
        textTwo.point = new Point(yAxis - 7.5, xTwo + 10);
        captionTwo.fillColor = '#08ca75';
        captionTwo.fontSize = '20px';
        subCaptTwo.visible = true;

        circleTwo.radius = radiusSmall;
        textTwo.fontSize = '15px';
        textTwo.point = new Point(yAxis - 5, xTwo + 5);
        captionTwo.fillColor = '#9b9b9b';
        captionTwo.fontSize = '14px';
        subCaptTwo.visible = false;


    } else if (groupID=='groupTwo') {
        
    } else if (groupID=='groupThree') {

    }
}

// SETTINGS FUNCTIONS 
function openSettings() {
    $(".settings").css({"width":"500px","padding":"60px 40px"});
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSettings() {
    $(".settings").css({"width":"0px","padding":"0px"});
}

function addRegistry() {
    newID = $("#addReg").val();
    if (newID=='foobar') {
        alert("Invalid Registry URL");
    } else if (newID=='') {
        alert("Invalid Registry URL");
    } else {
        $("#settings ul").append('<li id="' + newID + '">' + newID +
            '<span class="pull-right" id="' + newID + '" onClick="$(\'#' + newID + '\').remove();">x</span></li>');
        // $("#settings ul").append('<li id="' + newID + '"><a href="http://' + newID + '">' + newID +
        //     '</a><span class="pull-right" onClick="$(\'#' + newID + '\').remove();">x</span></li>');
        $("#registrySelect").append($('<option>', {
            text: newID
        }));
    }
    $("#addReg").val('');
}

function removeRegistry() {
    console.log()
}

+ function($) {
    'use strict';

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



$(document).on('change','#registrySelect', function() {
    if (!$(this).val().startsWith("https://")) {
        registryURI = "https://" + $(this).val() + "/rootCollections";
    } else {
        registryURI = $(this).val() + "/rootCollections";
    }
    // console.log(registryURI)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": registryURI,
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
        }
    };
    $.ajax(settings).done(function (response) {
        $("#collectionsSelect option").remove(); // remove any existing options
        $.each(response, function(i, value) {
            $("#collectionsSelect").append($('<option>', {
                text: value.name,
                value: value.uri,
            }));
        });
    });
})

$(document).on('change','#collectionsSelect', function() {
    console.log($(this));
    var collectionURI = $("option:selected", this).val();
    // necessary reformatting for the API
    var rep = '/';
    var rep2 = ':';
    var re = new RegExp(rep, 'g');
    var re2 = new RegExp(rep2, 'g');
    collectionURI = collectionURI.replace(re,"%2F")
    collectionURI = collectionURI.replace(re2,"%3A")

    var URI = "https://" + $("option:selected", "#registrySelect").val() + "/remoteSearch/collection%3D<" + 
        collectionURI + ">&?offset=0&limit=1000";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": URI,
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        $(".table tbody tr").remove(); // remove any existing rows
        $.each(response, function(i, value) {
            var newRow = '<tr class="row"><td class="col col-3">' + value.displayId +
                '</td><td class="col col-3">' + value.name +
                '</td><td class="col col-6">' + value.description + '</td></tr>';
            $(".table").append(newRow);
        });
    });
})
