;
Drupal.jcrop = Drupal.jcrop || {};
(function ($) {
    Drupal.jcrop.jcrop = {
        change: function (box, coords) {
            jcrop_update(box, coords);
        },
        select: function (box, coords) {
            jcrop_update(box, coords);
        },
        dblclick: function (box, coords) {

        },
        release: function (box, coords) {

        }
    };
    function jcrop_update(box, coords) {
        $(".jcrop-x", box).val(coords.x);
        $(".jcrop-y", box).val(coords.y);
        $(".jcrop-w", box).val(coords.w);
        $(".jcrop-h", box).val(coords.h);
    }
    Drupal.behaviors.jcrop = {
        attach: function (context, settings) {
            $('.jcrop-box', context).each(function () {
                var $box = $(this);
                $(".jcrop-image", $box).one("load", function () {
                    var options = $.extend(settings.jcrop[$box.attr("id")] || {}, {
                        onChange: function (c) {
                            $.each(Drupal.jcrop, function () {
                                if ($.isFunction(this.change)) {
                                    this.change($box, c);
                                }
                            });
                        },
                        onSelect: function (c) {
                            $.each(Drupal.jcrop, function () {
                                if ($.isFunction(this.select)) {
                                    this.select($box, c);
                                }
                            });
                        },
                        onDblClick: function (c) {
                            $.each(Drupal.jcrop, function () {
                                if ($.isFunction(this.dblclick)) {
                                    this.dblclick($box, c);
                                }
                            });
                        },
                        onRelease: function (c) {
                            $.each(Drupal.jcrop, function () {
                                if ($.isFunction(this.release)) {
                                    this.release($box, c);
                                }
                            });
                        }
                    });
                    $(this).Jcrop(options);
                }).trigger("load");
            });
        }
    };
})(jQuery);

