$(document).ready(function(){
    /* 실습문제01 */
    $(".test_01").children(".txt3").css({"color":"red", "font-weight":"bold"});

    $(".test_02").children("#select").css({"font-size":"28px", "background":"#ffff00"});

    $(".test_03").children(".science_01, .science_03").css("color", "#00dd00");
    
    // $(".science_02").siblings("p").css("color", "#00dd00");

    // $(".test_04 p:odd").css("background", "#aaffff");
    $(".test_04 p:eq(1), .test_04 p:eq(3)").css("background", "#aaffff");

    $(".test_05 p:eq(3)").siblings("p").css("color", "#0000ff");

    $(".test_06 li:eq(2)").closest(".menu").css("background", "#ffff77");

    $(".test_07 .main_menu li:eq(1)").parent().siblings().css("background", "#aaffff");
    $(".test_07 .main_menu li:eq(1)").parent().siblings().find("span").css("color", "#ff0000");

    $(".test_08 :text").css("background", "#ffffaa");

    $(".test_09").text("텍스트 변경 완료").css("background", "#aaffaa");

    $(".test_10 p").click(function(){
        $(this).slideUp("normal");
    });

    $(".test_11 p").hover(function(){
        $(this).addClass("highlight");
    }, function(){
        $(this).removeClass("highlight");
    });

    $(".test_12 form select").change(function(){
        $(".test_12 .result").text($(this).val());
    });

    function resizeEvt(){
        var $cur_width=$(window).width();
        var $cur_height=$(window).height();
        $(".test_13 .widthTxt").text($cur_width+"px");
        $(".test_13 .heightTxt").text($cur_height+"px");
    };
    resizeEvt();
    $(window).resize(function(){
        resizeEvt();
    });

    $(window).scroll(function(){
        var $cur_scroll=$(window).scrollTop();
        $(".test_14 .scroll_location").text($cur_scroll+"px");
    });

    $(".test_15 p").hide();
    $(".test_15 .hide_btn").click(function(){
        $(this).siblings("p").hide();
    });
    $(".test_15 .show_btn").click(function(){
        $(this).siblings("p").show();
    });
    
    $(".test_16 p").hide();
    $(".test_16 .hide_btn").click(function(){
        $(this).siblings(".normal").hide();
        $(this).siblings(".very_fast").hide(50);
        $(this).siblings(".fast").hide("fast");
        $(this).siblings(".slow").hide("slow");
        $(this).siblings(".very_slow").hide(2000);
    });
    $(".test_16 .show_btn").click(function(){
        $(this).siblings(".normal").show();
        $(this).siblings(".very_fast").show(50);
        $(this).siblings(".fast").show("fast");
        $(this).siblings(".slow").show("slow");
        $(this).siblings(".very_slow").show(2000);
    });

    $(".test_17 p").hide();
    $(".test_17 .out_btn").click(function(){
        $(this).siblings("p").fadeOut();
    });
    $(".test_17 .in_btn").click(function(){
        $(this).siblings("p").fadeIn();
    });

    $(".test_18 p").hide();
    $(".test_18 .up_btn").click(function(){
        $(this).siblings("p").slideUp();
    });
    $(".test_18 .down_btn").click(function(){
        $(this).siblings("p").slideDown();
    });

    $(".test_19 button").click(function(){
        $(".test_19 p img").stop().animate({"position":"absolute","left":"200px"},1000);
    });

    $(".test_20 img").click(function(){
        var $title=$(this).attr("title");
        $(this).siblings("p").text($title);
    });

    $(".test_21 button").click(function(){
        $(this).siblings("img").attr("src", "img/kakao_img2.jpg");
    });

    $(".test_22 .left_add").click(function(){
        $(".test_22 .img_frame").prepend("<img src='img/wall_img1.jpg'>");
    });
    $(".test_22 .right_add").click(function(){
        $(".test_22 .img_frame").append("<img src='img/wall_img3.jpg'>");
    });

    $(".test_23 .before_add").click(function(){
        $(".test_23 .img_frame img").before("<img src='img/wall_img4.jpg'>");
    });
    $(".test_23 .after_add").click(function(){
        $(".test_23 .img_frame .mid_img").after("<img src='img/wall_img6.jpg'>");
    });

    $(".test_24 .effect_add").click(function(){
        $(".test_24 img").addClass("effect");
    });
    $(".test_24 .effect_remove").click(function(){
        $(".test_24 img").removeClass("effect");
    });

    $(".test_25 .effect_confirm").click(function(){
        var $effect=$(".test_25 img").hasClass("effect");
        if($effect==false){
            $(".test_25 img").addClass("effect");
        }else{
            $(".test_25 img").removeClass("effect");
        }
    });

    $(".test_26 img:eq(0)").siblings().hide();
    $(".test_26 .fadein_img").click(function(){
        $(".test_26 img:eq(1)").fadeIn(1000);
        $(".test_26 img:eq(2)").fadeIn(2000);
        $(".test_26 img:eq(3)").fadeIn(3000);
        $(".test_26 img:eq(4)").fadeIn(4000);
    });
});