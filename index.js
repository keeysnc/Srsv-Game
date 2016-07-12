var gamePrompt = require('game-prompt');

//Global variables

var playerName;

var vehicleName;

var gallons = 1000;

var gallonLeft;

var presentLocation;

var artifactVault = [];


var planets =[     

	{
		name: 'Earth',
		distance: 10
	},

	{
		name: 'Mesnides',
		distance: 20
	},

	{
		name: 'Laplides',
		distance: 50
	},

	{
		name: 'Kiyturn',
		distance: 120
	},

	{
		name: 'Aenides',
		distance: 25
	},

	{
		name: 'Cramuthea',
		distance: 200
	},

	{
		name: 'Smeon',
		distance: 400
	},

	{
		name: 'Gleshan',
		distance: 85
	},

	];



function startGame(){

	gamePrompt('S.R.S.V Press Enter to start.' , intro);
}

function intro(){



		gamePrompt('You are the captain of a Solo Research Space ' +  
		' Vehicle (S.R.S.V.) on an expedition to explore foreign planets. ' +
		' Your mission is to make contact with three alien life forms, ' + 
		' acquire an artifact representative of their culture, and ' +
		' bring back your findings to Earth.', collectInfo);

}

function collectInfo(){

	gamePrompt([
		'A voice comes on over the intercom.',
		'"Please state your name for identity verification."'
		], collectName);
}


function collectName(name){

	playerName = name;

	gamePrompt([
		'"Thank you Captain ' + playerName,
		'Please state your Vehicle name for indenty verification.'],
		collectVehicleName
		);
}

function collectVehicleName(name){

	vehicleName = name;

	gamePrompt(['Good Choice, where to Captain? ' + playerName ] , planetList);


}

function planetList(){

	for(i = 0; i < planets.length; i++){

		planetName = planets[i].name;

		gamePrompt([ '(' + planetName.charAt(0) + ')' + planetName ]);

	}	

	gamePrompt(['So where to?'], travel);

}

function travel(departure){


	if( departure === 'E' || departure === 'Earth'){

		presentLocation = 'Earth';



		gamePrompt(['Flying to Earth']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);

		if(presentLocation === "Earth"){
		gamePrompt(['Welcome back!']);
		results();
		}

	}else if( departure === 'M' || departure === 'Mesnides'){

		presentLocation = 'Mesnides';



		gamePrompt(['Flying to Mesnides']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);

	}else if( departure === 'L' || departure === 'Laplides'){

		presentLocation = 'Laplides';



		gamePrompt(['Flying to Laplides']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);

	}else if( departure === 'K' || departure === 'Kiyturn'){

		presentLocation = 'Kiyturn';



		gamePrompt(['Flying to Kiyturn']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);


	}else if( departure === 'A' || departure === 'Aenides'){

		presentLocation = 'Aenides';



		gamePrompt(['Flying to Aenides']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);

	}else if( departure === 'C' || departure === 'Cramuthea'){

		presentLocation = 'Cramuthea';



		gamePrompt(['Flying to Cramuthea']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);

	}else if( departure === 'S' || departure === 'Smeon'){

		presentLocation = 'Smeon';



		gamePrompt(['Flying to Smeon']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);

	}else if( departure === 'G' || departure === 'Gleshan'){

		presentLocation = 'Gleshan';



		gamePrompt(['Flying to Gleshan']);

		gamePrompt(['You used 20 gallons of gas...You have ' + gallons + ' gallons left'], encounter);

	}else{

		gamePrompt(['Incorrect Entry....Choose a planet'], planetList);
	}

}

function encounter(){

	gamePrompt(['Ask about' + '(' + 'A' + ')' + 'rtifact.']);
	gamePrompt(['Ask about' + '(' + 'P' + ')' + 'lanet.']);
	gamePrompt(['(' + 'L' + ')' + 'eave']);

	gamePrompt(['Welcome, traveler, to ' + presentLocation + ' How can we assist you?'],collect);

}

function collect(dialogue){

if(dialogue === 'A'){

		artifactVault = (artifactVault++) + 1;

		gamePrompt(['You have collected an item from ' +  presentLocation + ' . You now have ' + artifactVault + ' item'+ ((artifactVault > 1) ? 's' : '' )]);

		collectVehicleName();

}else if(dialogue === 'P' || dialogue === 'Planet') {

		
		if(presentLocation === "Laplides"){
		gamePrompt(['Well,' + presentLocation + ' suffered from atomic war 10 years ago and were still working on restoring our planet.']);

		}else if(presentLocation === "Mesnides"){
		gamePrompt([ presentLocation + ' has been invaded by Aenides so be sure not to call them Laplidians']);	
		
		}else if(presentLocation === "Kiyturn"){
		gamePrompt(['Earth sucks and should be destroyed']);	
		
		}else if(presentLocation === "Aenides"){

		gallonLeft = gallons - 50;

		return gallonLeft;

		gamePrompt(['Earth sucks and should be destroyed']);

		gamePrompt([presentLocation + ' drains space ship of 50 gallons of gas.']);
		


		}else if(presentLocation === "Cramuthea"){
		gamePrompt(['We love earth..you are always welcome here']);

		}else if(presentLocation === "Smeon"){
		gamePrompt(['We love earth..you are always welcome here']);

		}else if(presentLocation === "Gleshan"){
		gamePrompt(['We love earth..you are always welcome here']);	
		}else{

			encounter();
		}

	collectVehicleName();

}else{

	collectVehicleName();
	}

}
	
function gasoPlanet(){

	gallonLeft = gallons - 20;

	return gallonLeft;
}

function results(){


	if(artifactVault >= 3){

	
	gamePrompt(['You gathered all 3 artifacts! You Win']);

	}else if(artifactVault < 3){
	gamePrompt(['Get back out there and get 3 artifacts!']);
	
	collectVehicleName();
	}else{

	}
}
		




startGame();
