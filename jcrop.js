;
Drupal.jcrop = Drupal.jcrop || {};
(function ($) {
    function update(context, coords) {
        context = $(context);
        context.siblings(".edit-image-crop-x").val(coords.x);
        context.siblings(".edit-image-crop-y").val(coords.y);
        if (coords.w) {
            context.siblings(".edit-image-crop-width").val(coords.w);
        }
        if (coords.h) {
            context.siblings(".edit-image-crop-height").val(coords.h);
        }
        context.siblings(".edit-image-crop-changed").val(1);
    }
    Drupal.jcrop.jcrop = {
        change: function (context, coords) {
            update(context, coords);
        },
        select: function (context, coords) {
            update(context, coords);
        },
        dblclick: function (context, coords) {

        },
        release: function (context, coords) {

        }
    };
    Drupal.behaviors.jcrop = {
        attach: function (context, settings) {
            $('.cropbox', context).each(function () {
                var $this = $(this);
                var id = $this.attr("id");
                $(this).Jcrop({
                    onChange: function (c) {
                        $.each(Drupal.jcrop, function () {
                            if ($.isFunction(this.change)) {
                                this.change(context, c);
                            }
                        });
                    },
                    onSelect: function (c) {
                        $.each(Drupal.jcrop, function () {
                            if ($.isFunction(this.select)) {
                                this.select(context, c);
                            }
                        });
                    },
                    onDblClick: function (c) {
                        $.each(Drupal.jcrop, function () {
                            if ($.isFunction(this.dblclick)) {
                                this.dblclick(context, c);
                            }
                        });
                    },
                    onRelease: function (c) {
                        $.each(Drupal.jcrop, function () {
                            if ($.isFunction(this.release)) {
                                this.release(context, c);
                            }
                        });
                    },
                    aspectRatio: settings.jcrop[id].box.ratio,
                    boxWidth: settings.jcrop[id].box.box_width,
                    boxHeight: settings.jcrop[id].box.box_height,
                    minSize: [settings.jcrop[id].minimum.width, settings.jcrop[id].minimum.height],
                    trueSize: [
                        settings.jcrop[id].width,
                        settings.jcrop[id].height
                    ],
                    allowSelect: false,
                    setSelect: [
                        parseInt(widget.siblings(".edit-image-crop-x").val()),
                        parseInt(widget.siblings(".edit-image-crop-y").val()),
                        parseInt(widget.siblings(".edit-image-crop-width").val()) + parseInt($(widget).siblings(".edit-image-crop-x").val()),
                        parseInt(widget.siblings(".edit-image-crop-height").val()) + parseInt($(widget).siblings(".edit-image-crop-y").val())
                    ]
                });
            });
        }
    };
})(jQuery);

