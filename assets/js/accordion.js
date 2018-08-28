(function() {
  window.addEventListener('load', function() {
    var accordionClickable = document.querySelectorAll('.context__paragraph h2.highlighted');
    accordionClickable.forEach(function(item) {
      item.addEventListener('click', function(e) {
        item.parentNode.classList.toggle('expand');
        var panel = item.parentNode.querySelector('.panel');
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        }
      });
    });
  });
})();