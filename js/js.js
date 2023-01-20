function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

jQuery(function () {
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#scrollUp').css('right', '10px');
            } else {
                $('#scrollUp').removeAttr('style');
            }

        });
    });
});