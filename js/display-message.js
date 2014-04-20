var showInfoMessages = function(){
	var messages = document.querySelectorAll(".info");

	var i = 0;
	while(i < messages.length){
		messages[i].setAttribute("class", "info");
		i = i + 1;
	}
};

var showInfoMessagesButton = document.getElementById("showInfoMessages");
showInfoMessagesButton.addEventListener("click", showInfoMessages);
