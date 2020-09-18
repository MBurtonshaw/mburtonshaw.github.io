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
    $("#img_container").append(an_image);
    an_image.id = i;
    an_image.src = "img/gallery_thumbnail_" + parseInt(an_image.id) + ".png";
    an_image.classList.add("gallery_pics");
    an_image.classList.add("thumbnail_pics");
}

$(".gallery_pics").click(e => {
    $("#img_container_2").html(
        "<img id='been_clicked' class='clickable_large' src=''>"
    );
    $("#been_clicked").attr(
        "src",
        "img/gallery_" + e.currentTarget.id + ".png"
    );
    $("h1").hide();
    $("#img_container").hide();
    $("#img_container_2").show();
});
$("#img_container_2").click(e => {
    $("#img_container_2").hide();
    $("#img_container_2").html(
        "<img id='been_clicked' class='clickable_large' src=''>"
    );
    $("h1").show();
    $("#img_container").show();
});
