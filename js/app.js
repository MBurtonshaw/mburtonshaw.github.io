const gallery_pictures = [
    "img/gallery_1.png",
    "img/gallery_2.png",
    "img/gallery_3.png",
    "img/gallery_4.png",
    "img/gallery_5.png",
    "img/gallery_6.png",
    "img/gallery_7.png",
    "img/gallery_8.png",
    "img/gallery_9.png",
    "img/gallery_10.png",
    "img/gallery_11.png",
    "img/gallery_12.png",
    "img/gallery_13.png",
    "img/gallery_14.png",
    "img/gallery_15.png"
];

$("#gallery_container").append("<div id='img_container'></div>");

for (let i = 1; i <= gallery_pictures.length; i++) {
    const an_image = document.createElement("img");
    const a_link = document.createElement("a");
    $("#img_container").append(a_link);
    a_link.append(an_image);
    a_link.id = "gallery_" + i;
    a_link.href = "img/gallery_" + i + ".png";
    an_image.src = "img/gallery_thumbnail_" + i + ".png";
    an_image.classList.add("gallery_pics");
}
