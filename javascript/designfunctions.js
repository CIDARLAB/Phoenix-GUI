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
    sbol = getSBOL(sbolURI);    
    visdata = getVisBOL(sbol);

    if (project._children[0]._children.length > 1) {
        var numChildren = project._children[0]._children.length;
        project._children[0]._children[numChildren-1].remove(); // removes previous image
    }

    new Item(paper.project.importSVG(visdata));

    project._children[0].position.x = view.center.x;
    project._children[0]._children[1]._children[1].content = project._children[0]._children[1]._children[1].content.substring(2,project._children[0]._children[1]._children[1].content.length-1)

    var lastchild = project._children[0]._children[1]._children.length;
    project._children[0]._children[1]._children[lastchild-1]._children[0].remove();
    // project._children[0]._children[0]._children[lastchild-1].remove();

}

// Convert Upload/File Info Area
function updateDataPanel(names, hasData) {
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
