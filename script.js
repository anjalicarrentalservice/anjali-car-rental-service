"use strict";

/*======================================
ANJALI CAR RENTAL SERVICE
MAIN SCRIPT
======================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("ANJALI CAR RENTAL SERVICE Loaded Successfully");

});

/*======================================
SECTION 1
HEADER
======================================*/

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
        "aria-expanded",
        (!isExpanded).toString()
    );

});

const navLinks = navbar.querySelectorAll("a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

window.addEventListener("scroll",()=>{

const header=document.getElementById("header");

if(window.scrollY>30){

header.style.background="#000";

}else{

header.style.background="rgba(5,5,5,.90)";

}

});

/*==================================================
SECTION 2 : HERO BANNER
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Hero Fade Animation
    // ==========================

    const heroContent = document.querySelector(".hero-content");
    const heroStats = document.querySelector(".hero-stats");

    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(50px)";
    }

    if (heroStats) {
        heroStats.style.opacity = "0";
        heroStats.style.transform = "translateY(50px)";
    }

    setTimeout(() => {

        if (heroContent) {
            heroContent.style.transition =
                "all .9s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }

    }, 200);

    setTimeout(() => {

        if (heroStats) {
            heroStats.style.transition =
                "all .9s ease";

            heroStats.style.opacity = "1";
            heroStats.style.transform = "translateY(0)";
        }

    }, 500);

    // ==========================
    // Statistics Card Hover
    // ==========================

    const statCards = document.querySelectorAll(".stat-card");

    statCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });

    // ==========================
    // Smooth Scroll
    // ==========================

    const scrollBtn = document.querySelector(".scroll-down");

    if (scrollBtn) {

        scrollBtn.addEventListener("click", (e) => {

            e.preventDefault();

            const target = document.querySelector("#about");

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

});

/*==================================================
SECTION 3 : ABOUT US
==================================================*/

(() => {

    const aboutSection = document.querySelector("#about");

    if (!aboutSection) return;

    const imageFrame = aboutSection.querySelector(".image-frame");
    const content = aboutSection.querySelector(".about-content");
    const featureItems = aboutSection.querySelectorAll(".feature-item");
    const experienceNumber = aboutSection.querySelector(".experience-box h3");

    // Initial State

    if (imageFrame) {
        imageFrame.style.opacity = "0";
        imageFrame.style.transform = "translateX(-60px)";
        imageFrame.style.transition = "all .8s ease";
    }

    if (content) {
        content.style.opacity = "0";
        content.style.transform = "translateX(60px)";
        content.style.transition = "all .8s ease";
    }

    featureItems.forEach((item) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all .45s ease";
    });

    let counterStarted = false;

    function animateCounter() {

        if (counterStarted || !experienceNumber) return;

        counterStarted = true;

        let value = 0;

        const timer = setInterval(() => {

            value++;

            experienceNumber.textContent = value + "+";

            if (value >= 5) {

                clearInterval(timer);

            }

        }, 180);

    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            if (imageFrame) {
                imageFrame.style.opacity = "1";
                imageFrame.style.transform = "translateX(0)";
            }

            if (content) {
                content.style.opacity = "1";
                content.style.transform = "translateX(0)";
            }

            featureItems.forEach((item, index) => {

                setTimeout(() => {

                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";

                }, index * 120);

            });

            animateCounter();

        });

    }, {

        threshold: 0.25

    });

    observer.observe(aboutSection);

})();

/*==================================================
SECTION 4 : WHY CHOOSE US
==================================================*/

