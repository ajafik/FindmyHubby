//
// Client IDS
// Defines the CLIENT_ID (AppID's) of the OAuth2 providers
// relative to the domain host where this code is presented.

var location_https = window.location.href.indexOf('https://') === 0;

// Google Register --  https://console.developers.google.com
var GOOGLE_CLIENT_ID = '656984324806-sr0q9vq78tlna4hvhlmcgp2bs2ut8uj8.apps.googleusercontent.com';


// Register your domain with Facebook and add here
var FACEBOOK_CLIENT_ID = {
	'local.findmyhubby.com' : '190771111357216',
}[window.location.hostname] || '190771111357216';

// Register your domain with Twitter and add here
var TWITTER_CLIENT_ID = {
	'local.findmyhubby.com' : 'krGNvpEVVBE27jcemC6uA'
}[window.location.hostname] || 'eQuyZuECKWPiv3D7E4qdg';


// Instagram Register - http://instagram.com/developer/clients/manage/
var INSTAGRAM_CLIENT_ID = {
	'local.findmyhubby.com' : 'bfbbf362ac3148aeb1150e5b8256bbe9',
	'adodson.com' : location_https ? 'e47d210f864c4b1ca94225ddab97205a' : '264d13a33ba845f396a152cc326e6f5d'
}[window.location.hostname];



// Put all the auth2 IDs in an object
var CLIENT_IDS = {
	google : GOOGLE_CLIENT_ID,
	facebook : FACEBOOK_CLIENT_ID,
	twitter : TWITTER_CLIENT_ID,
	instagram : INSTAGRAM_CLIENT_ID
};


//
// OAUTH PROXY
//
var OAUTH_PROXY_URL = {
	'local.findmyhubby.com' : 'http://local.findmyhubby.com:8888/#result'
}[window.location.hostname] || 'https://auth-server.herokuapp.com/proxy';



//
// The manin Redirect URI
//
var REDIRECT_URI = '/index.html';
if (typeof chrome === 'object' && typeof chrome.identity === 'object' && chrome.identity.launchWebAuthFlow) {
	REDIRECT_URI = 'https://'+window.location.hostname+'.chromiumapp.org/index.html';
}

var SERVER_API_URI = 'local.findmyhubby.com/api.php';  // http://api.findmyhuppy.com.ng
