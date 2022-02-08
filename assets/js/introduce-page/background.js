function clearbackGroundHandler() {
  const bgImage = document.getElementById("backGround");
  const bgImages = document.getElementsByTagName("img");
  const num = bgImages.length;
  if (num > 3) {
    bgImage.remove();
  }
}

function backGrounHandler() {
  let images = [];

  for (let i = 0; i < 50; i++) {
    images[i] = `${i}.JPEG`;
  }

  const chosenImage = images[Math.floor(Math.random() * images.length)];

  const bgImage = document.createElement("img");

  bgImage.src = `/assets/img/${chosenImage}`;
  bgImage.id = `backGround`;

  document.body.appendChild(bgImage);
}

backGrounHandler();
setInterval(backGrounHandler, 4500);
setInterval(clearbackGroundHandler, 4800);
