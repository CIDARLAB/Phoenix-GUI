// defines hitOptions - used to check if a click lands on a line or not
var hitOptions = {
    segments: true,
    stroke: true,
    fill: true,
    tolerance: 3
};

var activeCircle = {
    fillColor: '#0275d8',
    strokeColor: null,
};

var inactiveCircle = {
    fillColor: 'white',
    strokeColor: '#0275d8',
    strokeWidth: '5',
};

var inactiveCircleComplete = {
    fillColor: '#0275d8',
    strokeColor: null,
}

var activeText = {
    fontSize: '30px',
    fillColor: 'white',
};

var inactiveText = {
    fontSize: '15px',
    fillColor: '#0275d8',
};

var inactiveTextComplete = {
    fontSize: '15px',
    fillColor: 'white',
}

var activeCaption = {
    fillColor: '#0275d8',
    fontSize: '20px',
}

var inactiveCaption = {
    fillColor: '#9b9b9b',
    fontSize: '14px',
}

function activateSTLPage() {
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

    // update buttons
    $("#btn-upload").removeClass('disabled');
    $("#btn-prevPage").addClass('disabled');
    $("#btn-nextPage").text('NEXT');
    $("#btn-nextPage").attr("onClick",'activateStructPage()');

    // update page layout:
    $(".stl").show();
    $(".struct").hide();
    $(".editor").show();
    $(".library").hide();

    // update the editor:
    editor.setValue(stlScript);
    editor.getSession().setMode("ace/mode/stl");
}

function activateStructPage() {
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

    // update buttons
    $("#btn-upload").removeClass('disabled');
    $("#btn-prevPage").removeClass('disabled');
    $("#btn-prevPage").attr("onClick",'activateSTLPage()');
    $("#btn-nextPage").text('NEXT');
    $("#btn-nextPage").attr("onClick",'activateLibraryPage()');

    // update page layout:
    $(".stl").hide();
    $(".struct").show();
    $(".editor").show();
    $(".library").hide();

    // update the editor:
    editor.setValue(structScript);
    editor.getSession().setMode("ace/mode/eugene");
}
        
function activateLibraryPage() {
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

    // update buttons
    $("#btn-upload").addClass('disabled');
    $("#btn-prevPage").removeClass('disabled');
    $("#btn-prevPage").attr("onClick",'activateStructPage()');
    $("#btn-nextPage").text('RUN');
    $("#btn-nextPage").attr("onClick",'');

    // update page layout:
    $(".stl").hide();
    $(".struct").hide();
    $(".editor").hide();
    $(".library").show();

}

