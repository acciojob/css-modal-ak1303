var modal = document.querySelector('.modal');

	function openModal() {
	    modal.classList.add('open');
	    document.body.style.backgroundColor = 'lightgrey';
	}

    function closeModal() {
		modal.classList.remove('open');
        document.body.style.backgroundColor = 'white';
    }