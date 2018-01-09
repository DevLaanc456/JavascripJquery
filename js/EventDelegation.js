
var el = document.getElementById('shoppinglist');
if(el.addEventListener)
{
    el.addEventListener('click', function(e)
    {
          itemDone(e);
    },false);
} else 
{
    el.attachEvent('onclick',function(e)
    {
         itemDone(e);
    });
}

function getTarget(e)
{
    if(!e)
    {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e)
{
    var target, elParent, elGrandParent
    target = getTarget(e); //em
    elParent = target.parentNode; //a
    elGrandParent = target.parentNode.parentNode; //li
    elGrandGrandParent = elGrandParent.parentNode; //ul

    siguienteElemento = elGrandParent.nextElementSibling.childNodes[0]; //siguiente nodo elemeto a
    siguienteElemento.parentNode.removeChild(siguienteElemento) ;
   
    if(e.preventDefault)
    {
        e.preventDefault();
    }
    else 
    {
        e.returnValue = false;
    }
}



