

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});



navLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



const revealElements = document.querySelectorAll(
    ".section, .project, .skill-card, .education-card, .independent-project"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});