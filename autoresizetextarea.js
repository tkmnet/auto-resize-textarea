var tkmlibResizeTextArea=function(elem){rows=Math.max(elem.dataset.autoResize,1);rows=Math.max(rows,elem.value.match(/\n/g).length+1);elem.rows=rows;};
var addAutoResizeTextArea=function(elem){elem.addEventListener("keyup",(e)=>{if(e.key=="Enter"||e.key=="Backspace"){tkmlibResizeTextArea(elem);}});tkmlibResizeTextArea(elem);};
document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("textarea[data-auto-resize]").forEach(a=>addAutoResizeTextArea(a));},false);
