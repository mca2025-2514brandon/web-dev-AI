// grabbing the document when it is fully ready
$(document).ready(function () {

    // password visibility toggle toggle-password
    $("#toggle-password").on("click", function () {
        const input = $("#password"); // fetches id of the input element
        const currentType = input.attr("type"); // getting the current type

        if (currentType === "password") {
            input.attr("type", "text"); // setting the type to 'text' to make the password visible to the user
            $(this).text("🙈"); // changing the icon
        } else {
            input.attr("type", "password");
            $(this).text("👁"); // changing the icon back to normal
        }
    });

    // password visibility toggle toggle-confirm-password
    $("#toggle-confirm-password").on("click", function () {
        const input = $("#confirm-password"); 
        const currentType = input.attr("type"); // to fetch the current input type

        if (currentType === "password") {
            input.attr("type", "text"); // setting the type to 'text' to make the password visible to the user
            $(this).text("🙈"); // changing the icon
        } else {
            input.attr("type", "password");
            $(this).text("👁"); // changing the icon back to normal
        }
    });

    // for character count component
    $("#password").on("input", function () {
        const length = $(this).val().length;
        $("#char-counter").text(length + "/8 characters");

        if (length >= 8) {
            $("#char-counter").css("color", "#6bff9e"); // change the text color to green
        } else {
            $("#char-counter").css("color", "#ff6b6b");
        }
    });

    // for input focus highlight
    $(".form-input").on("focus", function () {
        $(this).css("background", "rgba(255, 255, 255, 0.35)");
    });

    // when the form is out of focus
    $(".form-input").on("blur", function () {
        $(this).css("background", "rgba(255, 255, 255, 0.2)");
    });
});