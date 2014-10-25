var Category = (function() {

  function check() {
    var path = window.location.pathname;
    if (path != "/") {
      var categoryName = Utils.reject(path.split("/"), "")[0];
      $("#"+categoryName).addClass("selected");
    }
  }

  return {check: check};
})();
