var Utils = (function() {

  function reject(array, criteria) {
    return array.filter(function(element) {
      return element != criteria;
    });
  }

  return {reject: reject};
})();
