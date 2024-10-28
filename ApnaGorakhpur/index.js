var faBars = document.querySelector(".fa-bars");
var sidebar = document.querySelector(".sidebar-menu-wrapper");

faBars.addEventListener("click", function () {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
});
var sidebarItems = document.querySelectorAll(".sidebar");

sidebarItems.forEach(function (item) {
  item.addEventListener("click", function () {
    sidebar.style.display = "none";
  });
});


// ------------slideshow---------------
var swiper1 = new Swiper(".mySwiper1", {
  
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

});

var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },

});
var swiper3 = new Swiper(".mySwiper3", {
  
  slidesPerView: 1.4,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   dynamicBullets: true,
  // },

});

// Introduction section


// Function to update the inner HTML based on the screen size
function updateInnerHTML() {
  var introductionContainer = document.querySelector(".introduction-container");

  if (window.matchMedia("(min-width: 1001px)").matches) {
    // Greater than 1000px
    introductionContainer.innerHTML = `
    <img src="Introduction image.png" alt="">

    <div class="text-section">

     <h2 class="red" id="homepage-heading">Gorakhpur</h2>

     <p>A wonderful city in Uttar Pradesh, India! Led by the amazing Chief Minister Yogi Adityanath,
       Gorakhpur
       has changed a lot and become even more special.</p>

    </div>
      `;
  } else {
    // Less than or equal to 1000px (Use the original HTML)
    introductionContainer.innerHTML = `
      <div class="text-section">

       <h2 class="red" id="homepage-heading">Gorakhpur</h2>

       <p>A wonderful city in Uttar Pradesh, India! Led by the amazing Chief Minister Yogi Adityanath,
          Gorakhpur
          has changed a lot and become even more special.</p>

      </div>

      <img src="Introduction image.png" alt="">
      `;
  }
}

// Initial execution of the function when the page loads
window.addEventListener("load", updateInnerHTML);

// Add event listener to execute the function when the window is resized
window.addEventListener("resize", updateInnerHTML);







// change no of slides from 1.4 to 3.5 when display > 1000px

function updateSlidesPerView() {
  if (window.matchMedia("(min-width: 1001px)").matches) {
    swiper3.params.slidesPerView = 3.5;
  } else {
    swiper3.params.slidesPerView = 1.4;
  }
  swiper3.update(); // Update the swiper instance with new settings
}

// Initial call to set slidesPerView on page load
updateSlidesPerView();

// Listen for window resize event to update slidesPerView dynamically
window.addEventListener("resize", updateSlidesPerView);





// JS code to handle the counters
const counterUp = window.counterUp.default;

const handleCounter = (el) => {
	const callback = (entries) => {
		entries.forEach((entry) => {
			const el = entry.target;
			if (entry.isIntersecting && !el.classList.contains('is-visible')) {
				counterUp(el, {
					duration: 2000,
					delay: 16,
				});
				el.classList.add('is-visible');
			}
		});
	};

	const IO = new IntersectionObserver(callback, { threshold: 1 });
	IO.observe(el);
};

// Call handleCounter for each counter element
const counterElements = document.querySelectorAll('.counter');
counterElements.forEach((counterElement) => {
	handleCounter(counterElement);
});






// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//     let count = document.getElementById("counter");
//     count.innerHTML = ++upto;
//     if (upto === 1000) {
//         clearInterval(counts);
//     }
// }