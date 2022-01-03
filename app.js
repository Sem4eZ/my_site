$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


        // HEADER FIXED 
        checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop(); 
        
        checkScroll(scrollOffset);    

    });

    function checkScroll() {

        if (scrollOffset >= introH) {
            header.addClass("fixed");       
        } else {
            header.removeClass("fixed");
        }   
    }


    //  SMOOTH SCROLL

    $("[data-scroll").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockID = $(this).data('scroll'),
            blockOffset = $(blockID).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

        $("html, body ").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Menu nav toggle

    $(nav_toggle).on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    //  Collapse

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
        blockID = $(this).data('collapse');

 
        $(blockID).slideToggle();

    })

    

});