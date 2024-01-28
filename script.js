var modal = document.querySelector('.modal');

	function openModal() {
	    modal.classList.add('open');
	    document.body.style.backgroundColor = 'lightgrey';
	}

    function closeModal() {
        document.body.style.backgroundColor = 'white';
		modal.classList.remove('open');
    }