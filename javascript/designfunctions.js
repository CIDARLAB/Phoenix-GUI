var sbol2 = 
'<?xml version="1.0" encoding="UTF-8"?>' + 
'<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:prov="http://www.w3.org/ns/prov#" xmlns:sbol="http://sbols.org/v2#" xmlns:xsd="http://www.w3.org/2001/XMLSchema#dateTime/" xmlns:synbiohub="http://synbiohub.org#" xmlns:sbh="http://wiki.synbiohub.org/wiki/Terms/synbiohub#" xmlns:sybio="http://www.sybio.ncl.ac.uk#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:ncbi="http://www.ncbi.nlm.nih.gov#" xmlns:igem="http://wiki.synbiohub.org/wiki/Terms/igem#" xmlns:genbank="http://www.ncbi.nlm.nih.gov/genbank#" xmlns:gbconv="http://sbols.org/genBankConversion#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:obo="http://purl.obolibrary.org/obo/">' + 
 '<sbol:ComponentDefinition rdf:about="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/1">' + 
   '<sbol:persistentIdentity rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV"/>' + 
   '<sbol:displayId>AAV</sbol:displayId>' + 
   '<sbol:version>1</sbol:version>' + 
   '<dcterms:description>CDS - Degradation Tag</dcterms:description>' + 
   '<sbh:ownedBy rdf:resource="https://synbiohub.cidarlab.org/user/ckmadsen"/>' + 
   '<sbh:topLevel rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/1"/>' + 
   '<genbank:molecule>ds-DNA</genbank:molecule>' + 
   '<genbank:date>07-JAN-2015</genbank:date>' + 
   '<genbank:locus>AAV</genbank:locus>' + 
   '<genbank:keywords>&quot;part-subtype:Degradation Tag&quot; &quot;source:unknown&quot; &quot;speed:slow&quot; &quot;part-type:CDS&quot;</genbank:keywords>' + 
   '<genbank:comment>AAV Degradation Tag</genbank:comment>' + 
   '<sbol:type rdf:resource="http://www.biopax.org/release/biopax-level3.owl#DnaRegion"/>' + 
   '<sbol:type rdf:resource="http://identifiers.org/so/SO:0000987"/>' + 
   '<sbol:role rdf:resource="http://identifiers.org/so/SO:0000804"/>' + 
   '<sbol:sequenceAnnotation>' + 
     '<sbol:SequenceAnnotation rdf:about="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/annotation0/1">' + 
       '<sbol:persistentIdentity rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/annotation0"/>' + 
       '<sbol:displayId>annotation0</sbol:displayId>' + 
       '<sbol:version>1</sbol:version>' + 
       '<sbh:ownedBy rdf:resource="https://synbiohub.cidarlab.org/user/ckmadsen"/>' + 
       '<sbh:topLevel rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/1"/>' + 
       '<gbconv:ApEinfo_revcolor>#f58a5e</gbconv:ApEinfo_revcolor>' + 
       '<gbconv:ApEinfo_fwdcolor>#f58a5e</gbconv:ApEinfo_fwdcolor>' + 
       '<gbconv:label>AAV</gbconv:label>' + 
       '<sbol:location>' + 
         '<sbol:Range rdf:about="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/annotation0/range/1">' + 
           '<sbol:persistentIdentity rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/annotation0/range"/>' + 
           '<sbol:displayId>range</sbol:displayId>' + 
           '<sbol:version>1</sbol:version>' + 
           '<sbh:ownedBy rdf:resource="https://synbiohub.cidarlab.org/user/ckmadsen"/>' + 
           '<sbh:topLevel rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/1"/>' + 
           '<sbol:start>1</sbol:start>' + 
           '<sbol:end>36</sbol:end>' + 
           '<sbol:orientation rdf:resource="http://sbols.org/v2#inline"/>' + 
         '</sbol:Range>' + 
       '</sbol:location>' + 
       '<sbol:role rdf:resource="http://identifiers.org/so/SO:0000316"/>' + 
     '</sbol:SequenceAnnotation>' + 
   '</sbol:sequenceAnnotation>' + 
   '<sbol:sequence rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV_seq/1"/>' + 
 '</sbol:ComponentDefinition>' + 
 '<sbol:Sequence rdf:about="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV_seq/1">' + 
   '<sbol:persistentIdentity rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV_seq"/>' + 
   '<sbol:displayId>AAV_seq</sbol:displayId>' + 
   '<sbol:version>1</sbol:version>' + 
   '<sbh:ownedBy rdf:resource="https://synbiohub.cidarlab.org/user/ckmadsen"/>' + 
   '<sbh:topLevel rdf:resource="https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV_seq/1"/>' + 
   '<sbol:elements>GCGGCGAACGATGAAAACTATGCGGCGGCGGTGTAA</sbol:elements>' + 
   '<sbol:encoding rdf:resource="http://www.chem.qmul.ac.uk/iubmb/misc/naseq.html"/>' + 
 '</sbol:Sequence>' + 
'</rdf:RDF>'; 


