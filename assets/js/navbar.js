var setNavbarScrolled, setNavbarTop; 

(function() {
  window.addEventListener('load', function() {
    var scrolled = false;

    inlineSVG.init({
      svgSelector: 'img.inline-svg',
      initClass: 'js-inlinesvg',
    });

    document.body.classList.remove('noScroll');
    var checkNavbar = setInterval(function() {
      if (
        document.getElementById('Capa_2') &&
        document.getElementById('fb_svg') &&
        document.getElementById('linkedin_svg') && 
        document.getElementById('twitter_svg') && 
        document.getElementById('youtube_svg')
      ) {
        clearInterval(checkNavbar);
        if (window.scrollY > 80) setNavbarScrolled();
      };
    }, 100);

    setNavbarScrolled = function() {
      scrolled = true; 
      document.body.classList.add('headerScroll');
      document.getElementsByTagName('header')[0].classList.add('scroll');
      if (document.getElementById('Capa_2')) document.getElementById('Capa_2').children[0].children[0].classList.add('scroll');
      if (document.getElementById('fb_svg')) document.getElementById('fb_svg').children[1].children[0].classList.add('scroll');
      if (document.getElementById('linkedin_svg')) document.getElementById('linkedin_svg').children[1].children[0].classList.add('scroll');
      if (document.getElementById('twitter_svg')) document.getElementById('twitter_svg').children[1].children[0].classList.add('scroll');
      if (document.getElementById('youtube_svg')) document.getElementById('youtube_svg').children[0].children[1].classList.add('scroll');
      document.getElementsByClassName('header__link blog')[0].children[0].classList.add('scroll');
      document.getElementsByClassName('header__link contact')[0].children[0].classList.add('scroll');
      document.getElementById('hamburger-menu').classList.add('scroll');
    }

    setNavbarTop = function() {
      scrolled = false;
      document.body.classList.remove('headerScroll');
      document.getElementsByTagName('header')[0].classList.remove('scroll');
      if (document.getElementById('Capa_2')) document.getElementById('Capa_2').children[0].children[0].classList.remove('scroll');
      if (document.getElementById('fb_svg')) document.getElementById('fb_svg').children[1].children[0].classList.remove('scroll');
      if (document.getElementById('linkedin_svg')) document.getElementById('linkedin_svg').children[1].children[0].classList.remove('scroll');
      if (document.getElementById('twitter_svg')) document.getElementById('twitter_svg').children[1].children[0].classList.remove('scroll');
      if (document.getElementById('youtube_svg')) document.getElementById('youtube_svg').children[0].children[1].classList.remove('scroll');
      document.getElementsByClassName('header__link blog')[0].children[0].classList.remove('scroll');
      document.getElementsByClassName('header__link contact')[0].children[0].classList.remove('scroll');
      document.getElementById('hamburger-menu').classList.remove('scroll');
    }

    if (window.scrollY > 80) setNavbarScrolled(); 

    document.addEventListener('scroll', function() {
      if (window.scrollY > 80 && !scrolled) setNavbarScrolled(); 
        else if (window.scrollY <= 0) setNavbarTop(); 
    });
  });
})();