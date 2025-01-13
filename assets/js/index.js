var firstTopTextWrapper = document.querySelector(".first-slide .letters");
firstTopTextWrapper.innerHTML = firstTopTextWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

var firstBottomTextWrapper = document.querySelector(".second-slide .letters");
firstBottomTextWrapper.innerHTML = firstBottomTextWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);


var sameAnimationWrappers = document.querySelectorAll(
  ".same-animation .letters"
);
sameAnimationWrappers.forEach((wrapper) => {
  wrapper.innerHTML = wrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );
});

anime.timeline().add({
  targets: ".first-slide .letter",
  opacity: [0, 1],
  translateX: [40, 0.5],
  easing: "easeInOutBack",
  duration: 500,
  delay: (el, i) => 30 * i,
});

anime.timeline().add({
  targets: ".second-slide .letter",
  opacity: [0, 1],
  translateX: [-40, -0.5],
  easing: "easeInOutBack",
  duration: 500,
  delay: (el, i) => 30 * i,
});

sameAnimationWrappers.forEach((wrapper) => {
  anime.timeline().add({
    targets: wrapper.querySelectorAll(".letter"),
    opacity: [0, 1],
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i,
  });
});
