document.writeln('<p class="info">2019 磐石回中十八级六班合照 </p>');
document.writeln('<a id="jsl_speed_stat2" href="http://personal.ccaeo.com/?i=1" target="_blank">本站设计、交互、编码均由 猛 一人独立完成。</a> <script src="//static.yunaq.com/static/js/stat/picture2_stat.js" charset="utf-8" type="text/javascript"></script>');
<a id="jsl_speed_stat0" href="http://www.yunaq.com/" target="_blank">知道创宇云安全</a><script src="//static.yunaq.com/static/js/stat/picture_stat.js" charset="utf-8" type="text/javascript"></script>
function click(e) {
if (document.all) {
if (event.button==2||event.button==3) {
oncontextmenu='return false';
}
}
if (document.layers) {
if (e.which == 3) {
oncontextmenu='return false';
}
}
}
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown=click;
document.oncontextmenu = new Function("return false;")
document.onkeydown =document.onkeyup = document.onkeypress=function(){ 
if(window.event.keyCode == 123) { 
window.event.returnValue=false;
return(false); 
} 
}