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

let swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    993: {
      slidesPerView: 4,
    },
  },
});
