!function(t){"use strict";var e=function(){};e.prototype.createLine=function(e,i,n,r,a){return t(e).peity("line",{fill:i,stroke:n,width:r,height:a}),t(e)},e.prototype.init=function(){var t=this.createLine(".updating-chart","#5fbeaa","#5fbeaa",120,40);setInterval(function(){var e=Math.round(10*Math.random()),i=t.text().split(",");i.shift(),i.push(e),t.text(i.join(",")).change()},1e3)},t.PeityChart=new e,t.PeityChart.Constructor=e}(window.jQuery),function(t){"use strict";t.PeityChart.init()}(window.jQuery);