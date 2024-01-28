 var modal = document.querySelector('.model');
    var openBtn = document.querySelector('.open');

    // Function to open the modal
    function openModal() {
        modal.style.display = 'block';
        document.body.style.backgroundColor = 'lightgrey';
		modal.style.top = '20%';
	    modal.style.transform = 'translateY(-50%)';
		setTimeout(function() {
	        modal.style.transition = 'none';
	    }, 500);
    }

    // Function to close the modal
    function closeModal() {
		modal.style.top = '-100%';
	    modal.style.transform = 'translateY(0)';
        document.body.style.backgroundColor = 'white';
		modal.style.transition="top 0.5s, transform 0.5s";
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };