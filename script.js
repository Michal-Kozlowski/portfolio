$(document).ready(function(){
//--------------------------------smooth scroll
    $("li a, .navbar-brand").on("click", function() {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate ({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }

        //-----------------menu collapse after click on phone
        $(".navbar-collapse").collapse("hide");
    });


//--------------------------------hide navbar name and background on top
    $(document).scroll(function() {
       if($(window).scrollTop() > 350) {
          $(".navbar-brand").fadeIn(400);
          $(".navbar").addClass("nav_background");
       } else if ($(window).scrollTop() <= 350) {
          $(".navbar-brand").fadeOut(400);
          $(".navbar").removeClass("nav_background");
       }
    });


//-------------------------------E.T.

    $(".mail, .phone, .github").hover(function() {
        $(".et").css("opacity", "0.05");
        }, function() {
        $(".et").css("opacity", "0");
    });


//--------------------------------destroy neon
    var j = 0;

    $(".name span").on("click", function() {

        if ($(this)[0].className === "broken") {
            $(this).addClass("broke");
            $(this).removeClass("broken");
            j += 1;
        } else if ($(this)[0].className === "") {
            $(this).addClass("broken");
            j += 1;
        }

        if (j === 17) {
            $(".name span").removeClass("broke").removeClass("broken");
            $(".name").addClass("red");
        } else if (j === 35) {
            $(".name span").removeClass("broke").removeClass("broken");
            $(".red").removeClass("red");
            j = 0;
        }
    });


});
