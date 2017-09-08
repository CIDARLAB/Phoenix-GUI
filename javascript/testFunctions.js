
$(window).on('load', function() {    
    // adjust grid size:
    $("#gridCanvas").css("height", $("#graphZone").height()); // height is percentage of tab, axis controls are below
    yLabel.position = new Point (10, $("#graphZone").height() / 2);
    gC.view.viewSize.width = $("#graphZone").width();
    gC.view.viewSize.height = $("#graphZone").height();

    // for testing, the following happen automatically:
    loadVisBOL("https://synbiohub.programmingbiology.org/public/Cello_Parts/B1_BM3R1/1/sbol");
    svgLayer._children[0].position.y = sC.view.center.y;
    
    loadPaths(traceData);
})

