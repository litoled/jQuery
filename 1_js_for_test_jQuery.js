$("p").bind("click", function(){  
   $( "<p>This is a click Event</p>").appendTo( "body" );  
});  
  
$("p").bind("dblclick", function(){  
   $( "<p>This is a double-click Event</p>"  ).appendTo( "body" );  
});  
