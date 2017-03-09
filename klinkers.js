function id(e) { return document.getElementById(e); }

var chars = [
	["a", "!"],
	["e", "@"],
	["o", "#"],
	["u", "$"],
	["i", "%"],
];

id("btnEncode").onclick = function () {
	var text = id("inputText").value;
	for(var i = 0; i < chars.length; i++) {
		while(text.indexOf(chars[i][0]) != -1) {
			text = text.replace(chars[i][0], chars[i][1]);
		}
	}
	id("result").innerHTML += text + "<br />";
}