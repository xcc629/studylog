let images = [];

for (let i = 0; i < 50; i++) {
  images[i] = `${i}.JPEG`;
}

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/assets/img/${chosenImage}`;
bgImage.id = "backGround";

document.body.appendChild(bgImage);
