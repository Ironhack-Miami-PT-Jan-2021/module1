const randomColors = document.getElementsByClassName("random-colors");

// const randomColorsNode = document.querySelectorAll(".random-colors");

console.log(randomColors);
// console.log(randomColorsNode);

function randomColor() {
  //   const colorValue = Math.floor(
  //     Math.random() * 15 * 15 * 15 * 15 * 15 * 15
  //   ).toString(16);
  const colorValue = `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)})`;
  // 'rbg(0-255, 0-255, 0-255)';
  return colorValue;
}

function changeColors() {
  for (let i = 0; i < randomColors.length; i++) {
    randomColors[i].style.backgroundColor = randomColor();
  }
}

setInterval(changeColors, 1000);
