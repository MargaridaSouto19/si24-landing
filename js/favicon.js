var link = document.querySelector("link[rel~='icon']");
link = document.createElement('link');
link.rel = 'icon';
link.href = './images/icons/fav_red.ico';
document.getElementsByTagName('head')[0].appendChild(link);

var icons = ['./images/icons/fav_red.ico', './images/icons/fav_yellow.ico', './images/icons/fav_purple.ico'];
var i = 0;
setInterval(function () {
  link.href = icons[i];
  i = (i + 1) % icons.length;
}, 2000);