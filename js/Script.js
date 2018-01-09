
function checkusername(e,minlength)
{
     if(!e)
     {
         e = window.event;
     }
     el = e.target || e.srcElement;
     elMsg = el.nextSibling;
     dive = document.getElementById('feedback');
    
     if(el.value.length < minlength)
     {
        dive.textContent = 'UserName must be ' + minlength + ' characters or more';
     }
     else 
     {
        dive.textContent = 'PRUEBA UNO';
     }

}

var el = document.getElementById('username');
el.addEventListener('blur', function(e) 
{
    checkusername(e,5);
}, false);