(function() {
  var video = document.querySelector('#home-video');
  var windowWidth = window.innerWidth;
  video.append('');
  if (windowWidth < 780) {
    video.insertAdjacentHTML('beforeend', '<source src="/assets/videos/home-header-mobile.webm" type="video/webm">')
    video.insertAdjacentHTML('beforeend', '<source src="/assets/videos/home-cropped.mp4" type="video/mp4">')
  } else {
    video.insertAdjacentHTML('beforeend', '<source src="/assets/videos/home-header-low.webm" type="video/webm">')
    video.insertAdjacentHTML('beforeend', '<source src="/assets/videos/home-header.mp4" type="video/mp4">')
  }
})();