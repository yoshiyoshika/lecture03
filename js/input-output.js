var input = document.querySelector("#input");
var output = document.querySelector("#output");
var registerMessageButton = document.querySelector("#registerMessage");

var registerMessage = function(){
	var message = document.createElement("li");
	message.textContent = input.value;

	output.appendChild(message);
};

registerMessageButton.addEventListener("click",registerMessage);
