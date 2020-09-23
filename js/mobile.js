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
    };
