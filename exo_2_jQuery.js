    $(function(){
        $('body').scrollTop(1000);
    });

/*3*/

/*(document).ready(function(){
    $(.on('click', function(event){
        $(this).hide();
    });
*/

$(document).on("contextmenu",function(e){
  return false;
    });

/*4*/

$('#donereading').click(function() {  
    if ($('#submitbtn').is(':disabled')) {  
        $('#submitbtn').removeAttr('disabled');  
    } else {  
        $('#submitbtn').attr('disabled', 'disabled');  
    }  
});  

/*5

$(document).ready(function(){
    $("img").hide();
});

*/

/*6

Essai 1
(document).ready(function(){
	$(".blink").animate({opacity:0},400,"linear",function(){
  		$(this).animate({opacity:1},400);
});

Essai 2
*/
function pulse() {
    $('.blink').fadeIn(500);
    $('.blink').fadeOut(500);
}
setInterval(pulse, 1000);

/*7*/

$(function() {
        $("table tr:nth-child(even)").addClass("striped");
});









