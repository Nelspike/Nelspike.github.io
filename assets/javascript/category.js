var Category = (function() {

  function check() {
    var path = window.location.pathname;
    if (path != "/") {
      var categoryName = Utils.reject(path.split("/"), "")[0];
      $("#"+categoryName).css("background-color", "#225485");
    }
  }

  return {check: check};
})();
