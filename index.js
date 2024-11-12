  document.addEventListener("DOMContentLoaded", function () {
    // Existing Code
    const navbar = document.querySelector(".navbar");
    const backgroundImage = document.querySelector(".background-image");
    const categoryLists = document.getElementsByClassName("categoryList");
    const toggleButton = document.getElementById("toggleButton");
    let isExpanded = false;

    // Function to handle navbar visibility on scroll
    function handleNavbarScroll() {
      if (window.scrollY > backgroundImage.offsetHeight) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }
    }

    // Function to update the visibility of category items based on screen size
    function updateCategoryList() {
      const isMobile = window.innerWidth < 576; // Bootstrap's breakpoint for phone size
      let itemCount = 0; // Track the total items shown
      let hasMoreThanTenItems = false; // Flag to check if there's more than 10 items

      Array.from(categoryLists).forEach((categoryList) => {
        Array.from(categoryList.children).forEach((li) => {
          if (isMobile && itemCount >= 10 && !isExpanded) {
            li.style.display = "none"; // Hide items beyond the 10th item total across lists on mobile
            hasMoreThanTenItems = true; // Set flag if there are more items to hide
          } else {
            li.style.display = "list-item"; // Show items when not limited by mobile view or when expanded
            itemCount++; // Count the displayed item
          }
        });
      });

      // Show the toggle button on mobile if there are more than 10 items
      toggleButton.style.display = isMobile && hasMoreThanTenItems ? "block" : "none";
      
      // Update button text based on expanded state
      toggleButton.textContent = isExpanded ? "Show Less" : "Show More";
    }

    // Event listener for "Show More"/"Show Less" button
    toggleButton.addEventListener("click", function () {
      isExpanded = !isExpanded; // Toggle expanded state
      updateCategoryList(); // Refresh list visibility and button text
    });

    // Set up event listeners
    window.addEventListener("scroll", handleNavbarScroll); // Navbar scroll effect
    window.addEventListener("resize", updateCategoryList); // Update list on resize

    // Initial setup
    handleNavbarScroll();
    updateCategoryList();

    // New Code for Cycling Testimonials
    const testimonials = document.querySelectorAll(".testimonial-slide");
    let currentIndex = 0;
    const displayCount = 3;

    function showTestimonials() {
      // Hide all testimonials
      testimonials.forEach((testimonial) => testimonial.classList.add("d-none"));

      // Show the next set of testimonials
      for (let i = 0; i < displayCount; i++) {
        const index = (currentIndex + i) % testimonials.length;
        testimonials[index].classList.remove("d-none");
      }

      // Update index for the next set
      currentIndex = (currentIndex + 1) % testimonials.length;
    }

    // Show initial testimonials
    showTestimonials();

    // Set interval for cycling through testimonials
    setInterval(showTestimonials, 5000); // Change every 5 seconds
  });