function getSBOL(sbolURI) {
    var sbol;
    // var URI = "https://synbiohub.cidarlab.org/public/phoenix_feature_lib/AAV/1/sbol";
    // var URI = "https://synbiohub.programmingbiology.org/public/Cello_Parts/B1_BM3R1/1/sbol";

    var settings = {
        url: sbolURI,
        type: "get",
        dataType: "xml",
        async: false,
    };

    $.ajax(settings).done(function (response) {
        sbol = (new XMLSerializer()).serializeToString(response);
    });
    return sbol;
}

function getVisBOL(sbol) {
    var visdata;
    var visURI = "http://api.synform.io/render/svg/";

    var postSettings = {
        url: "http://api.synform.io/render/svg/",
        type: "post",
        data: sbol,
        async: false,
        success: function(data) {
            console.log(data)
            visdata = data;
        },
        error: function(){
            alert("Cannot get data");
        }
    };

    $.ajax(postSettings).done(function () {
    });

    $('#design').html(
        '<svg id="visSVG" style="visibility: hidden;">' + visdata
    );
    return visdata;
}

function loadVisBOL(sbolURI) {

    svgLayer.activate(); // activate correct Layer

    sbol = getSBOL(sbolURI);    
    visdata = getVisBOL(sbol);

    if (svgLayer._children.length > 0) {
        // var numChildren = project._children[0]._children.length;
        svgLayer.removeChildren(); // removes previous image/highlights
    }

    new Item(paper.project.importSVG(visdata));

    svgLayer._children[0].position.x = view.center.x;
    // removes the extra character before the name
    svgLayer._children[0]._children[1].content = svgLayer._children[0]._children[1].content.substring(2,svgLayer._children[0]._children[1].content.length-1)

    svgLayer._children[0].lastChild._children[0].remove(); // removes the border around the image
    svgLayer._children[0].lastChild._children[0]._segments[1]._point._x += -50 // removes extra "tail" for horizontal line
    // project._children[0]._children[0]._children[lastchild-1].remove();

}

function highlightPart(partNumber) {

    rectLayer.activate(); // activate correct Layer

    var xStartCoord = svgLayer._children[0].lastChild._children[0]._segments[0]._point._x
    var svgWidth = svgLayer._children[0].lastChild._children[0]._segments[1]._point._x - xStartCoord;
    
    var totalParts = (svgLayer._children[0]._children.length - 3) / 2; // - 3 for Shape, Name, Border, /2 for part Labels
    var partitionWidth = svgWidth/totalParts;

    // define new rectangle:
    var hrPoint = new Point(0, 0);
    var hrSize = new Size(partitionWidth, view.bounds.height);
    var rect = new Path.Rectangle({
        point: hrPoint,
        size: hrSize,
        fillColor: '#d7d7d7',
    });

    // position the rectangle segments (corners) according to width and partID
    for (var i = 0; i < rect._segments.length; i++) {
        if (i == 0 | i == 1) {
            rect._segments[i]._point._x = xStartCoord + (partitionWidth * partNumber);
        } else {
            rect._segments[i]._point._x = xStartCoord + (partitionWidth * partNumber) + partitionWidth;
        }
    }

    rectLayer.addChild(rect); // add rectangle to rectLayer
    rectLayer.sendToBack(); // ensure all rectangles are behind the svgLayer
}

// Convert Upload/File Info Area
function updateDataPanel(names, hasData, childNames, childData) {
    len = names.length;
    if (len == 1 && (hasData == 0 || hasData == 1)) {
        if (hasData == 1) {
            // change the active Panel:
            $('#noData').hide();
            $('#moduleData').show();
            $('#uploadData').hide();
            $('#multiData').hide();
            // fetch the data from the server and display it...
            $('#modData').text('New data from the server...');
        } else if (hasData == 0) {
            // change the active Panel:
            $('#noData').hide();
            $('#moduleData').hide();
            $('#uploadData').show();
            $('#multiData').hide();
        }
    } else if (len >= 1) {
        // change active Panel:
        $('#noData').hide();
        $('#moduleData').hide();
        $('#uploadData').hide();
        $('#multiData').show();

        // state which have/don't have data:
        $('#multiModData ul').empty();
        if (len > 1) {
            $(names).each(function(index, value) {
                if (hasData[index] != 0) {
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
        } else {
            $('#multiModData ul').append(
                '<li class="list-group-item"><span class="partialData">' + names + '</span>&nbsp;is missing some data</li>'
            );
            $(childNames).each(function(index, value) {
                if (childData[index] == 1) {
                    $('#multiModData ul').append(
                        '<li class="list-group-item"><span class="hasData">' + value + '</span>&nbsp;has data</li>'
                    );
                } else if (childData[index] == 0) {
                    $('#multiModData ul').append(
                        '<li class="list-group-item"><span class="needsData">' + value + '</span>&nbsp;needs additional data</li>'
                    );
                } else if (childData[index] == 2) {
                    $('#multiModData ul').append(
                        '<li class="list-group-item"><span class="partialData">' + value + '</span>&nbsp;is missing some data</li>'
                    );
                }
            })
        }
    } else {
        $('#noData').show();
        $('#moduleData').hide();
        $('#uploadData').hide();
        $('#multiData').hide();
    }
    
}
