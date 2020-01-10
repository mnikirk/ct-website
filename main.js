$(document).ready(function () {
    $("#year").text((new Date).getFullYear());

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    var w = $(document).width() + 100;
    $(document).keydown(function (keyPressed) {
        if (keyPressed.keyCode === 77) {
            $("#plmr").css("left", "-50px");
            $("#plmr").animate({
                left: w
            }, "slow");
        }
    });
});
