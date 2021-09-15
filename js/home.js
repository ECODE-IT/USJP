$(".semester").click(function(){
    var semesterDetails = $(this).next();
    semesterDetails.collapse('toggle');
});

$("#search-courses").focus(function(){
    $(this).parent().addClass('blue-glow');
});
$("#search-courses").blur(function(){
    $(this).parent().removeClass('blue-glow');
});