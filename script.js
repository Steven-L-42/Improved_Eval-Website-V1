let default_font = false;
let dark_mode = true;
let language = "de";

addEventListener("load", (event) => {});

onload = (event) => {
	var params = {};
	window.location.search.substring(1).split("&").forEach(function(param) {
		var pair = param.split("=");
		params[pair[0]] = decodeURIComponent(pair[1]);
	});

	if (Object.keys(params).length > 0 && window.location.search.substring(1) !== "")
	{
		console.log('Parameters:', params);

		dark_mode = params['dark'] === "true";
		language = params['lang'] === "en" ? "en" : "de";
		default_font = params['font'] === "true";
		console.log('Dark Mode:', dark_mode);
		console.log('Language:', language);
	}
	else
	{
		window.location = 'https://Steven-Lippert.me/improved/' + language + '/?font=' + default_font + '&dark=' + dark_mode + "&lang=" + language;
	}

	UpdateTheme();
	UpdateFont();
};

let btnsTrue = document.querySelectorAll('#true');
let btnsFalse = document.querySelectorAll('#false');

btnsTrue.forEach(element =>
{
	element.addEventListener("click", ClickTrue);
});

btnsFalse.forEach(element =>
{
	element.addEventListener("click", ClickFalse);
});

function UpdateTheme()
{
	if (dark_mode === true)
	{
		document.body.style.backgroundColor = "#12141A";
		document.body.style.color = "#f5f5f5";
		const mainElement = document.querySelector('main');
		mainElement.style.backgroundColor= "#1D2028";
		mainElement.style.boxShadow = "0 0 15px 5px #1D2028";

		const intro_middle = document.querySelectorAll('.intro_middle');
		intro_middle.forEach(element => {
			element.style.backgroundColor= "#292D39";
		});

		const theme = document.getElementById('theme');
		theme.className = "fa fa-sun-o";

		const title_page = document.getElementById('title_page');
		title_page.style.color = "#03B9BC";

	}
	else if (dark_mode === false)
	{
		document.body.style.backgroundColor = "#FAFAFA";
		document.body.style.color = "#000";
		const mainElement = document.querySelector('main');
		mainElement.style.backgroundColor= "#ffffff";
		mainElement.style.boxShadow = "0 0 15px 5px #e5e5e5";

		const intro_middle = document.querySelectorAll('.intro_middle');
		intro_middle.forEach(element => {
			element.style.backgroundColor= "#f8f8f8";
		});
		const theme = document.getElementById('theme');
		theme.className = "fa fa-moon-o";

		const title_page = document.getElementById('title_page');
		title_page.style.color = "#000";
	}
}

function ClickTrue(event)
{
	let element = event.target;
	element.style.backgroundColor = "#5CB85C";
	element.style.color = "white";
	let p_element = element.parentNode;
	let c_element = p_element.querySelector('#false'); // Änderung hier
	c_element.style.backgroundColor = "#FBEFF1";
	c_element.style.color = "#D8636F";

}

function ClickFalse(event)
{
	let element = event.target;
	element.style.backgroundColor = "#D8636F";
	element.style.color = "white";
	let p_element = element.parentNode;
	let c_element = p_element.querySelector('#true'); // Änderung hier
	c_element.style.backgroundColor = "#F7FBF6";
	c_element.style.color = "#5CB85C";
}


function UpdateFont()
{
	if (default_font === false)
		document.body.style.fontFamily = "'Bahnschrift Condensed', sans-serif";
	else
		document.body.style.fontFamily = "'Courier New', Courier, monospace";
}

function UpdateWebsite()
{
	window.location = 'https://Steven-Lippert.me/improved/' + language + '/?font=' + default_font + '&dark=' + dark_mode + "&lang=" + language;
}

function SwapLanguage()
{
	if(language === "de")
		language = "en";
	else
		language = "de";
		UpdateWebsite();
}

function SwapTheme()
{
	if (dark_mode === false)
		dark_mode = true;
	else
		dark_mode = false;
	UpdateWebsite();
}

function SwapFont()
{
	if (default_font === true)
		default_font = false;
	else
		default_font = true;
	UpdateWebsite();
}