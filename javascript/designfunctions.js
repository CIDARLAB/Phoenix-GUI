// var URI = "https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/1/sbol";
// var sbol; 

// $(document).ready(function() {
//     // console.log("hi")
//     var settings = {
//         url: URI,
//         type: "get",
//         dataType: "xml",
//     };

//     $.ajax(settings).done(function (response) {
//         sbol = (new XMLSerializer()).serializeToString(response);
//         // sbol2 = response;
//         // console.log("wooo")
//         // console.log(sbol)
//     });

//     var visURI = "http://api.synform.io/render/svg/";

//     var postSettings = {
//         url: "http://api.synform.io/render/svg/",
//         type: "post",
//         data: { xml: escape(sbol) },
//         dataType: "xml",
//         // crossDomain: true,
//         // contentType: "text/xml",
//         // processData: false,
//         success: function(data) {
//             // var svg = (new XMLSerializer()).serializeToString(data);
//             console.log("svg",data)
//         },
//         error: function(){
//             alert("Cannot get data");
//         }
//     };

//     $.ajax(postSettings).done(function () {
//         console.log("wooohoo")
//         // console.log("response",response)
//     });

// })


// Convert Upload/File Info Area

function updateDataPanel(names, hasData) {
    // console.log("name: ", name);
    // console.log("has data: ", hasData)
    len = names.length;
    if (len == 1) {
        $('#multiData').hide();
        if (hasData == 1) {
            // change the active Panel:
            $('#noData').hide();
            $('#moduleData').show();
            $('#uploadData').hide();
            // fetch the data from the server and display it...
            $('#modData').text('New data from the server...');
        } else if (hasData == 0) {
            // change the active Panel:
            $('#noData').hide();
            $('#moduleData').hide();
            $('#uploadData').show();
        }
    } else {
        // change active Panel:
        $('#multiData').show();
        $('#noData').hide();
        $('#moduleData').hide();
        $('#uploadData').hide();

        // state which have/don't have data:
        // var listNameData = []
        $('#multiModData ul').empty();
        $(names).each(function(index, value) {
            if (hasData[index] == 1) {
                $('#multiModData ul').append(
                    '<li class="list-group-item"><span class="hasData">' + value + '</span>&nbsp;has data</li>'
                );

                // listNameData.push(" " + value + " has data")
            } else if (hasData[index] == 0) {
                $('#multiModData ul').append(
                    '<li class="list-group-item"><span class="needsData">' + value + '</span>&nbsp;needs additional data</li>'
                );
                // listNameData.push(" " + value + " needs additional data")
            }
        })
        // console.log(listNameData)
        // for (var i = 0; i < listNameData.length; i++) {
        //     $('#multiModData ul').append(
        //         '<li class="list-group-item hasData">' + listNameData[i] + '</li>'

        //     );
            
        //     $("#settings ul").append(
        //     '<div class="input-group justify-content-between" id="' + newID + '">' +
        //         '<button type="button" class="list-group-item bg-light"><a href="http://' + newReg + '">' + newReg + '</a></button>' +
        //         '<span class="input-group-addon" onClick="removeRegistry(\'' + newID + '\');"><div class="fa fa-close"></div></span>' +
        //     '</div>');
        //     (listNameData[i]);
        // }
    }
    
}
