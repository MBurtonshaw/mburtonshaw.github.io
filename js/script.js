if (screen.width > 1366) {
    equation();
}

function equation() {
    const x = $(window).width();
    const y = x - 1349;
    const z = y/2;
    $("#container").css('margin-left', z + "px");
    $("#container").css('margin-right', z + "px");
}



