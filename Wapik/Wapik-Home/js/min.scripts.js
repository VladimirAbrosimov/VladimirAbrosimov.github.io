function addHeaderScroll(){var e=banner.scrollHeight-200;document.documentElement.scrollTop>e||document.body.scrollTop>e?header.classList.add("header-scroll"):header.classList.remove("header-scroll")}var navicon=document.getElementById("js-navicon"),nav=document.getElementById("js-nav"),header=document.getElementById("js-header"),banner=document.getElementById("js-banner");navicon.onclick=function(){nav.classList.toggle("nav-show")},window.onresize=function(){window.innerWidth>850&&nav.classList.remove("nav-show"),banner.style.paddingTop=header.scrollHeight+"px"},window.onscroll=addHeaderScroll,window.onload=function(){banner.style.paddingTop=header.scrollHeight+"px",addHeaderScroll()};