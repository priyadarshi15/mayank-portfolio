gsap.from(".first-name",{
    x:-1200,
    duration:1.4,
    ease:"power4.out"
});

gsap.from(".last-name",{
    x:1200,
    duration:1.4,
    ease:"power4.out"
});

gsap.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".hero h2", {
    y: 100,
    opacity: 0,
    duration: 1.5
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.nav-link[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }

        });

    },
    {
        threshold: 0.4
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach(card => {

    gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

});


emailjs.init("T9Q30T5-_XWRDmiTY");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(
        "service_8r7z8a4",
        "template_5tkxuwh",
        {
            name:
            document.getElementById("name").value,

            email:
            document.getElementById("email").value,

            message:
            document.getElementById("message").value
        }
    )
    .then(() => {

        alert("Message sent successfully!");

        this.reset();

    })
    .catch((error) => {

        alert("Failed to send message.");

        console.error(error);

    });

});






