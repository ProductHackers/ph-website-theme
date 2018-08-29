(function() {
  window.addEventListener('load', function() {
    var accordionClickable = document.querySelectorAll('.context__paragraph h2.highlighted');

    accordionClickable.forEach(function(item) {
      item.addEventListener('click', function(e) {
        var divElement = e.target.parentNode.parentNode;
        if (e.target.tagName === 'H2') divElement = e.target.parentNode;
        if (divElement.classList.contains('expand')) {
          divElement.classList.remove('expand');
          divElement.querySelector('.panel').style.maxHeight = null;
        } else {
          divElement.classList.add('expand');
          divElement.querySelector('.panel').style.maxHeight = `${divElement.querySelector('.panel').scrollHeight}px`;
        }

        accordionClickable.forEach(function(acc) {
          if ((acc.parentNode !== divElement) && acc.parentNode.querySelector('.panel').style.maxHeight) {
            acc.parentNode.classList.toggle('expand');
            acc.parentNode.querySelector('.panel').style.maxHeight = null;
          }
        });
      });
    });
  });
})();