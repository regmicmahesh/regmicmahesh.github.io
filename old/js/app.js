function enableDarkTheme(){
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
}

function enableLightTheme(){
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
}

let theme = "light";

const button = document.querySelector("#change-color")

button.onclick = function() {

	if(theme == "light"){
		theme = "dark";
		this.style.backgroundColor = "black";
		this.style.color = "white";
		this.innerHTML = "Light Theme";
		this.style.border = "1px solid white";
		enableDarkTheme();
	}
	else if(theme == "dark"){
		this.style.backgroundColor = "white";
		this.style.color = "black";
		this.style.border = "1px solid black";
		theme = "light";
		this.innerHTML = "Dark Theme";
		enableLightTheme();
	}
}
