<?php

/**
 * Implements hook_field_widget_info().
 */
function jcrop_field_widget_info() {
  return array(
    'jcrop' => array(
      'label' => t('Jcrop'),
      'field types' => array('image'),
      'settings' => array(
        'progress_indicator' => 'throbber',
        'preview_image_style' => 'thumbnail',
      ),
      'behaviors' => array(
        'multiple values' => FIELD_BEHAVIOR_CUSTOM,
        'default value' => FIELD_BEHAVIOR_NONE,
      ),
    ),
  );
}

/**
 * Implements hook_field_widget_settings_form().
 */
function jcrop_field_widget_settings_form($field, $instance) {
  $widget = $instance['widget'];
  $settings = $widget['settings'];
  $form = array();
  if ($widget['type'] == 'jcrop') {
    
  }
  return $form;
}
