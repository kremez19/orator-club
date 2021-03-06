$(function() {
    Initializations.init(), Grid.init(), Portfolio.init(), Scroller.init(), GoogleMap.init(), Charts.init(), CountTo.init();
    var e = new WOW({
        mobile: !1,
        live: !0
    });
    e.init()
}), Initializations = {
    init: function() {
        $(".j-carousel").owlCarousel({
            loop: !0,
            nav: !0,
            items: 1,
            mouseDrag: !1,
            autoHeight: !0,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        }), $(".home-carousel").length && $(".home-carousel").carousel({
            pause: "false",
            interval: 6000
        }), $(".js-video").length && $(".js-video").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        })
    }
}, Portfolio = {
    init: function() {
        $("#portfolio .filter a").click(function(e) {
            e.preventDefault(), $("#portfolio .i .c").removeAttr("data-wow-delay"), $("#portfolio .i .c").attr("style", ""), $("#portfolio .filter li").removeClass("active"), $(this).parent().addClass("active");
            var t = $(this).attr("data-filter");
            $(".og-expanded .og-close").length ? ($(".og-expanded .og-close").click(), setTimeout(function() {
                Portfolio.filter(t)
            }, 400)) : Portfolio.filter(t)
        })
    },
    filter: function(e) {
        $(".og-grid .i").each(function() {
            $(this).hasClass(e) ? $(this).removeClass("hide") : $(this).addClass("hide")
        })
    }
}, Scroller = {
    init: function() {
        $(".j-scroll").on("click", function(e) {
            e.preventDefault();
            var t = this.hash;
            $target = $(t), $("html, body").stop().animate({
                scrollTop: $target.offset().top - 69
            }, 1e3, "easeInOutExpo"), $(".visible-xs").is(":visible") && $(".navbar-collapse").hasClass("in") && $(".navbar-toggle").click()
        })
    }
}, GoogleMap = {
    map: null,
    marker: null,
    position: null,
    init: function() {
        function e() {
            var e = new google.maps.LatLng(t, o),
                a = {
                    zoom: 17,
                    scrollwheel: !1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: e,
                    styles: [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }]
                };
            GoogleMap.map = new google.maps.Map(document.getElementById("googleMap"), a), GoogleMap.position = new google.maps.LatLng(t, o), GoogleMap.setMarker()
        }
        if ($("#googleMap").length) {
            var t = $("#googleMap").attr("data-lat"),
                o = $("#googleMap").attr("data-lng");
            google.maps.event.addDomListener(window, "load", e)
        }
    },
    setMarker: function() {
        GoogleMap.marker = new google.maps.Marker({
            position: GoogleMap.position,
            map: GoogleMap.map,
            icon: "assets/map-pin-point.png"
        }), GoogleMap.marker.setMap(GoogleMap.map)
    }
}, Charts = {
    init: function() {
        $(".chart").length && $(".chart").waypoint(function() {
            $(".chart").easyPieChart({
                barColor: $(".navbar-brand").css("color"),
                animate: 3e3,
                trackColor: "#f1f1f1",
                lineWidth: 12,
                size: 160,
                lineCap: "square",
                scaleColor: "#f7f7f7"
            })
        }, {
            triggerOnce: !0,
            offset: "bottom-in-view"
        })
    },
    update: function() {
        $(".chart").each(function() {
            var e = $(this).data("easyPieChart"),
                t = $(this).attr("data-percent");
            e.options.barColor = $(".navbar-brand").css("color"), e.update(t)
        })
    }
}, CountTo = {
    init: function() {
        $(".timer").length && $(".timer").waypoint(function() {
            $(".timer").data("countToOptions", {
                formatter: function(e, t) {
                    return e.toFixed(t.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
                }
            }), $(".timer").each(CountTo.count)
        }, {
            triggerOnce: !0,
            offset: "bottom-in-view"
        })
    },
    count: function(e) {
        var t = $(this);
        e = $.extend({}, e || {}, t.data("countToOptions") || {}), t.countTo(e)
    }
};

