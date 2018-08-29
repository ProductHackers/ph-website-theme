(function() {
  window.addEventListener('load', function() {
    var accordionClickable = document.querySelectorAll('.context__paragraph h2.highlighted');
    var contextSection = document.querySelector('section.h-section__context');
    var panels = contextSection.querySelectorAll('.panel');

    accordionClickable.forEach(function(item) {
      item.addEventListener('click', function(e) {
        accordionClickable.forEach(function(acc) {
          if (acc.parentNode.querySelector('.panel').style.maxHeight) {
            acc.parentNode.classList.toggle('expand');
            acc.parentNode.querySelector('.panel').style.maxHeight = null;
          }
        });

        item.parentNode.classList.toggle('expand');

        var panel = item.parentNode.querySelector('.panel');
        panel.style.maxHeight = `${panel.scrollHeight}px`;

      });
    });
  });
})();