function loadSample() {
    console.log("load sample...")
    if ($(".stl").is(":visible")) {
        stlScript = "((G[0,60] inducer <= 5) => (F[0,90]G[0,30] output > 10) \n\
^ (G[0,60] inducer > 5) => (F[0,90]G[0,30] output <= 10))";
        editor.setValue(stlScript);
    } else if ($(".struct").is(":visible")) {
        structScript = 
"// Size = 8 \n\
// 24 Solutions \n\
\n\
// COUNTING \n\
ip1 exactly 1 \n\
rp1 exactly 1 \n\
g1 exactly 1 \n\
unk2 exactly 1 \n\
r1 exactly 1 \n\
r2 exactly 1 \n\
t1 exactly 1 \n\
t2 exactly 1 \n\
\n\
// INTERACTIONS \n\
g1 represses rp1 \n\
ip1 drives g1 \n\
not ip1 drives unk2 \n\
rp1 drives unk2 \n\
not rp1 drives g1 \n\
\n\
//POSITIONING \n\
r1 nextto g1 \n\
r1 SAME_ORIENTATION g1 \n\
r1 before g1 or r1 after g1 \n\
r1 before g1 or reverse r1 \n\
forward r1 or r1 after g1 \n\
forward r1 or reverse r1 \n\
\n\
r2 nextto unk2 \n\
r2 SAME_ORIENTATION unk2 \n\
r2 before unk2 or r2 after unk2 \n\
r2 before unk2 or reverse r2 \n\
forward r2 or r2 after unk2 \n\
forward r2 or reverse r2 \n\
\n\
t2 after unk2 or t2 before unk2 \n\
t2 after unk2 or reverse unk2 \n\
forward unk2 or t2 before unk2 \n\
forward unk2 or reverse unk2 \n\
\n\
t1 after g1 or t1 before g1 \n\
t1 after g1 or reverse g1 \n\
forward g1 or t1 before g1 \n\
forward g1 or reverse g1 \n\
\n\
//ORIENTATION \n\
ip1 SAME_ORIENTATION r1 \n\
ip1 SAME_ORIENTATION t1 \n\
rp1 SAME_ORIENTATION r2 \n\
rp1 SAME_ORIENTATION t2";
        editor.setValue(structScript);
    }
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
    var newReg = $("#addReg").val();
    var ndx = 0;
    if (newReg.match('www')) {
        ndx = newReg.indexOf('www') + 4;
    } else if (newReg.match('http://')) {
        ndx = 7;
    } else if (newReg.match('https://')) {
        ndx = 8;
    }
    var newID = replaceString(newReg.substring(ndx,newReg.length),'\\.','-');
    if ($("#" + newID).length != 0) {
        alert('This registry is already on the list.');
        $("#addReg").val('');
        return
    }
    if (newReg=='foobar') {
        alert("Invalid Registry URL");
    } else if (newReg=='') {
        alert("Invalid Registry URL");
    } else {
        $("#settings ul").append(
            '<div class="input-group justify-content-between" id="' + newID + '">' +
                '<button type="button" class="list-group-item bg-light"><a href="http://' + newReg + '">' + newReg + '</a></button>' +
                '<span class="input-group-addon" onClick="removeRegistry(\'' + newID + '\');"><div class="fa fa-close"></div></span>' +
            '</div>');
        $("#registrySelect").append($('<option>', {
            text: newReg,
            id: newID + '-select',
        }));
    }
    $("#addReg").val('');
}

function removeRegistry(itemID) {
    $('#' + itemID).remove();
    $('#' + itemID + '-select').remove();
}

function replaceString(myString,original,replacement) {
    var reg = new RegExp(original, 'g');
    myString = myString.replace(reg,replacement);
    return(myString)
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

function runEugene() {
    alert('Running Eugene (except not really b/c nothing works)!');
}
// for cyto upload
// var form = $("#cyto-upload-form");
// var fileSelect = $("#cyto-upload-file");
// var uploadButton = $("#cyto-upload-submit");

// form.onsubmit = function(event) {
//     event.preventDefault();
    
//     // Update button text.
//     uploadButton.innerHTML = 'Uploading...';

//     // Get the selected file from the input.
//     var file = fileSelect.file;

//     // Create a new FormData object.
//     var formData = new FormData();

//     // Check the file type.
//     if (file.type.match('text.*')) {
//         formData.append('file[]',file,file.name);
//     }

//     // Set up the request.
//     var xhr = new XMLHttpRequest();

//     // Open the connection.
//     xhr.open('POST', 'uploadCyto', true);
    
//     // Set up a handler for when the request finishes.
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             // File(s) uploaded.
//             uploadButton.innerHTML = 'Upload';
//         } else {
//             alert('An error occurred!');
//         }
//     };

//     // Send the Data.
//     xhr.send(formData);
    
// }

// window load
$(window).ready(function() {
    console.log('loaded');
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    console.log('winheight * 0.67:', winHeight, winHeight * .67)
    console.log($("#main-container").css("height"));
    $("#main-container").css("height", winHeight * .67);
    console.log($("#main-container").css("height"));
    $("#table").css("height", winHeight * .67 - 300);
    console.log($("#table").css("height"))
});

$( window ).resize(function() {
//   console.log('resize');
  var newHeight = $(window).height();
//   console.log(newHeight);
    $("#main-container").css("height", newHeight * .67);
});

function changeTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}