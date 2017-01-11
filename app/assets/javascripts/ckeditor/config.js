/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E';

  /* Filebrowser routes */
  // // The location of an external file browser, that should be launched when "Browse Server" button is pressed.
  // config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
  //
  // // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
  // config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";
  //
  // // The location of a script that handles file uploads in the Flash dialog.
  // config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";
  //
  // // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
  // config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
  //
  // // The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
  // config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
  //
  // // The location of a script that handles file uploads in the Image dialog.
  // config.filebrowserImageUploadUrl = "/ckeditor/pictures";
  //
  // // The location of a script that handles file uploads.
  // config.filebrowserUploadUrl = "/ckeditor/attachment_files";
  config.autosave = 'autosave';
  config.autosaveTargetUrl = 'http://localhost:3000/autosave';
  CKEDITOR.editorConfig = function (config) {
  //config.assets_languages = ['en']
  config.setLang = ('dialog', 'en');
  config.setLang = ('lineutils', 'en');
  config.setLang = ('widget', 'en');
  config.setLang = ('codesnippet', 'en');

  config.extraPlugins = 'dialog';
  config.extraPlugins = 'dialogui';
  config.extraPlugins = 'lineutils';
  config.extraPlugins = 'clipboard';
  config.extraPlugins = 'widget';
  config.extraPlugins = 'codesnippet';
  }

  config.language = 'en';
  config.language_list = [ 'en:English', 'es:Spanish' ];


  config.allowedContent = true;

  // Toolbar groups configuration.
  config.toolbar = [
    // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
    // { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
    // { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
    // { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    // { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar' ] },
    // { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    // { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
    { name: 'insert', items: [  'Table', 'HorizontalRule', 'SpecialChar' ] },
    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'Save', groups: [ 'save' ], items: ['Source','Save','Preview','-', 'Autosave'] }
  ];

  config.toolbar_mini = [
    { name: 'paragraph',  items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    // { name: 'styles', items: [ 'Font', 'FontSize' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'insert', items: [  'Table', 'SpecialChar' ] }
  ];
};
