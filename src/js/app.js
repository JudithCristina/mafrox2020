  
const changeView = (hash) => {
  switch (hash) {
		case '#/' : { return getView('view/home.html') }
		case '#/nosotros' : { return getView('view/nosotros.html') }
		case '#/aprendiendo' : { return getView('view/aprendiendo.html') }
		case '#/aprendiendo/nuestroSello' : { return getView('view/nuestroSello.html') }
		case '#/aprendiendo/enciclopediaCarne' : { return getView('view/enciclopediaCarne.html') }
		case '#/aprendiendo/alimentacion' : { return getView('view/alimentacion.html') }
    case '#/nuestrosCortes' : { return getView('view/nuestrosCortes.html') }
    case '#/contacto' : { return getView('view/contacto.html') }
    default: return getView('views/404.html')
  }
}

const changeHome = () => {
  getView('view/home.html')
  window.location.hash = '/'
}

const getView = (route) => {
  fetch('http://127.0.0.1:5501/src/' + route)
  .then(response => response.text())
  .then(html => showView(html));
}

const showView = (html) => {
  let sectionMain = document.getElementById('container-spa');
  return sectionMain.innerHTML = html
}

window.addEventListener('load', changeHome())
if (("onhashchange" in window)) window.onhashchange = () => changeView(window.location.hash);


var dropdownContainer = document.getElementsByClassName('dropdown-container');

jQuery(document).ready(function(){
	jQuery(".hamb").click(function(e){
	 	e.preventDefault();
		 jQuery("header nav").toggleClass("abrir");
		 jQuery(dropdownContainer).addClass("hide");
	 	jQuery(".hamb i").toggleClass("fa-times");
	});
});

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
	console.log(dropdown[i]);
  	dropdown[i].addEventListener("click", function() {
    	this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		console.log(dropdownContent);
    		if (dropdownContent.style.display === "block") {
      			dropdownContent.style.display = "none";
    		} else {
      			dropdownContent.style.display = "block";
    		}
  		});
}

function sq1(){
	return getView('view/nuestroSello.html')
}
function sq2(){
	return getView('view/enciclopediaCarne.html')
}
function sq3(){
	return getView('view/alimentacion.html')
}

