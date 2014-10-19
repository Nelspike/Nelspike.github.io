var Sidebar = (function() {
  
  function bind() {
    $(".social-container").mouseover(function() {
      var user = $(this).data("name");
      $("#social-media-name").text(user); 
    }); 

  };

  return {bind: bind};
})();
