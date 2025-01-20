// Wrap every letter in a span
var textWrapper = document.querySelector(".text .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".text .letters",
    rotateY: [-90, 0],
    duration: 1500,
    delay: (el, i) => 45 * i,
  })

