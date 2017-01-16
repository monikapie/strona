var app = angular.module('topaz', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl: "html/home.html",
			controller: 'homeController'
		})
		.state('Onas', {
			url: "/Onas",
			templateUrl: "html/Onas.html",
			controller: 'pomController'
		})
		.state('Galeria', {
			url: "/Galeria",
			templateUrl: "html/Galeria.html",
			controller: 'pomController'
		})
		.state('Kontakt', {
			url: "/Kontakt",
			templateUrl: "html/Kontakt.html",
			controller: 'kontaktController'
		})
		.state('Oferta', {
			url: "/Oferta",
			templateUrl: "html/Oferta.html",
			controller: 'pomController'
		})
		.state('Wspolpraca', {
			url: "/Wspolpraca",
			templateUrl: "html/Wspolpraca.html",
			controller: 'pomController'
		})
});

app.controller('kontaktController', function(){
	document.getElementById("navbar_basic").setAttribute("class", "navbar navbar-default");
	loadScript()
});

app.controller('pomController', function(){
	document.getElementById("navbar_basic").setAttribute("class", "navbar navbar-default");
});

app.controller('homeController', function(){
	document.getElementById("navbar_basic").setAttribute("class", "navbar navbar-default navbar-fixed-top");
});

app.run(function ($state) {
    $state.go('home');
});

//Map
function initialize()
{
	var mapProp = {
		center: new google.maps.LatLng(53.159376,23.076656),
		zoom:13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var myCenter=new google.maps.LatLng(53.159376,23.076656);
	var marker=new google.maps.Marker({
		position:myCenter,
	});

	marker.setMap(map);
}

function loadScript()
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCatUkjo4_JEx-xXoqOVmW-S52s-Uy7eEk&sensor=false&callback=initialize";
	document.body.appendChild(script);
}


