function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function search() {
    var searchInput = document.getElementById("search-input");
    var searchValue = searchInput.value.toLowerCase();

    var pages = ["monaco", "aquarium", "venelle", "begur"];

    if (searchValue == "accueil") {
        window.location.href = "index.html";
    } else if (searchValue == "la ciotat") {
        window.location.href = "html/laCiotat.html";
    } else if (pages.includes(searchValue)) {
        window.location.href = "html/" + searchValue + ".html";
    } else {
        alert("La page que vous recherchez n'existe pas.");
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
        "img/LaCiotat/IMG_1308.webp",
        "img/LaCiotat/IMG_1319.webp",
        "img/LaCiotat/IMG_1328.webp",
        "img/LaCiotat/IMG_1331.webp",
        "img/LaCiotat/IMG_1332.webp",
        "img/LaCiotat/IMG_1335.webp",
        "img/LaCiotat/IMG_1342.webp",
        "img/LaCiotat/IMG_1343.webp",
        "img/LaCiotat/IMG_1348.webp",
        "img/LaCiotat/IMG_1351.webp",
        "img/LaCiotat/IMG_1370.webp",
        "img/LaCiotat/IMG_1379.webp",
        "img/LaCiotat/IMG_1380.webp",
        "img/LaCiotat/IMG_1385.webp",
        "img/LaCiotat/IMG_1393.webp",
        "img/LaCiotat/IMG_1395.webp",
        "img/LaCiotat/IMG_1398.webp",
        "img/LaCiotat/IMG_1405.webp",
        "img/LaCiotat/IMG_1412.webp",
        "img/LaCiotat/IMG_1420.webp",
        "img/Monaco/IMG_0701.webp",
        "img/Monaco/IMG_0895.webp",
        "img/Monaco/IMG_3497.webp",
        "img/Monaco/IMG_3499.webp",
        "img/Monaco/IMG_3501.webp",
        "img/Monaco/IMG_3502.webp",
        "img/Monaco/IMG_3506.webp",
        "img/Monaco/IMG_3555.webp",
        "img/Monaco/IMG_3557.webp",
        "img/Monaco/IMG_3620.webp",
        "img/Monaco/IMG_3625.webp",
        "img/Monaco/IMG_3631.webp",
        "img/Monaco/IMG_3641.webp",
        "img/Monaco/IMG_3643.webp",
        "img/Monaco/IMG_3657.webp",
    ];

    // Sélectionner 9 images aléatoirement
    const randomImages = [];
    while (randomImages.length < 12) {
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