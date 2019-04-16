//Add active class to navbar
$(function(){
    $('#navbar a').click(function () {
        $('#navbar a').removeClass('active');
        $(this).addClass('active');
     });
 });


 // // LINKS TO ANCHORS
 // $("a.nav-link").on('click',function(e) {
 //     var url = e.target.href;
 //     var hash = url.substring(url.indexOf("#")+1);
 //     $('html, body').animate({
 //         scrollTop: $('#'+hash).offset().top
 //     }, 500);
 //     return false;
 // });
