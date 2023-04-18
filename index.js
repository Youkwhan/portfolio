// nav bar
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
	document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		document.body.classList.remove("nav-open");
	});
});

// read more btn
document.querySelector("#read-more").addEventListener("click", (e) => {
	const more = document.querySelector(".about-me__body--read-more");

	if (e.target.textContent === "Read More") {
		e.target.textContent = "Read Less";
		more.style.opacity = "1"; // Set opacity to 1 to reveal the text
		more.style.maxHeight = "1000px"; // Set max-height to a large value to reveal the text
	} else {
		e.target.textContent = "Read More";
		more.style.opacity = "0"; // Set opacity to 0 to hide the text
		more.style.maxHeight = "0"; // Set max-height to 0 to hide the text
	}
});
