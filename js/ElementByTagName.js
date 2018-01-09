
var element = document.getElementsByTagName('li');
var element_1 = document.getElementsByTagName('ul');

if(element.length > 2)
{
    var li = element[1]; 
    li.className = 'cool';
    alert(li.innerText);
}

if(element_1.length > 0)
{
    var ul = element_1[0];
    console.log(ul.innerHTML);
    console.log(ul.innerText);
}