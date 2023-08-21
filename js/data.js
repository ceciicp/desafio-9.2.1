const dataLocalStorage = document.querySelector('#data');

document.addEventListener('DOMContentLoaded', () => {
	dataLocalStorage.innerHTML += localStorage.getItem('valor');
});
