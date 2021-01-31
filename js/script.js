function populate() {
    $("#main_div").html(`
        <h1 class="header">Enter your information</h1>
        <label name="length" class='first_impact'>How many feet in a row?</label>
        <input id="1_input" type="number" name="length" class='first_impact'><br>
        <label name="rows" class='first_impact'>How many rows per bed?</label>
        <input id="2_input" type="number" name="rows" class='first_impact'><br>
        <label name="beds" class='first_impact'>How many beds total?</label>
        <input id="3_input" type="number" name="beds" class='first_impact'><br>
        <label name="seeds" class='first_impact'>How many inches between seeds?</label>
        <input id="4_input" type="number" name="seeds" class='first_impact'><br>
        <button id="1_button" type="submit" class='button'>Submit</button><br>
`);
}

populate();

function calculate(length, rows, beds, seeds) {
    let l = length;
    let r = rows;
    let b = beds;
    let s = seeds;
    return parseFloat((l * 12 * r * b) / s);
}

function multiplier(number1, number2) {
    return Math.floor(number1 * number2);
}

$("#1_button").on("click", () => {
    $("#1_button").hide();
    let answer = calculate(
        $("#1_input").val(),
        $("#2_input").val(),
        $("#3_input").val(),
        $("#4_input").val()
    );

    $("#main_div").append(`<div id='new_div' class='second_impact'></div>`);
    $("#new_div").append(`<p id='answer_one'>${answer}</p>`);
    $("#new_div").append(`
            <button id='2_button' class='button' type='submit'>x2!</button>`);
    $("#new_div").append(`
            <button id='3_button' class='button' type='submit'>x3!</button><br>`);
    $("#new_div").append(`
            <label class='second_impact' name='choose_your_own'>Choose your own multiplier</label><br>
            <input type='number' id='choose_your_own_input' class='second_impact' name='choose_your_own'><br>
            <button id='4_button' class='button' type='submit' name='choose_your_own'>x~!</button>`);
    $("#2_button").on("click", () => {
        if ($("#newer_div")) {
            $("#newer_div").remove();
        }
        const x2_appendage = $("#new_div").append("<div id='newer_div' class='second_impact'></div>");
        $("#newer_div").append(multiplier(answer, 2) + "<br>");
        return x2_appendage;
    });
    $("#3_button").on("click", () => {
        if ($("#newer_div")) {
            $("#newer_div").remove();
        }
        const x3_appendage = $("#new_div").append("<div id='newer_div' class='second_impact'></div>");
        $("#newer_div").append(multiplier(answer, 3) + "<br>");
        return x3_appendage;
    });
    $("#4_button").on("click", () => {
        if ($("#newer_div")) {
            $("#newer_div").remove();
        }
        const other = $("#choose_your_own_input").val();
        const x4_appendage = $("#new_div").append("<div id='newer_div' class='second_impact'></div>");
        $("#newer_div").append(multiplier(answer, other) + "<br>");
        return x4_appendage;
    });
});