(() => {

    const section = document.querySelector("#why-us");

    if (!section) return;

    const cards = section.querySelectorAll(".why-card");

    // Initial State

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition =
            "opacity .7s ease, transform .7s ease";

    });

    // Reveal Animation

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, index * 120);

            });

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.2
    });

    observer.observe(section);

    // Mouse Glow Effect

    cards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.background = `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(212,175,55,.18),
                    rgba(255,255,255,.04) 45%,
                    rgba(255,255,255,.02) 100%
                )
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background = `
                linear-gradient(
                    180deg,
                    rgba(255,255,255,.05),
                    rgba(255,255,255,.02)
                )
            `;

        });

    });

})();

/*==================================================
SECTION 5 : OUR SERVICES
==================================================*/

(() => {

    const servicesSection = document.querySelector("#services");

    if (!servicesSection) return;

    const cards = servicesSection.querySelectorAll(".service-card");

    // Initial State

    cards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition =
            "opacity .7s ease, transform .7s ease";

    });

    // Scroll Reveal

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, index * 120);

            });

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.2
    });

    observer.observe(servicesSection);

    // Hover Animation

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transition =
                "transform .3s ease, box-shadow .3s ease";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

})();

/*==================================================
SECTION 6 : FLEET
==================================================*/

(() => {

    const fleetSection = document.querySelector("#fleet");

    if (!fleetSection) return;

    const fleetCards = fleetSection.querySelectorAll(".fleet-card");

    // Initial State

    fleetCards.forEach((card) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(60px)";
        card.style.transition =
            "opacity .7s ease, transform .7s ease";

    });

    // Reveal on Scroll

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            fleetCards.forEach((card, index) => {

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, index * 120);

            });

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.2
    });

    observer.observe(fleetSection);

    // Tilt Effect

    fleetCards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 8;
            const rotateX = ((rect.height / 2 - y) / rect.height) * 8;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";
            card.style.transition = "transform .35s ease";

        });

    });

})();

/*==================================================
SECTION 7 : ADVANCED BOOKING SYSTEM
PART 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const tripType = document.getElementById("tripType");
    const packageBox = document.getElementById("packageBox");
    const journeyBox = document.getElementById("journeyBox");

    const packageSelect = document.getElementById("package");
    const journeyType = document.getElementById("journeyType");

    const returnDateBox = document.getElementById("returnDateBox");
    const returnTimeBox = document.getElementById("returnTimeBox");

    const returnDate = document.getElementById("returnDate");
    const returnTime = document.getElementById("returnTime");

    const passengers = document.getElementById("passengers");
    const vehicle = document.getElementById("vehicle");

    /*=========================================
    Trip Type Logic
    =========================================*/

    function updateTripType() {

        packageBox.style.display = "none";
        journeyBox.style.display = "none";

        returnDateBox.style.display = "none";
        returnTimeBox.style.display = "none";

        packageSelect.required = false;
        journeyType.required = false;
        returnDate.required = false;
        returnTime.required = false;

        if (tripType.value === "hourly") {

            packageBox.style.display = "block";
            packageSelect.required = true;

        }

        if (
            tripType.value === "local" ||
            tripType.value === "outstation"
        ) {

            journeyBox.style.display = "block";
            journeyType.required = true;

            updateJourneyType();

        }

    }

    /*=========================================
    Journey Type Logic
    =========================================*/

    function updateJourneyType() {

        if (journeyType.value === "Round Trip") {

            returnDateBox.style.display = "block";
            returnTimeBox.style.display = "block";

            returnDate.required = true;
            returnTime.required = true;

        } else {

            returnDateBox.style.display = "none";
            returnTimeBox.style.display = "none";

            returnDate.required = false;
            returnTime.required = false;

        }

    }

    tripType.addEventListener("change", updateTripType);

    journeyType.addEventListener("change", updateJourneyType);

    updateTripType();
    /*=========================================
    Passenger → Vehicle Suggestion
    =========================================*/

    function suggestVehicle() {

        const count = parseInt(passengers.value) || 1;

        if (count >= 1 && count <= 4) {

            vehicle.value = "Swift Dzire";

        } else if (count >= 5 && count <= 6) {

            vehicle.value = "Maruti Ertiga";

        } else if (count === 7) {

            vehicle.value = "Toyota Innova";

        } else if (count >= 8 && count <= 13) {

            vehicle.value = "Tempo Traveller (13 Seater)";

        } else if (count >= 14 && count <= 17) {

            vehicle.value = "Tempo Traveller (17 Seater)";

        } else if (count >= 18 && count <= 26) {

            vehicle.value = "Tempo Traveller (26 Seater)";

        } else {

            vehicle.value = "Bus (35 / 40 Seater)";

        }

    }

    passengers.addEventListener("input", suggestVehicle);

    suggestVehicle();


    /*=========================================
    Booking Form Submit
    =========================================*/

    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function(e){

        e.preventDefault();

        const mobile =
            document.getElementById("customerMobile").value.trim();

        if(!/^[6-9]\d{9}$/.test(mobile)){

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }

        const packageValue =
            packageSelect.value || "-";

        const journeyValue =
            journeyBox.style.display === "none"
            ? "-"
            : journeyType.value;

        const returnDateValue =
            returnDate.value || "-";

        const returnTimeValue =
            returnTime.value || "-";

        const message = `🚖 *NEW BOOKING REQUEST*

