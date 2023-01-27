function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function choisirPhotosAleatoires() {
    const images = [
        "img/Aquarium/IMG_3615.webp",
        "img/Aquarium/IMG_3616.webp",
        "img/Aquarium/IMG_3617.webp",
        "img/Aquarium/IMG_3618.webp",
        "img/Aquarium/IMG_3622.webp",
        "img/Aquarium/IMG_3623.webp",
        "img/Aquarium/IMG_3624.webp",
        "img/Aquarium/IMG_3628.webp",
        "img/Aquarium/IMG_3629.webp",
        "img/Aquarium/IMG_3637.webp",
        "img/Aquarium/IMG_3638.webp",
        "img/Aquarium/IMG_3640.webp",
        "img/Aquarium/IMG_3642.webp",
        "img/Aquarium/IMG_3645.webp",
        "img/Aquarium/IMG_3648.webp",
        "img/Begur/IMG_0518.webp",
        "img/Begur/IMG_0519.webp",
        "img/Begur/IMG_0527.webp",
        "img/Begur/IMG_0528.webp",
        "img/Begur/IMG_0529.webp",
        "img/Begur/IMG_0533.webp",
        "img/Begur/IMG_0548.webp",
        "img/Begur/IMG_0551.webp",
        "img/Begur/IMG_0555.webp",
        "img/Begur/IMG_0560.webp",
        "img/Begur/IMG_0563.webp",
        "img/Begur/IMG_3357.webp",
        "img/Begur/IMG_3360.webp",
        "img/Begur/IMG_3383.webp",
        "img/Begur/IMG_3384.webp",


    ];

    // Sélectionner 9 images aléatoirement
    const randomImages = [];
    while (randomImages.length < 9) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!randomImages.includes(images[randomIndex])) {
            randomImages.push(images[randomIndex]);
        }
    }

    const section = document.getElementById("imagesAleatoires");
    randomImages.forEach(image => {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.innerHTML = `<img style="width: 400px;" src="${image}" alt="photo">`;
        section.appendChild(div);
    });
}