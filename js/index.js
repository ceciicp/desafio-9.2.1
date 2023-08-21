// Elementos del DOM

const btnEnviar = document.querySelector('#buttonText');

btnEnviar.addEventListener('click', () => {
	const valorInput = document.querySelector('#inputText').value;
	localStorage.setItem('valor', valorInput);
	console.log(localStorage.getItem('valor'));
});
