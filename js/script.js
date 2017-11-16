/*document.querySelector will return a single element that is the first in matching the criteria
within the () */
var header = document.querySelector('#header')
header.textContent = "Hello World";

/*document.querySelectorAll will return a array like structure which contains
all the elements that match the criteria passed with the () */
var pStyles = document.querySelectorAll('.p-styles');

for (var x = 0; x < pStyles.length; x++) {
  pStyles[x].textContent = "I'm p-styles" + (x+1);
}

var lis = document.querySelectorAll('li');

for(var y = 0; y < lis.length; y++) {
  lis[y].textContent = "list item " + (y+1);
}

//Another way to select an element by it's id is document.getElementById

document.getElementById('second-header').textContent = "Something";

var awesomes = document.getElementsByClassName('awesome');

for (var z = 0; z < awesomes.length; z++){
  awesomes[z].textContent = z + 1;
}

var h3s = document.getElementsByTagName('h3');

for (var a = 0; a < h3s.length; a++) {
  h3s[a].textContent = a + " h3";
}
