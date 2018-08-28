(function() {
  window.addEventListener('load', function() {
    var accordionClickable = document.querySelectorAll('.context__paragraph h2.highlighted');
    var contextSection = document.querySelector('section.h-section__context');
    var panels = contextSection.querySelectorAll('.panel');

    accordionClickable.forEach(function(item) {
      item.addEventListener('click', function(e) {
        accordionClickable.forEach(function(acc) {
          if (acc !== item) acc.parentNode.classList.remove('expand');
        });

        panels.forEach(function(panel) {
          panel.style.maxHeight = null;
        });

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