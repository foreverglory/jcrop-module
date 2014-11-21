(function ($) {
    Drupal.behaviors.jcrop_avatar = {
        attach: function (context, settings) {
            $(".jcrop-box .jcrop-image.jcrop-processed", context).on("change select", function (e, c) {
                var $image = $(this);
                var rx = Drupal.settings.avatar.preview.width / c.w;
                var ry = Drupal.settings.avatar.preview.height / c.h;
                $('.avatar-thumb-image img').css({
                    width: Math.round(rx * $image.width()) + 'px',
                    height: Math.round(ry * $image.height()) + 'px',
                    marginLeft: '-' + Math.round(rx * c.x) + 'px',
                    marginTop: '-' + Math.round(ry * c.y) + 'px'
                });
            }).on("jcrop", function (e, c, j) {
                var $thumb = $('.avatar-thumb-image img', context);
                if ($thumb.length == 0) {
                    $thumb = $("<img>").appendTo($('.avatar-thumb-image', context));
                }
                $thumb.attr("src", $(this).attr("src"));
            });
        }
    };
})(jQuery);