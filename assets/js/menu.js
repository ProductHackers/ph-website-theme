(function() {
  window.addEventListener('load', function() {
    var displayMenu = function() {

      document.body.classList.toggle('noScroll');

      if (document.getElementsByTagName('header')[0].classList.contains('menu-open')) {
        setTimeout(function() {
          document.getElementsByTagName('header')[0].classList.toggle('menu-open');
        }, 300);
      } else {
        document.getElementsByTagName('header')[0].classList.toggle('menu-open');
      }

      document.getElementById('hamburger-menu').classList.toggle('animate');
      document.getElementById('ph-menu').classList.toggle('visible');

    };

    var menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', displayMenu);
  });
})();