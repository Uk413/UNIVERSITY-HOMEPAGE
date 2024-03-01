(function () {
  var l = jQuery;
  var o = window;
  var e = document;
  l.fn.scrollUp = function (o) {
    if (!l.data(e.body, "scrollUp")) {
      l.data(e.body, "scrollUp", true);
      l.fn.scrollUp.init(o);
    }
  };
  l.fn.scrollUp.init = function (r) {
    var s;
    var t;
    var c;
    var a;
    var d;
    var p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r);
    var f = false;
    switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {id: p.scrollName, href: "#top"}), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({display: "none", position: "fixed", zIndex: p.zIndex}), p.activeOverlay && l("<div/>", {id: p.scrollName + "-active"}).css({position: "absolute", top: p.scrollDistance + "px", width: "100%", borderTop: "1px dotted" + p.activeOverlay, zIndex: p.zIndex}).appendTo("body"), p.animation) {
      case "fade":
        s = "fadeIn";
        t = "fadeOut";
        c = p.animationSpeed;
        break;
      case "slide":
        s = "slideDown";
        t = "slideUp";
        c = p.animationSpeed;
        break;
      default:
        s = "show";
        t = "hide";
        c = 0;
    }
    var i = p.scrollFrom === "top" ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance;
    l(o).scroll(function () {
      if (l(o).scrollTop() > i) {
        if (!f) {
          d[s](c);
          f = true;
        }
      } else if (f) {
        d[t](c);
        f = false;
      }
    });
    if (p.scrollTarget) {
      if (typeof p.scrollTarget == "number") {
        a = p.scrollTarget;
      } else if (typeof p.scrollTarget == "string") {
        a = Math.floor(l(p.scrollTarget).offset().top);
      }
    } else {
      a = 0;
    }
    d.click(function (o) {
      o.preventDefault();
      l("html, body").animate({scrollTop: a}, p.scrollSpeed, p.easingType);
    });
  };
  l.fn.scrollUp.defaults = {scrollName: "scrollUp", scrollDistance: 300, scrollFrom: "top", scrollSpeed: 300, easingType: "linear", animation: "fade", animationSpeed: 200, scrollTrigger: false, scrollTarget: false, scrollText: "Scroll to top", scrollTitle: false, scrollImg: false, activeOverlay: false, zIndex: 2147483647};
  l.fn.scrollUp.destroy = function (r) {
    l.removeData(e.body, "scrollUp");
    l("#" + l.fn.scrollUp.settings.scrollName).remove();
    l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove();
    if (l.fn.jquery.split(".")[1] >= 7) {
      l(o).off("scroll", r);
    } else {
      l(o).unbind("scroll", r);
    }
  };
  l.scrollUp = l.fn.scrollUp;
}());
