(function() {
  window.addEventListener('load', function() {
    if (window.innerWidth < 800) {
      var teamContainer = document.querySelector('.team__wrapper');
      var teamCards = document.querySelectorAll('.m8');

      teamCards.forEach(function(card) {
        var cardsWatcher = scrollMonitor.create(card, 70);
        cardsWatcher.fullyEnterViewport(function(event, element) {
          element.watchItem.querySelector('.overlay').style.opacity = 1;
          element.watchItem.querySelector('.overlay').style.backgroundColor = 'rgba(249, 35, 0, 0.28)';
        });
        cardsWatcher.partiallyExitViewport(function(event, element) {
          element.watchItem.querySelector('.overlay').style.opacity = 0;
          element.watchItem.querySelector('.overlay').style.backgroundColor = 'rgba(249, 35, 0, 0.28)';
        });
      });
    }
  });
})();