(function() {
  window.addEventListener('load', function() {
    var displayMenu = function() {
      document.getElementById('hamburger-menu').classList.toggle('animate');
      document.getElementById('ph-menu').classList.toggle('visible');
    };
    var menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', displayMenu);
  });
})();