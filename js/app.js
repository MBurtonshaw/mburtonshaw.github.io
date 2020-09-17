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

function main() {
    for (let i = 1; i <= gallery_pictures.length; i++) {
        const an_image = document.createElement("img");
        $("#img_container").append(an_image);
        an_image.id = i;
        an_image.src = "img/gallery_thumbnail_" + i + ".png";
        an_image.classList.add("gallery_pics");
        $(".gallery_pics").click(e => {
            if (i === parseInt(e.currentTarget.id)) {
                e.currentTarget.src = "img/gallery_" + i + ".png";
                e.currentTarget.classList.remove("gallery_pics");
                e.currentTarget.classList.add("clickable_large");
                //$("h1").hide();
                //$("#img_container").hide();
                $("body").append(e.currentTarget);
            }
            $(".clickable_large").click(() => {
                e.currentTarget.remove();
                $("#img_container").append(e.currentTarget);
                e.currentTarget.src =
                    "img/gallery_thumbnail_" + e.currentTarget.id + ".png";
                e.currentTarget.classList.remove("clickable_large");
                e.currentTarget.classList.add("gallery_pics");
                //$("h1").show();
                //$("#img_container").show();
            });
            $(".gallery_pics").click(() => {
                e.currentTarget.remove();
                $("#img_container").append(e.currentTarget);
                e.currentTarget.src =
                    "img/gallery_thumbnail_" + e.currentTarget.id + ".png";
                e.currentTarget.classList.remove("clickable_large");
                e.currentTarget.classList.add("gallery_pics");
            });
        });
    }
}

main();
