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

//LOOP TO POPULATE PAGE W PHOTOS//
$("#gallery_container").append("<div id='img_container'></div>");
for (let i = 1; i <= gallery_pictures.length; i++) {
    const an_image = document.createElement("img");
    $("#img_container").append(an_image);
    an_image.id = i;
    an_image.src = "img/gallery_thumbnail_" + parseInt(an_image.id) + ".png";
    an_image.classList.add("gallery_pics");
    if (window.innerWidth > 700) {
    an_image.classList.add("thumbnail_pics");
    }
}
//FUNCTION THAT ENLARGES PHOTOS WHEN CLICKED//
$(".gallery_pics").click(e => {
    $("#img_container_2").html(
        "<div id='x_div'><img id='xxx' src='img/mobile_x.png'></div>" + 
        "<img id='been_clicked' class='clickable_large' src=''>"
    );
    $("#been_clicked").attr(
        "src",
        "img/gallery_" + e.currentTarget.id + ".png"
    );
    $("#img_container").hide();
    $("#seven").hide();
    $("#img_container_2").show();
});
//FUNCTION THAT HIDES ENLARGED IMAGE WHEN CLICKED//
$("#img_container_2").click(e => {
    $("#img_container_2").hide();
    $("#img_container").show();
    $("#seven").show();
    $("#img_container_2").html("<img id='been_clicked' class='clickable_large' src=''>");
});

$("#1").addClass("big_pics");
$("#2").addClass("thin_pics");
$("#3").addClass("big_pics");
$("#4").addClass("thin_pics");
$("#5").addClass("big_pics");
$("#6").addClass("big_pics");
$("#7").addClass("big_pics");
$("#8").addClass("big_pics");
$("#9").addClass("thin_pics");
$("#10").addClass("big_pics");
$("#11").addClass("thin_pics");
$("#12").addClass("thin_pics");
$("#13").addClass("big_pics");
$("#14").addClass("thin_pics");
$("#15").addClass("big_pics");

if (window.innerWidth < 1200) {
    $("#2").addClass("big_pics");
    $("#2").removeClass("thin_pics");
    $("#2").attr("src", "img/gallery_thumbnail_wide_2.png");
    
    $("#4").addClass("big_pics");
    $("#4").removeClass("thin_pics");
    $("#4").attr("src", "img/gallery_thumbnail_wide_4.png");
    
    $("#9").addClass("big_pics");
    $("#9").removeClass("thin_pics");
    $("#9").attr("src", "img/gallery_thumbnail_wide_9.png");
    
    $("#11").addClass("big_pics");
    $("#11").removeClass("thin_pics");
    $("#11").attr("src", "img/gallery_thumbnail_wide_11.png");
    
    $("#12").addClass("big_pics");
    $("#12").removeClass("thin_pics");
    $("#12").attr("src", "img/gallery_thumbnail_wide_12.png");
    
    $("#14").addClass("big_pics");
    $("#14").removeClass("thin_pics");
    $("#14").attr("src", "img/gallery_thumbnail_wide_14.png");
}
function mobile() {
    $("#one_menu_div").html(
        "<a id='one_menu_a'><img src='img/mobile_menu_icon.png' id='one_menu_img'></a>"
    );
    $("#one_menu_div").on("click", () => {
        $("#container").addClass("clicker");
        $("#container").html(
            "<div id='divvest'>" +
                "<h2 class='mobile_menu' id='mobile_menu'><a target='_blank' href='menu.html'>" +
                "MENU" +
                "</a></h2>" +
                "<h2 class='mobile_menu' id='mobile_about'><a target='_blank' href='contact.html'>" +
                "ABOUT" +
                "</a></h2>" +
                "<h2 class='mobile_menu' id='mobile_gallery'><a target='_blank' href='gallery.html'>" +
                "GALLERY" +
                "</a></h2>" +
                "<h2 class='mobile_menu' id='mobile_contact'><a target='_blank' href='contact.html'>" +
                "CONTACT" +
                "</a></h2>" +
                "</div>" +
                "<div id='closer_div'>" +
                "<img id='closer' src='img/mobile_x.png'>" +
                "</div>"
        );
        $("#container").css("background-color", "rgb(173, 129, 86");
        $("body").css("background-color", "rgb(173, 129, 86)");

        $("#closer_div").on("click", () => {
            location.reload();
        });
    });
}

if (window.innerWidth < 1200) {
    mobile();
}