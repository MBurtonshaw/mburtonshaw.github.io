function myFn() {
    if (clock >= 6 && clock <= 10) {
        $("#three_img").attr("src", "");
        $("#three_img").attr("src", "img/GalleryImage_1.jpg");
    }
}
function myFn2() {
    if (clock >= 11 && clock <= 15) {
        $("#three_img").attr("src", "");
        $("#three_img").attr("src", "img/MenuImage_1.jpg");
    }
}
function myFn3() {
    if (clock >= 1 && clock <= 5) {
        if (window.innerWidth < 1050) {
            $("#three_img").attr("src", "");
            $("#three_img").attr("src", "img/HeaderImage_2.jpg");
        } else {
            $("#three_img").attr("src", "");
            $("#three_img").attr("src", "img/HeaderImage_1.jpg");
        }
    }
}
let clock = 0;
console.log(window.innerWidth);
function timer() {
    clock += 1;
    if (clock === 15) {
        clock = -1;
        clock += 1;
    }
}

setInterval(timer, 1000);

setInterval(myFn, 1000);
setInterval(myFn2, 1000);
setInterval(myFn3, 1000);

for (let i = 0; i < 1; i++) {
    if (clock === 15) {
        clearInterval(myFn);
        clearInterval(myFn2);
        clearInterval(myFn3);
    }
    setInterval(myFn, 5000);
    setInterval(myFn2, 5000);
    setInterval(myFn3, 5000);
}

function desktop() {
    $("#change_css").attr("href", "");
    $("#change_css").attr("href", "css/style.css");
}

function mobile() {
    $("#change_css").attr("href", "");
    $("#change_css").attr("href", "css/mobile.css");
    $("#one_menu_div").html(
        "<a id='one_menu_a'><img src='img/mobile_menu_icon.png' id='one_menu_img'></a>"
    );
    $("#four").html(
        "<h1 id='four_h1'>" +
            "Lorem ipsum sit dolor" +
            "</h1>" +
            "<div id='four_text_box_div'>" +
            "<p id='four_text'>" +
            "A cocktail lounge with focus on hospitality and craft located next to Lincoln Park in the historic Tremont neighborhood of Cleveland." +
            "</p>" +
            "<div id='four_time_div'>" +
            "<p id='four_weekdays'>" +
            "Wed - Sat" +
            "</p>" +
            "<p id='four_weekdays_time'>" +
            "4pm - 10pm" +
            "</p>" +
            "<p id='four_weekends'>" +
            "Sat &amp; Sun" +
            "</p>" +
            "<p id='four_weekends_time'>" +
            "10am - 2pm" +
            "</p>" +
            "</div>" +
            "</div>"
    );
    $("#seven").html(
        "<div id='seven_socials_div''>" +
            "<a target='_blank' href='https://facebook.com/cloakanddaggercle'>" +
            "<img id='seven_facebook' src='img/CD_Facebook.png' />" +
            "</a>" +
            "<a target='_blank' href='https://instagram.com/cloakanddaggercle'>" +
            "<img id='seven_instagram' src='img/CD_Instagram.png' />" +
            "</a>" +
            "</div>" +
            "<div id='newsletter_div'>" +
            "<div id='newsletter_div_2'>" +
            "<p id='seven_text'>" +
            "Sign up for our newsletter" +
            "</p>" +
            "<div class='klaviyo-form-RBSHP6'></div>" +
            "</div>" +
            "</div>" +
            "</div>"
    );
}

if (window.innerWidth > 1201) {
    desktop();
}
if (window.innerWidth < 1200) {
    mobile();
}

$("#one_menu_div").on("click", () => {
    $("#container").addClass("clicker");
    $("#container").html(
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
            "<div id='closer_div'>" +
            "<h2 id='closer'>" +
            " X " +
            "</h2>" +
            "</div>"
    );
    $("#container").css("background-color", "rgb(173, 129, 86");
    $("body").css("background-color", "rgb(173, 129, 86)");
});
