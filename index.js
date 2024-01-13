document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainer = document.querySelector(".environment-slideshow-container");
    const slides = document.querySelectorAll(".main-slide, .left-1, .left-2, .right-1, .right-2");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");
  
    let currentIndex = 2; // Index of the main slide
  
    // Function to update the slide styles based on the currentIndex
    function updateSlides() {
      slides.forEach((slide, index) => {
        const distance = Math.abs(currentIndex - index);
        const scale = 1 - distance * 0.2;
        const zIndex = 3 - distance;
  
        if (index === currentIndex) {
          // Center the main slide
          slide.style.transform = `translateX(0%) scale(${scale})`;
          slide.style.zIndex = zIndex;
  
          // Set opacity of the associated slide-color to 0 for the main slide
          const slideColor = slide.querySelector(".slide-color");
          if (slideColor) {
            slideColor.style.opacity = 0;
          }
        } else {
          // Position other slides around the main slide
          const direction = index < currentIndex ? -1 : 1;
          const offset = 10 * direction * (distance - 1);
          slide.style.transform = `translateX(${offset}%) scale(${scale})`;
          slide.style.zIndex = zIndex;
  
          // Set opacity of slide-color to 0 for non-main slides
          const slideColor = slide.querySelector(".slide-color");
          if (slideColor) {
            slideColor.style.opacity = 0;
          }
        }
      });
    }
  
    // Function to handle the next button click
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    }
  
    // Function to handle the previous button click
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    }
  
    // Add click event listeners to the next and previous buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    // Initial update to center the main slide
    updateSlides();
  });




  // Check if the HTML tag contains dir=ltr
  const htmlTag = document.documentElement;

  if (htmlTag.getAttribute('dir') === 'ltr') {
    // Change direction and font for LTR
    document.body.style.direction = 'ltr';
    document.body.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    document.getElementById('title-responsive-size').style.fontSize = '30px' ;
    document.getElementById('responsive-heding-size').style.fontSize = '40px' ;
  } else {
    // Change direction and font for RTL (default styles are applied here)
    // You can customize RTL styles if needed
  }  