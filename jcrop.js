(function ($) {
    Drupal.behaviors.jcrop = {
        attach: function (context, settings) {
            if ($(context).is("form")) {
                $('.jcrop-box .jcrop-image:not(.jcrop-processed)', context).each(function () {
                    var $image = $(this);
                    var jcrop = null;
                    $image.addClass("jcrop-processed").Jcrop($.extend(settings.jcrop[$image.data("jcrop")] || {}, {
                        onChange: function (coords) {
                            $image.trigger("change", [coords, jcrop]);
                        },
                        onSelect: function (coords) {
                            $image.trigger("select", [coords, jcrop]);
                        },
                        onDblClick: function (coords) {
                            $image.trigger("dblclick", [coords, jcrop]);
                        },
                        onRelease: function (coords) {
                            $image.trigger("release", [coords, jcrop]);
                        }
                    }), function () {
                        jcrop = this;
                        $image.trigger("jcrop", [null, jcrop]);
                    }).on("change select", function (e, c, j) {
                        var $image = $(this);
                        $image.siblings(".jcrop-x").val(c.x);
                        $image.siblings(".jcrop-y").val(c.y);
                        $image.siblings(".jcrop-w").val(c.w);
                        $image.siblings(".jcrop-h").val(c.h);
                    });
                });
            }
        }
    };
})(jQuery);

