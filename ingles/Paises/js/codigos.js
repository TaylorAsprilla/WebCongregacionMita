var clipboard = new Clipboard('.copiar');

clipboard.on('success', function (e) {
	alert("Seleccion Copiada");
});

clipboard.on('error', function (e) {
	// Error al copiar
});

///****** hasta aqui la funcion para copiar con un click direccion y telefono **********/////////

///****** boton para subir el html **********/////////

document.getElementById("subir").addEventListener("click", scrollUp);

function scrollUp() {

	var currentScroll = document.documentElement.scrollTop;

	if (currentScroll > 0) {
		window.requestAnimationFrame(scrollUp);
		window.scrollTo(0, currentScroll - (currentScroll / 10));
	}
}




buttonUp = document.getElementById("subir");

window.onscroll = function () {

	var scroll = document.documentElement.scrollTop;

	if (scroll > 500) {
		buttonUp.style.transform = "scale(1)";
	} else if (scroll < 500) {
		buttonUp.style.transform = "scale(0)";
	}

}
///****** hasta aqui boton para subir el html **********/////////


/******************* popup de la reseña historica ******************/

if (document.getElementById("btnModal")) {
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("btnModal");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementsByTagName("body")[0];

	btn.onclick = function () {
		modal.style.display = "block";

		body.style.position = "static";
		body.style.height = "100%";
		body.style.overflow = "hidden";
	}

	span.onclick = function () {
		modal.style.display = "none";

		body.style.position = "inherit";
		body.style.height = "auto";
		body.style.overflow = "visible";
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";

			body.style.position = "inherit";
			body.style.height = "auto";
			body.style.overflow = "visible";
		}
	}
}




/******************* hasta aqui popup de la reseña historica ******************/