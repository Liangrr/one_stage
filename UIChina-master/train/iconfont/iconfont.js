(function(window){var svgSprite='<svg><symbol id="icon-qizi" viewBox="0 0 1024 1024"><path d="M925.489255 191.904048c-4.093953-21.493253-16.887556-42.474763-34.286856-51.174413-21.493253-12.793603-42.474763-12.793603-63.968016-4.093953-25.587206 12.793603-111.048476 29.681159-200.603698-25.587206-259.966017-170.410795-567.012494-93.649175-579.806097-89.555223-29.681159 8.69965-47.08046 34.286857-38.38081 59.874063 0 4.093953 29.681159 136.635682 55.268366 277.365318l111.048476 622.792603c4.093953 25.587206 25.587206 42.474763 51.174412 42.474763h8.699651c29.681159-4.093953 47.08046-34.286857 42.474762-63.968016l-63.968016-349.521239c47.08046-25.587206 183.204398-42.474763 294.252874 8.69965 102.348826 59.874063 221.585207 76.761619 311.14043 76.761619 68.061969 0 115.142429-8.69965 119.236381-8.69965 29.681159-4.093953 47.08046-29.681159 42.474763-59.874063l-54.756622-435.494253zM563.174413 528.631684s-4.093953 0-4.093953-4.093953c-59.874063-29.681159-136.635682-42.474763-208.791604-42.474762-55.268366 0-106.442779 8.69965-149.429286 25.587206-8.69965-51.174413-21.493253-106.442779-34.286856-166.316842L128.191904 115.142429c89.555222-12.793603 281.45927-21.493253 439.076462 89.555222 98.254873 59.874063 195.998001 59.874063 255.872064 47.08046l42.474762 341.333333c-68.061969-0.511744-200.091954-4.605697-302.440779-64.47976z"  ></path></symbol><symbol id="icon-liulan2" viewBox="0 0 1024 1024"><path d="M947.9 484.4C886.9 416.9 714.7 249 511.7 249S136.4 416.9 75.5 484.4c-14.1 15.6-14.1 39.4 0 55 61 67.4 233.2 235.4 436.2 235.4s375.2-167.9 436.2-235.4c14.1-15.6 14.1-39.4 0-55zM511.7 666c-85.1 0-154.1-69-154.1-154.1s69-154.1 154.1-154.1 154.1 69 154.1 154.1S596.8 666 511.7 666z" fill="#707070" ></path><path d="M511.7 511.9m-71.9 0a71.9 71.9 0 1 0 143.8 0 71.9 71.9 0 1 0-143.8 0Z" fill="#707070" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)