👤 Name: ${document.getElementById("customerName").value}

📞 Mobile: ${mobile}

🚘 Trip Type: ${tripType.options[tripType.selectedIndex].text}

📦 Package: ${packageValue}

🔁 Journey: ${journeyValue}

📍 Pickup: ${document.getElementById("pickup").value}

📍 Drop: ${document.getElementById("drop").value}

📅 Pickup Date: ${document.getElementById("pickupDate").value}

🕒 Pickup Time: ${document.getElementById("pickupTime").value}

📅 Return Date: ${returnDateValue}

🕒 Return Time: ${returnTimeValue}

👥 Passengers: ${passengers.value}

🚐 Vehicle: ${vehicle.value}

📝 Special Request:
${document.getElementById("specialRequest").value || "-"}

Sent from:
ANJALI CAR RENTAL SERVICE Website`;

        const whatsappNumber = "917980348089";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

});

/*==================================================
SECTION 8 : GALLERY
==================================================*/

(() => {

    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");

    if (!galleryItems.length || !lightbox) return;

    // Open Lightbox
    galleryItems.forEach((img) => {

        img.addEventListener("click", () => {

            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;

            lightbox.style.display = "flex";
            document.body.style.overflow = "hidden";

        });

    });

    // Close Button
    lightboxClose.addEventListener("click", closeLightbox);

    // Click Outside Image
    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            closeLightbox();

        }

    });

    // ESC Key Support
    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape" && lightbox.style.display === "flex") {

            closeLightbox();

        }

    });

    function closeLightbox() {

        lightbox.style.display = "none";
        lightboxImage.src = "";
        document.body.style.overflow = "";

    }

})();

/*==================================================
SECTION 9 : GOOGLE REVIEWS
==================================================*/

(() => {

    const reviewSection = document.querySelector("#reviews");

    if (!reviewSection) return;

    reviewSection.style.opacity = "0";
    reviewSection.style.transform = "translateY(60px)";
    reviewSection.style.transition =
        "opacity .8s ease, transform .8s ease";

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            reviewSection.style.opacity = "1";
            reviewSection.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        });

    }, {

        threshold:0.20

    });

    observer.observe(reviewSection);

})();

/*==================================================
SECTION 10 : CONTACT FORM
==================================================*/

(() => {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("contactName").value.trim();

        const mobile = document.getElementById("contactMobile").value.trim();

        const email = document.getElementById("contactEmail").value.trim();

        const message = document.getElementById("contactMessage").value.trim();

        /*=========================
        MOBILE VALIDATION
        =========================*/

        if (!/^[6-9]\d{9}$/.test(mobile)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }

        /*=========================
        WHATSAPP MESSAGE
        =========================*/

        const whatsappMessage = `📩 *NEW CONTACT ENQUIRY*

👤 Name: ${name}

📞 Mobile: ${mobile}

📧 Email: ${email || "-"}

💬 Message:
${message}

--------------------------
ANJALI CAR RENTAL SERVICE
Website Contact Form`;

        const whatsappNumber = "917980348089";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );

        /*=========================
        RESET FORM
        =========================*/

        contactForm.reset();

        alert("Thank you! Your message has been prepared in WhatsApp.");

    });

})();

/*==================================================
SECTION 12 : FLOATING ACTION BUTTONS
==================================================*/

(() => {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    /*=========================
    SHOW / HIDE BUTTON
    =========================*/

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    /*=========================
    SMOOTH SCROLL
    =========================*/

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

})();

/*==================================================
SECTION 13 : MOBILE BOTTOM BAR
==================================================*/

(() => {

    const bookButton = document.querySelector(
        '.mobile-bottom-bar a[href="#booking"]'
    );

    if (bookButton) {

        bookButton.addEventListener("click", function (e) {

            e.preventDefault();

            const bookingSection =
                document.getElementById("booking");

            if (bookingSection) {

                bookingSection.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    }

    /*=========================
    ACTIVE MENU EFFECT
    =========================*/

    const mobileLinks =
        document.querySelectorAll(".mobile-bottom-bar a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileLinks.forEach((item) => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });

})();
