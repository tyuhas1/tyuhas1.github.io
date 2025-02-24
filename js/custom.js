// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});

function highlightImage(imageId) {
    var image = document.getElementById(imageId);
    image.style.scale = 1.025;
}

function removeHighlight(imageId) {
    var image = document.getElementById(imageId);
    image.style.scale = 1;
}

function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();