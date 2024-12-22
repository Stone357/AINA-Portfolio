// Navigationbar

	const body = document.querySelector("body"),
		  sidebar = body.querySelector(".sidebar"),
		  toggle = body.querySelector(".toggle"),
		  modeSwitch = body.querySelector(".toggle-switch"),
		  modeText = body.querySelector(".mode-text"),
		  moonMode = body.querySelector(".bx-moon"),
		  sunMode = body.querySelector(".bx-sun")

		  toggle.addEventListener("click", () => {
		  	sidebar.classList.toggle("close");
		  });

		  modeSwitch.addEventListener("click", () => {
		  	body.classList.toggle("dark");

		  	if (body.classList.contains("dark")){
	  			modeText.innerText = "Mode nuit"
	  		}else{
	  			modeText.innerText = "Mode éclairer"	
	  		}

		  });


	// section scroll
	let sections = document.querySelectorAll('section');
	let navLinks = document.querySelectorAll('header ul li a');

	// sticky header
	window.onscroll = () => {

		sections.forEach(sec => {
			let top = window.scrollY;
			let offset = sec.offsetTop - 50;
			let height = sec.offsetHeight;
			let id = sec.getAttribute('id');

			if (top >= offset && top < offset + height) {
				//active navbar links
				navLinks.forEach(links => {
					links.classList.remove('active');
					document.querySelector('header ul li a[href*=' + id + ']').classList.add('active');
				});
			}

		});

		let header = document.querySelector('header');

		header.classList.toggle('sticky', window.scrollY > 50);
	}