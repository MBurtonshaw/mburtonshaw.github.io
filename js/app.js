const thyme_pictures = [
    "img/thyme_1.png",
    "img/thyme_2.png",
    "img/thyme_3.png",
    "img/thyme_4.png",
    "img/thyme_5.png",
    "img/thyme_6.png",
    "img/thyme_7.png",
    "img/thyme_8.png",
    "img/thyme_9.png",
    "img/thyme_10.png",
    "img/thyme_11.png",
    "img/thyme_12.png",
    "img/thyme_13.png",
];

const mahalls_pictures = [
    "img/mahalls_1.png",
    "img/mahalls_2.png",
    "img/mahalls_3.png",
    "img/mahalls_4.png",
    "img/mahalls_5.png",
    "img/mahalls_6.png",
    "img/mahalls_7.png",
    "img/mahalls_8.png",
    "img/mahalls_9.png",
    "img/mahalls_10.png",
    "img/mahalls_11.png",
    "img/mahalls_12.png",
    "img/mahalls_13.png",
    "img/mahalls_14.png",
    "img/mahalls_15.png",
    "img/mahalls_16.png",
    "img/mahalls_17.png",
    "img/mahalls_18.png",
    "img/mahalls_19.png",
    ];

for (let i = 0; i < thyme_pictures.length; i++) {
    if (thyme_pictures) {
        
        }
}

$("#gallery_container").append("<div id='img_container_1'></div>");

for (let i = 1; i <= thyme_pictures.length; i++) {
    const an_image = document.createElement("img");
    const a_link = document.createElement("a");
    $("#img_container_1").append(a_link);
    a_link.append(an_image);
    a_link.id = "thyme_" + i;
    a_link.href = "img/thyme_" + i + ".png";
    an_image.src = "img/thyme_" + i + ".png";
    an_image.classList.add("gallery_pics");
    an_image.classList.add("thyme_pics");
}

$("#gallery_container").append("<div id='img_container_2'></div>");

for (let i = 1; i <= mahalls_pictures.length; i++) {
    const an_image = document.createElement("img");
    const a_link = document.createElement("a");
    $("#img_container_2").append(a_link);
    a_link.append(an_image);
    a_link.id = "mahalls_" + i;
    a_link.href = "img/mahalls_" + i + ".png";
    an_image.src = "img/mahalls_" + i + ".png";
    an_image.classList.add("gallery_pics");
    an_image.classList.add("mahalls_pics");
}
