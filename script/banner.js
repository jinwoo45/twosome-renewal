function menu_autoWidth() {
    if ($(window).width() > 900) {
        $('#menuA').css("background-image", "url('images/menu_header.jpg')");
    } else {
        $('#menuA').css("background-image", "url('images/menu_header_2.jpg')");
    }
}

$(document).ready(menu_autoWidth);
$(window).resize(menu_autoWidth);
