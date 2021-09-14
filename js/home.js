$(".semester").click(function(){
    var semesterDetails = $(this).next();
    semesterDetails.collapse('toggle');
});