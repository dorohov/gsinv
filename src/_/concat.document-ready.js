$(function(){var e="noname-browser",r=navigator.userAgent.toLowerCase();r.indexOf("msie")!=-1&&(e="msie"),r.indexOf("trident")!=-1&&(e="msie"),r.indexOf("konqueror")!=-1&&(e="konqueror"),r.indexOf("firefox")!=-1&&(e="firefox"),r.indexOf("safari")!=-1&&(e="safari"),r.indexOf("chrome")!=-1&&(e="chrome"),r.indexOf("chromium")!=-1&&(e="chromium"),r.indexOf("opera")!=-1&&(e="opera"),r.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var t=$(this),a=$(t.attr("href")).eq(0),o=parseInt(t.attr("data-scrollto-diff"))||0,r=parseInt(t.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:a.offset().top+o},r),$(".navbar__nav .navbar__nav-item").removeClass("is--active"),t.parent().addClass("is--active")}),$(document.body).on("click",".navbar__collapse.is--open .navbar__nav-link.scrollto",{},function(e){(screenJS.isXS()||screenJS.isSM()||screenJS.isMD())&&(e.preventDefault(),$(".navbar__hamburger-btn").trigger("click"))});
!function(){var t;$(document.body).on("azbn.azbn7__layouts-content.setStatus",".azbn7__layouts-content",{},function(a,n,e,o,r,_,s){a.preventDefault();var u=$(this),b=u.find(".azbn7__layout-panel"),l=parseInt(u.attr("data-status"))||0;window.clearTimeout(t),n&&(b.find(".azbn7__ap_free").html(e),b.find(".azbn7__ap_sale").html(o),b.find(".azbn7__ap_reserv").html(r),b.find(".azbn7__ap_area").html(_),b.find(".azbn7__ap_number").html(s),0==l&&b.toggleClass("is--hidden")),u.attr("data-status",n)}),$(document.body).on("mouseenter.azbn",".azbn7__layouts-content .azbn7__layout-rect",{},function(t){t.preventDefault();var a=$(this),n=parseInt(a.attr("data-ap-free"))||0,e=parseInt(a.attr("data-ap-sale"))||0,o=parseInt(a.attr("data-ap-reserv"))||0,r=parseInt(a.attr("data-ap-area"))||0,_=parseInt(a.attr("data-ap-number"))||0;$(".azbn7__layouts-content").trigger("azbn.azbn7__layouts-content.setStatus",[1,n,e,o,r,_])}),$(document.body).on("mouseleave.azbn",".azbn7__layouts-content .azbn7__layout-rect",{},function(a){a.preventDefault();var n=$(this);parseInt(n.attr("data-floor"))||0;t=setTimeout(function(){$(".azbn7__layouts-content").trigger("azbn.azbn7__layouts-content.hide")},250)}),$(".azbn7__layouts-content").trigger("azbn.azbn7__layouts-content.setStatus",[0,0])}();
$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"}),$(".form__block").validationEngine("attach",{promptPosition:"bottomLeft",scroll:!1}),$(".form__control.is--input").on("focusin",function(o){$(this).closest(".form__item").addClass("is--filled")});
$("img").addClass("img-responsive");
var humb=$(".navbar__hamburger-card"),toggle_navbar=humb.data("toggle-nav"),toggle_body=humb.data("body"),toggle_collapse=humb.data("collapse-nav");humb.on("click",function(){$(toggle_body).toggleClass("is--open-navbar"),$(toggle_navbar).toggleClass("is--open"),$(toggle_collapse).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__block").length&&($(toggle_body).removeClass("is--open-navbar"),$(toggle_navbar).removeClass("is--open"),$(toggle_collapse).removeClass("is--open"),humb.removeClass("is--active"))});var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar-aside__nav a[href="'+url+'"]').parent().addClass("is--active"),$('[data-azbn-toggle="dropdown"]').on("click",function(a){$(".azbn-dropdown").toggleClass("open")}),$('.navbar-aside__dropdown [data-toggle="dropdown"]').on("click",function(a){a.preventDefault(),a.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),$(".azbn__search-dropdown").on("shown.bs.dropdown",function(a){$(".azbn__search-input").focus()});
var $range=$(".js-range-slider");$range.ionRangeSlider({step:1});
"use strict";$(function(){var s=($('[data-slider-slick="slick-header"]'),$('[data-slider-slick="slick-gallery"]')),e="/local/templates/azbn7theme",e="",i='<button type="button" class="btn-nav__item  is--prev  slick-prev"><span class="sr-only">Предыдущий слайд</span><svg class="icon-svg icon-icon-prev" role="img"><use xlink:href="'+e+'/img/svg/sprite.svg#icon-prev"></use></svg></button>',o='<button type="button" class="btn-nav__item  is--next  slick-next"><span class="sr-only">Следующий слайд</span><svg class="icon-svg icon-icon-next" role="img"><use xlink:href="'+e+'/img/svg/sprite.svg#icon-next"></use></svg></button>';s.slick({slidesToShow:4,slidesToScroll:4,arrows:!0,dots:!0,infinite:!0,prevArrow:i,nextArrow:o,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:1400,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:1025,settings:{arrows:!1,slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1}}]})});
$(".tabs__block.dropdown").closest("body").addClass("is--navbar-bottom");
$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>');