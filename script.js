/* =========================================
   TANMOY MANDI PORTFOLIO
   JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       1. SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".intro-box, .skill, .skill-badge, .channel-card, " +
        ".channel-description, .video-card, .voice-card, " +
        ".service-card, .education-card, .goal-card, .tool"
    );

    revealElements.forEach(function (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });


    /* =========================================
       2. SKILL BAR ANIMATION
    ========================================= */

    const skillProgress = document.querySelectorAll(".skill-progress");

    skillProgress.forEach(function (bar) {

        const originalWidth = bar.style.width;

        bar.style.width = "0%";
        bar.style.transition = "width 1.5s ease";

        const skillObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        setTimeout(function () {
                            bar.style.width = originalWidth;
                        }, 200);

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        skillObserver.observe(bar);
    });


    /* =========================================
       3. VOICE OVER PLAY BUTTON
    ========================================= */

    const voiceButtons = document.querySelectorAll(".voice-play");

    voiceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const icon = button.querySelector("i");

            const currentlyPlaying =
                button.classList.contains("playing");

            /* Stop all other buttons */
            voiceButtons.forEach(function (otherButton) {

                otherButton.classList.remove("playing");

                const otherIcon =
                    otherButton.querySelector("i");

                if (otherIcon) {
                    otherIcon.classList.remove("fa-pause");
                    otherIcon.classList.add("fa-play");
                }

            });

            /* Toggle current button */

            if (!currentlyPlaying) {

                button.classList.add("playing");

                icon.classList.remove("fa-play");
                icon.classList.add("fa-pause");

            }

        });

    });


    /* =========================================
       4. VIDEO CARD CLICK EFFECT
    ========================================= */

    const videoCards = document.querySelectorAll(".video-card");

    videoCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            const link = card.getAttribute("href");

            /* If link is still #, don't open anything */
            if (link === "#" || !link) {
                event.preventDefault();

                alert(
                    "Video link will be added here soon."
                );
            }

        });

    });


    /* =========================================
       5. YOUTUBE BUTTON
    ========================================= */

    const youtubeButton =
        document.querySelector(".youtube-button");

    if (youtubeButton) {

        youtubeButton.addEventListener("click", function (event) {

            const link =
                youtubeButton.getAttribute("href");

            if (link === "#" || !link) {

                event.preventDefault();

                alert(
                    "Your YouTube channel link will be added here."
                );

            }

        });

    }


    /* =========================================
       6. FOOTER SOCIAL LINKS
    ========================================= */

    const socialLinks =
        document.querySelectorAll(".footer-social a");

    socialLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const href = link.getAttribute("href");

            if (href === "#" || !href) {

                event.preventDefault();

                alert(
                    "Social media link will be added here."
                );

            }

        });

    });


    /* =========================================
       7. HEADER PARALLAX EFFECT
    ========================================= */

    const hero = document.querySelector(".hero");

    if (hero) {

        window.addEventListener("scroll", function () {

            const scrollPosition = window.scrollY;

            if (scrollPosition < 700) {

                const decorationOne =
                    document.querySelector(".decoration-one");

                const decorationTwo =
                    document.querySelector(".decoration-two");

                if (decorationOne) {
                    decorationOne.style.transform =
                        "translateY(" +
                        scrollPosition * 0.15 +
                        "px)";
                }

                if (decorationTwo) {
                    decorationTwo.style.transform =
                        "translateY(" +
                        scrollPosition * -0.10 +
                        "px)";
                }

            }

        });

    }


    /* =========================================
       8. CURRENT YEAR
    ========================================= */

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.innerHTML =
            "© " +
            currentYear +
            " Tanmoy Mandi • All Rights Reserved";

    }


    /* =========================================
       9. PAGE LOADING EFFECT
    ========================================= */

    document.body.classList.add("page-loaded");


    /* =========================================
       10. CONSOLE MESSAGE
    ========================================= */

    console.log(
        "Tanmoy Mandi Portfolio loaded successfully."
    );

});
