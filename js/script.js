function myFn() {
    if (clock >= 6 && clock <= 11) {
        $("#three_img").attr("src", "img/slideshow_2.png");
    }
}

function myFn2() {
    if (clock >= 12 && clock <= 17) {
        $("#three_img").attr("src", "img/slideshow_1.png");
    }
}

function myFn4() {
    if (clock >= 18 && clock <= 23) {
        $("#three_img").attr("src", "img/slideshow_3.png");
    }
}

function myFn5() {
    if (clock >= 24 && clock <= 29) {
        $("#three_img").attr("src", "img/slideshow_4.png");
    }
}

function myFn3() {
    if (clock >= 0 && clock <= 5) {
        $("#three_img").attr("src", "img/slideshow_5.png");
    }
}

let clock = 0;
console.log(window.innerWidth);
function timer() {
    clock += 1;
    if (clock === 30) {
        clock = -1;
        clock += 1;
    }
    console.log(clock);
}

setInterval(timer, 1000);

setInterval(myFn, 1000);
setInterval(myFn2, 1000);
setInterval(myFn3, 1000);
setInterval(myFn4, 1000);
setInterval(myFn5, 1000);

for (let i = 0; i < 1; i++) {
    if (clock === 30) {
        clearInterval(timer);
        clearInterval(myFn);
        clearInterval(myFn2);
        clearInterval(myFn3);
        clearInterval(myFn4);
        clearInterval(myFn5);
        setInterval(timer, 1000);
    }

    setInterval(myFn, 1000);
    setInterval(myFn2, 1000);
    setInterval(myFn3, 1000);
    setInterval(myFn4, 1000);
    setInterval(myFn5, 1000);
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

if (window.innerWidth > 1200) {
    desktop();
}
if (window.innerWidth < 1200) {
    mobile();
}
