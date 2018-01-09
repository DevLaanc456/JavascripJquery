

var itenTwo = document.getElementById('two');
var elText = itenTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts','kale');
itenTwo.firstChild.nodeValue = elText;
