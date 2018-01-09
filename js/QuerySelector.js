

var queryselector = document.querySelector('li.hot');
queryselector.className = 'cool';

var queryselectors = document.querySelectorAll('li.hot');

//if(queryselectors.length > 0)
//{
  //   for(var i = 0; i < queryselectors.length; i++)
  //   {
    //     queryselectors.item(i).className = 'cool';
    // }
//}

queryselectors[0].className = 'cool';

var collectionselector = document.querySelectorAll('li.good');

if(collectionselector.length > 0)
{
    for(var i = 0; i < collectionselector.length; i++)
    {
        collectionselector[i].className = 'bad';
    }
}