(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {

			var viewport = document.querySelector("meta[name=viewport]");  
            /*//下面是根据设备像素设置viewport  
            if (window.devicePixelRatio == 1) {  
                viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');  
            }  
            if (window.devicePixelRatio == 2) {  
                //alert(2)
                viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');  
            }  
            if (window.devicePixelRatio == 3) { 
                //alert(3)
                viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');  
            }  */

            var clientWidth = docEl.clientWidth;
            //alert(clientWidth            if (!clientWidth) return;)

            var scale = clientWidth / 320
            if(scale<1){
                scale = 1;
            }else if(scale>1.29){
                scale = 1.29;
            }else{
                scale = clientWidth / 320;
            }
            docEl.style.fontSize = 16 * scale + 'px';
            //alert(16*scale)
        };
        

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);