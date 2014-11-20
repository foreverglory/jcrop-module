<?php

// PHP Code

function jcrop_example_form() {
  $form['image'] = array(
    '#title' => t('Upload image'),
    '#type' => 'managed_file',
    '#description' => t('Through jcrop.js treatment to upload picture.'),
    '#upload_location' => 'public://example_files/',
    '#file_extensions' => 'png gif jpg jpeg',
    //setting jcrop
    '#jcrop' => array(
    ),
  );
  return $form;
}
?>
<script>
  (function ($) {
      Drupal.behaviors.jcrop_example = {
          attach: function (context, settings) {
              $(".jcrop-box .jcrop-image", context).on("load", function (e, c) {
                  // js code
                  // load jcrop image hook
              }).on("select", function (event, coords, jcrop) {
                  // js code
                  // onSelect jcrop image hook
              }).on("change", function (event, coords, jcrop) {
                  // js code
                  // onChange jcrop image hook
              }).on("dblclick", function (event, coords, jcrop) {
                  // js code
                  // onDblClick jcrop image hook
              }).on("release", function (event, coords, jcrop) {
                  // js code
                  // onRelease jcrop image hook
              });
          }
      };
  })(jQuery);
</script>
<?php

