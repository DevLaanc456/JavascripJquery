
var textarea = document.getElementById("elemento");
textarea.addEventListener('keypress',
                          function(e) 
                          { 
                            ChartCount(e); 
                          }, false);

function ChartCount(e)
{
    var textentered,charDisplay,counter,lastkey;
    
    textentered = document.getElementById('elemento').value;
    charDisplay = document.getElementById('contador');
    
    counter = (180 - textentered.length);
    charDisplay.textContent = counter;

    lastkey = document.getElementById('lastkeyy');
    lastkey.textContent = "Last key in AsCII code:" + e.charCode;
}








