// Profile UI
// Displays the users profile details

// Intiate App credentials
hello.init({
	google : CLIENT_IDS.google,
	facebook : CLIENT_IDS.facebook,
	twitter : CLIENT_IDS.twitter
},{
	scope : 'email',
	redirect_uri: REDIRECT_URI
});


// Bind events to the buttons on the page
$(document).on("click", "button.profile", function(e){
	e.preventDefault();
	hello(this.id).login();
})


// Listen to signin requests, get the data from the provider and post to the server, then unlock the hubby data.
hello.on('auth.login', function(r) {
	// Get Profile
	hello( r.network ).api( '/me' ).then( function(auth_dt) {

		// post the question answers here + the response from the auth inside the 'data' object.
		alert("Gotten the info from the social provider" + auth_dt);

		$.ajax({
	        url: SERVER_API_URI,
	        method:'post',
	        data: {"user_data": auth_dt},
	        success:function(res)
            {
                alert("Success" + res);
                console.log(res);
            },
            error:function(err)
            {
                console.log("An error occured while connecting to the API. /nError: "+ res);
            }
	    });

		// var label = document.getElementById(r.network);
		// label.innerHTML = "<img src='"+ p.thumbnail + "' width=24/>Connected to "+ r.network+" as " + p.name;

		// On chrome apps we're not able to get remote images
		// This is a workaround
		/* if (typeof(chrome) === 'object') {
			img_xhr(label.getElementsByTagName('img')[0], p.thumbnail);
		} */
	});
});


// Utility for loading the thumbnail in chromeapp
function img_xhr(img, url) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'blob';
	xhr.onload = function(e) {
		img.src = window.URL.createObjectURL(this.response);
	};
	xhr.send();
}