var	url = 'http://www.noxs.net/42stats',

g_moiroux;

jmoiroux_json = url + '/db/jmoiroux.json',

jsonRequestUrl = 'http://safe-plains-5453.herokuapp.com/bill.json',

noxsController = angular.module('SkyTestController',[]),

noxsApp = angular.module('SkyTestApp', ['ngRoute', 'ngCookies', 'SkyTestController']);



//
//	CHART JS
//
