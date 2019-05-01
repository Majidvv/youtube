// Sidebar menu
//close the sidebar menu
$("#menu-close").click(function(e){
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");
    
});

//open the sidebar menu 
$(document).ready(function(){
$("#menu-toggle").click(function(e){
    
    e.preventDefault();
   $("#sidebar-wrapper").toggleClass("active");
});
});

//End Sidebar menu


//switch tabs class
$(document).ready(function(){
    $("#tab1").click(function(){
      $("#tab1").toggleClass("active");
      $("#tab2").removeClass("active");
      $("#tab3").removeClass("active");
    });
  });
  $(document).ready(function(){
    $("#tab2").click(function(){
      $("#tab2").toggleClass("active");
      $("#tab1").removeClass("active");
      $("#tab3").removeClass("active");
    });
  });
  $(document).ready(function(){
    $("#tab3").click(function(){
      $("#tab3").toggleClass("active");
      $("#tab1").removeClass("active");
      $("#tab2").removeClass("active");
    });
  });