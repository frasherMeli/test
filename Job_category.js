      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        const backgroundImage = document.querySelector("h2");

        // Get the height of the background image section
        const backgroundHeight = backgroundImage.offsetHeight;

        // Toggle 'hidden' class based on scroll position
        if (window.scrollY > backgroundHeight) {
          navbar.classList.add("hidden");
        } else {
          navbar.classList.remove("hidden");
        }
      });