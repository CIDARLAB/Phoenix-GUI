// USER SETTINGS FUNCTIONS 
function openUserSettings() {
    $(".user-settings").css({"height":"85px","padding":"20px 20px 5px 10px"});
    // $(".pageOverlay").css({"backgroundColor":"rgba(0,0,0,0.6)","width":"100%"})
}

function closeUserSettings() {
    $(".user-settings").css({"height":"0px","padding":"0px 20px 0px 10px"});
    // $(".pageOverlay").css({"backgroundColor":"rgba(0,0,0,0)","width":"0px"})
}

// FOOTER
jQuery(function(){
    jQuery('.footer').html(
        '<span>' +
            '<img src="./images/logo/cidar_s.png">' +
        '</span>' +
        '<span>' +
            '<img src="./images/logo/BU.png">' +
        '</span>' +
        '<span>' +
            '<img src="https://www.nsf.gov/images/logos/nsf1.jpg">' +
        '</span>' +
        '<span>' +
            '<img src="./images/logo/ONRlogo.png">' +
        '</span>' +
        '<p class="text-muted">Funding for this project was provided by National Science Foundation' +
            'under CPS Frontier #1446607 and by the Office of Naval Research #N00014-11-1-10725.</p>' +
        '<div>' +
            '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">' +
                '<img alt="Creative Commons License" src="http://i.creativecommons.org/l/by-sa/4.0/88x31.png">' +
            '</a>' +
            '<p class="text-muted">Phoenix is licensed under a' +
                '<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">' +
                    'Creative Commons Attribution-ShareAlike 4.0 International License' +
                '</a>' +
                '.' +
            '</p>' +
        '</div>' +
        '<p class="text-muted">Phoenix Web App was created by Kat, Oompa Loompa Extraordinaire</p>'
    );
});
