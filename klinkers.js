function id(e) { return document.getElementById(e); }

var firstChars = [
	["a", "!"],
	["e", "@"],
	["o", "#"],
	["u", "$"],
	["i", "%"]
];

var secondChars = [
	["a", "&"],
	["e", "*"],
	["o", "="],
	["u", "+"],
	["i", "-"]
];

id("btnEncode").onclick = id("btnEncode2").onclick = function () {
	encode("inputText", firstChars);	
}

id("btnEncode3").onclick = function() {
	encode("inputText3", secondChars);	
}

function encode(input, chars) {
	var text = id(input).value;
	for(var i = 0; i < chars.length; i++) {
		while(text.indexOf(chars[i][0]) != -1) {
			text = text.replace(chars[i][0], chars[i][1]);
		}
	}
	id("result").innerHTML += text + "<br />";
}