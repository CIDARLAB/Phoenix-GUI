$(document).on('change',editor.val(), function() {
    console.log($(this));
    var collectionURI = $("option:selected", this).val();
    // necessary reformatting for the API
    // var rep = '/';
    // var rep2 = ':';
    // var re = new RegExp(rep, 'g');
    // var re2 = new RegExp(rep2, 'g');
    // collectionURI = collectionURI.replace(re,"%2F")
    // collectionURI = collectionURI.replace(re2,"%3A")

    var URI = "https://" + $(editor.val() + "/sbol";

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
    });
})