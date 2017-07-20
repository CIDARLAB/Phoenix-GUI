function login() {
    // check username
    var uname = $("#useremail").val();
    if (uname == '') {
        alert("Please input username.");
        return;
    };

    // check password
    var pword = $("#userpassword").val();
    if (pword == '') {
        alert("Please input a password.");
        return;
    };

}
// ACCOUNT CREATION

function createAccount() {
    $("#new-account-form").css({"width":"30%","padding":"40px 20px","margin":"5% 35%"});
    $("#new-account-overlay").css({"backgroundColor":"rgba(255,255,255,0.6)","width":"100%"})
}

function cancelAccount() {
    $("#new-account-form").css({"width":"0","padding":"0","margin":"0"});
    $("#new-account-overlay").css({"backgroundColor":"rgba(255,255,255,0)","width":"0"})
}

$(document).ready(function(){
    $('#new-account-form').validate()
})

// $(document).ready(function(){

	
// 	$('input[type=password]').keyup(function() {
// 		var pswd = $(this).val();
		
// 		//validate the length
// 		if ( pswd.length < 8 ) {
// 			$('#length').removeClass('valid').addClass('invalid');
// 		} else {
// 			$('#length').removeClass('invalid').addClass('valid');
// 		}
		
// 		//validate letter
// 		if ( pswd.match(/[A-z]/) ) {
// 			$('#letter').removeClass('invalid').addClass('valid');
// 		} else {
// 			$('#letter').removeClass('valid').addClass('invalid');
// 		}

// 		//validate capital letter
// 		if ( pswd.match(/[A-Z]/) ) {
// 			$('#capital').removeClass('invalid').addClass('valid');
// 		} else {
// 			$('#capital').removeClass('valid').addClass('invalid');
// 		}

// 		//validate number
// 		if ( pswd.match(/\d/) ) {
// 			$('#number').removeClass('invalid').addClass('valid');
// 		} else {
// 			$('#number').removeClass('valid').addClass('invalid');
// 		}
		
// 		//validate space
// 		if ( pswd.match(/[^a-zA-Z0-9\-\/]/) ) {
// 			$('#space').removeClass('invalid').addClass('valid');
// 		} else {
// 			$('#space').removeClass('valid').addClass('invalid');
// 		}
		
// 	}).focus(function() {
// 		$('#pswd_info').show();
// 	}).blur(function() {
// 		$('#pswd_info').hide();
// 	});
	
// });