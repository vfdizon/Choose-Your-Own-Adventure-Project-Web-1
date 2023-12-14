var data = [
	{
		"id": 1,
		"image": "media/stoppingCar.jpg",
		"text": "A wizard stops you and your friends. He yells \"Help! Woodlandia is in danger! We need your help! What is your name? \"",
		"option_one": "Take us with you!",
		"option_two": "No way!"
	},
	{
		"id": 11,
		"image": "media/carCrash.jpg",
		"text": "The wizard transports you all through a portal, but the ride was too bumpy. All of your friends died when you left. The wizard is nowhere to be seen",
		"option_one": "Mourn your friends.",
		"option_two": "Find the wizard."
	},
	{
		"id": 10,
		"image": "media/driveAway.jpg",
		"text": "You all drive away from the weird old man while he shouts \"Curse you, {username}!\"",
		"option_one": "Drive Left.",
		"option_two": "Drive Right."
	},
	{
		"id": 111,
		"image": "media/wendigoCrash.jpg",
		"text": "A wendigo comes up to you \"Come {username}, take revenge on the wizard. The cruel world of Woodlandia must suffer for  the injustices they have committed\"",
		"option_one": "Agree.",
		"option_two": "Turn Away."
	},
	{
		"id": 110,
		"image": "media/wizardForest.jpg",
		"text": "{username}! You were unconscious and the dark forces of Woodlandia have killed your friends! You must fight against them and save everyone!",
		"option_one": "Agree.",
		"option_two": "Turn Away."
	},
	{
		"id": 101,
		"image": "media/eyeballPlant.jpg",
		"text": "The dark forces of Woodlandia stop you \"{username}, get out of the car, you must fight for us. You have no option.\"",
		"option_one": null,
		"option_two": null
	},
	{
		"id": 100,
		"image": "media/knightsStoppingCar.jpg",
		"text": "You are stopped by the forces of Woodlandia \"You are under arrest {username}, you will have no option but to fight for us now!\"",
		"option_one": null,
		"option_two": null
	},
	{
		"id": 1111,
		"image": "media/monsterArmy.jpg",
		"text": "You join the dark forces of Woodlandia and fight to rule the realm, they all chant \"{username}\" as you stand on a pedestal.",
		"option_one": null,
		"option_two": null
	},
	{
		"id": 1110,
		"image": "media/wendigoEating.jpg",
		"text": "You have made a mistake, the dark forces of Woodlandia will consume you",
		"option_one": null,
		"option_two": null
	},
	{
		"id": 1101,
		"image": "media/rallyingDragons.jpg",
		"text": "A rally of knights rally by your banner, they all recognize you as {username} the Chosen One, who will bring peace and order to their land.",
		"option_one": null,
		"option_two": null
	},
	{
		"id": 1100,
		"image": "media/angryWizard.jpg",
		"text": "You have made a mistake, the forces of Woodlandia will consume you",
		"option_one": null,
		"option_two": null
	},
];

var leftButton = document.querySelector("#option_one");
var rightButton = document.querySelector("#option_two");
var buttons = document.querySelector(".buttons");
var usernameBox = document.querySelector(".username");

var description = document.querySelector(".info");
var descriptionText = document.querySelector(".info p");

var currentID = 1;
var objectMap = {};
var username;
var usernameTyped = false;

init();

function appendToID(appendVal) {
	hideButtons();
	if (atEnd()) {
		currentID = 1;
		usernameBox.style.display = "flex";
		usernameTyped = false;
		usernameBox.value = "";
	} else {
		usernameBox.style.display = "none";
		var tempVal = currentID.toString(2) + appendVal.toString(2);
		currentID = tempVal;
	}

	refreshElements();
}

function chooseLeft() {
	appendToID(1);
}

function chooseRight() {
	appendToID(0);
}

leftButton.addEventListener('click', function() {
	chooseLeft();
});
rightButton.addEventListener('click', function() {
	chooseRight();
});
usernameBox.addEventListener('input', function() {
	showButtons();
	usernameTyped = true;
	refreshElements();
})

function refreshElements() {
	username = usernameBox.value;
	var imageUrl = objectMap[currentID]["image"];
	var descText = objectMap[currentID]["text"].replace("{username}", username);
	var buttonOneText = objectMap[currentID]["option_one"];
	var buttonTwoText = objectMap[currentID]["option_two"];

	if(!usernameTyped) {
		hideButtons();
	} else {
		showButtons();
	}
	
	if (atEnd()) {
		buttonOneText = "Start Over";
		buttonTwoText = "Start Over";
		leftButton.style.display = "none";
	} else {
		leftButton.style.display = "block";
	}

	description.style.backgroundImage = "url(" + imageUrl + ")";
	descriptionText.innerHTML = descText;
	leftButton.innerHTML = buttonOneText;
	rightButton.innerHTML = buttonTwoText;
}

function showButtons() {
	buttons.classList.add("visible");
}

function hideButtons() {
	buttons.classList.remove("visible");
}

function atEnd() {
	return objectMap[currentID]["option_one"] === null;
}

function init() {
	for (var i = 0; i < data.length; i++) {
		var obj = data[i];
		objectMap[obj.id] = obj;
	}
	refreshElements();
}


