jQuery(function () {
	counterF();
});



function counterF() {
	//https://github.com/bfintal/Counter-Up2
	const counterUp = window.counterUp.default;
	const el = document.querySelector( '.counter' );
	counterUp( el, {
		duration: 4000,
		delay: 100,
	})
}