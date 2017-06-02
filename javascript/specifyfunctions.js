   // defines hitOptions - used to check if a click lands on a line or not
    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 3
    };

    var activeCircle = {
        fillColor: '#08ca75',
        strokeColor: null,
    };

    var inactiveCircle = {
        fillColor: 'white',
        strokeColor: '#08ca75',
        strokeWidth: '5',
    };
    
    var inactiveCircleComplete = {
        fillColor: '#08ca75',
        strokeColor: null,
    }

    var activeText = {
        fontSize: '30px',
        fillColor: 'white',
    };

    var inactiveText = {
        fontSize: '15px',
        fillColor: '#08ca75',
    };

    var inactiveTextComplete = {
        fontSize: '15px',
        fillColor: 'white',
    }
    
    var activeCaption = {
        fillColor: '#08ca75',
        fontSize: '20px',
    }

    var inactiveCaption = {
        fillColor: '#9b9b9b',
        fontSize: '14px',
    }

function activateSTLPage() {
    // if hit lands on groupOne, activate that page:
    circleOne.style = activeCircle;
    circleOne.radius = radiusLarge;
    textOne.style = activeText;
    textOne.point = new Point(yAxis-7.5, xOne + 10),
    captionOne.style = activeCaption;
    subCaptOne.visible = true;

    // resize and color circleTwo, circleThree
    circleTwo.style = inactiveCircle;
    circleTwo.radius = radiusSmall;
    circleThree.style = inactiveCircle; 
    circleThree.radius = radiusSmall;

    textTwo.style = inactiveText;
    textTwo.point = new Point(yAxis - 5, xTwo + 5);
    textThree.style = inactiveText;
    textThree.point = new Point(yAxis - 5, xThree + 5);
    
    captionTwo.style = inactiveCaption;
    captionThree.style = inactiveCaption;

    subCaptTwo.visible = false;
    subCaptThree.visible = false;

    // update page layout:
    $(".stl").show();
    $(".functional").hide();
    $(".editor").show();
    $(".struct").hide();
}

function activateFuncPage() {
    circleTwo.style = activeCircle;
    circleTwo.radius = radiusLarge;
    textTwo.style = activeText;
    textTwo.point = new Point(yAxis-7.5, xTwo + 10),
    captionTwo.style = activeCaption;
    subCaptTwo.visible = true;

    // resize and color circleOne, circleThree
    circleOne.style = inactiveCircleComplete;
    circleOne.radius = radiusSmall;
    circleThree.style = inactiveCircle; 
    circleThree.radius = radiusSmall;

    textOne.style = inactiveTextComplete;
    textOne.point = new Point(yAxis - 5, xOne + 5);
    textThree.style = inactiveText;
    textThree.point = new Point(yAxis - 5, xThree + 5);
    
    captionOne.style = inactiveCaption;
    captionThree.style = inactiveCaption;

    subCaptOne.visible = false;
    subCaptThree.visible = false;

    // update page layout:
    $(".stl").hide();
    $(".functional").show();
    $(".editor").show();
    $(".struct").hide();
}
        
function activateStructPage() {
    circleThree.style = activeCircle;
    circleThree.radius = radiusLarge;
    textThree.style = activeText;
    textThree.point = new Point(yAxis-7.5, xThree + 10),
    captionThree.style = activeCaption;
    subCaptThree.visible = true;

    // resize and color circleOne, circleThree
    circleOne.style = inactiveCircleComplete;
    circleOne.radius = radiusSmall;
    circleTwo.style = inactiveCircleComplete; 
    circleTwo.radius = radiusSmall;

    textOne.style = inactiveTextComplete;
    textOne.point = new Point(yAxis - 5, xOne + 5);
    textTwo.style = inactiveTextComplete;
    textTwo.point = new Point(yAxis - 5, xTwo + 5);
    
    captionOne.style = inactiveCaption;
    captionTwo.style = inactiveCaption;

    subCaptOne.visible = false;
    subCaptTwo.visible = false;
    // update page layout:
    $(".stl").hide();
    $(".functional").hide();
    $(".editor").hide();
    $(".struct").show();
}
     
function previousPage() {
    if ($(".functional").is(":visible")) {
        activateSTLPage();
    } else {
        activateFuncPage();
    }
}

function nextPage() {
    console.log($(".stl").is(":visible"))
    if ($(".stl").is(":visible")) {
        activateFuncPage();
    } else if ($(".functional").is(":visible")) {
        activateStructPage();
    } else {
        // go to next step
    }
}

// LOGIN FUNCTIONS 
function openLogin() {
    $(".login-form").css({"height":"85px","padding":"20px 20px 5px 10px"});
    // $(".pageOverlay").css({"backgroundColor":"rgba(0,0,0,0.6)","width":"100%"})
}

function closeLogin() {
    $(".login-form").css({"height":"0px","padding":"0px 20px 0px 10px"});
    // $(".pageOverlay").css({"backgroundColor":"rgba(0,0,0,0)","width":"0px"})
}


// SETTINGS FUNCTIONS 
function openSettings() {
    $(".settings").css({"width":"500px","padding":"60px 40px"});
    $(".pageOverlay").css({"backgroundColor":"rgba(0,0,0,0.6)","width":"100%"})
}

function closeSettings() {
    $(".settings").css({"width":"0px","padding":"0px"});
    $(".pageOverlay").css({"backgroundColor":"rgba(0,0,0,0)","width":"0px"})
}

function addRegistry() {
    newID = $("#addReg").val();
    if (newID=='foobar') {
        alert("Invalid Registry URL");
    } else if (newID=='') {
        alert("Invalid Registry URL");
    } else {
        $("#settings ul").append(
            '<li id="' + newID + '">' + 
                '<a href="http://' + newID + '">' + newID + '</a>' + 
                '<div class="fa fa-close" id="' + newID + '" onClick="$(\'#' + newID + '\').remove();"></div>' + 
            '</li>');
        // $("#settings ul").append('<li id="' + newID + '">' + newID +
        //     '<span class="pull-right" id="' + newID + '" onClick="$(\'#' + newID + '\').remove();">x</span></li>');
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

// for cyto upload
var form = $("#cyto-upload-form");
var fileSelect = $("#cyto-upload-file");
var uploadButton = $("#cyto-upload-submit");

form.onsubmit = function(event) {
    event.preventDefault();
    
    // Update button text.
    uploadButton.innerHTML = 'Uploading...';

    // Get the selected file from the input.
    var file = fileSelect.file;

    // Create a new FormData object.
    var formData = new FormData();

    // Check the file type.
    if (file.type.match('text.*')) {
        formData.append('file[]',file,file.name);
    }

    // Set up the request.
    var xhr = new XMLHttpRequest();

    // Open the connection.
    xhr.open('POST', 'uploadCyto', true);
    
    // Set up a handler for when the request finishes.
    xhr.onload = function () {
        if (xhr.status === 200) {
            // File(s) uploaded.
            uploadButton.innerHTML = 'Upload';
        } else {
            alert('An error occurred!');
        }
    };

    // Send the Data.
    xhr.send(formData);
    
}
