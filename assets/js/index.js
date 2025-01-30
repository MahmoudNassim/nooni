// // Wrap every letter in a span
// var textWrapper = document.querySelector(".text .letters");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='letter'>$&</span>"
// );

// anime
//   .timeline({ loop: true })
//   .add({
//     targets: ".text .letters",
//     rotateY: [-90, 0],
//     duration: 1500,
//     delay: (el, i) => 45 * i,
//   })

// document.addEventListener("DOMContentLoaded", function () {
//     const categoryItems = document.querySelector(".category-items");

//     function shiftItems() {
//         const items = categoryItems.children;
//         if (items.length > 1) {
//             // Move left
//             categoryItems.style.transition = "transform 0.5s ease-in-out";
//             categoryItems.style.transform = "translateX(-200px)"; // Adjust width accordingly

//             // After animation completes, move the first item to the end
//             setTimeout(() => {
//                 categoryItems.style.transition = "none"; // Disable transition for instant reset
//                 categoryItems.style.transform = "translateX(0)"; // Reset position
//                 categoryItems.appendChild(items[0]); // Move first item to the end
//             }, 500); // Match with transition duration
//         }
//     }

//     // Shift items every 3 seconds (3000 ms)
//     setInterval(shiftItems, 3000);
// });

// Category Section Swiper
let categorySwiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  let blogSwiper = new Swiper(".mySwiper-blog", {
    loop: true,
    slidesPerView: 1, // Show one blog post at a time
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 1, // On tablets, still 1 post
      },
      992: {
        slidesPerView: 2, // On desktops, show 2 blog posts
      },
    },
  });
});
