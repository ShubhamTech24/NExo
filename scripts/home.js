const form = document.querySelector('form');
const prefix = document.querySelector('.prefix');
const searchInput = document.querySelector('#search');
const submitSearchButton = document.querySelector('button');

const toggleSearchButton = () => {
	if (searchInput.value.trim()) {
		searchInput.classList.remove('attention');
		submitSearchButton.classList.remove('disabled');

		return;
	}
	submitSearchButton.classList.add('disabled');
};

const setEventListeners = () => {
	searchInput.addEventListener('keyup', (_ev) => {
		toggleSearchButton();
	});

	form.addEventListener('submit', (ev) => {
		ev.preventDefault();
		if (submitSearchButton.classList.contains('disabled')){
			searchInput.focus();
			searchInput.classList.add('attention');
			setTimeout(() => searchInput.classList.remove('attention'), 700);

			return;
		} 
		window.location.href = window.location.href + searchInput.value;
	})
}

const setCopyright = () => {
	const element = document.querySelector('#copyright');
	element.textContent = `© ${new Date().getFullYear()} Jux`;
}

window.addEventListener('load', (_ev) => {
	setCopyright();
	setEventListeners();
	toggleSearchButton();
	searchInput.focus();
});
