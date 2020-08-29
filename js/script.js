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
    $("#hidden_img").remove();
}

function mobile() {
    $("#change_css").attr("href", "");
    $("#change_css").attr("href", "css/mobile.css");
    $("#one_menu_div").html(
        "<a id='one_menu_a'><img src='img/mobile_menu_icon.png' id='one_menu-img'></a>"
    );
}

if (window.innerWidth > 1049) {
    desktop();
}
if (window.innerWidth < 1050) {
    mobile();
}
