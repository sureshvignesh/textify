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
  config.extraPlugins = 'liststyle';
  }

  config.language = 'en';
  config.language_list = [ 'en:English', 'es:Spanish' ];

  config.uiColor = '#2d2b2b';
  config.allowedContent = true;
  config.disableNativeSpellChecker = true;

  config.autoParagraph = false;
  config.enterMode = CKEDITOR.ENTER_BR;
  config.extraPlugins = "button-h1,button-h2,button-h3,button-h4,button-h5,button-h6,section";
  config.disallowedContent = 'br';
  // Toolbar groups configuration.
  config.toolbar = [
    // { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
    // { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
    // { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
    // { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    // { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'SpecialChar' ] },
    // { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    // { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'clipboard', groups: [ 'clipboard' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-' ] },
    { name: 'insert', items: [  'Table' ] },
    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent','-','JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    { name: 'editing', items: ['Scayt']},
    { name: 'styles', items: [  'Format',  ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'Save', groups: [ 'save' ], items: ['Save','Preview','-', 'Autosave'] }
  ];

  config.toolbar_mini = [
    { name: 'paragraph',  items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    // { name: 'styles', items: [ 'Font', 'FontSize' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    { name: 'insert', items: [  'Table', 'SpecialChar' ] }
  ];

  config.keystrokes =
  [
      [ CKEDITOR.ALT + 121 /*F10*/, 'toolbarFocus' ],
      [ CKEDITOR.ALT + 122 /*F11*/, 'elementsPathFocus' ],

      [ CKEDITOR.SHIFT + 121 /*F10*/, 'contextMenu' ],

      [ CKEDITOR.CTRL + 90 /*Z*/, 'undo' ],
      [ CKEDITOR.CTRL + 89 /*Y*/, 'redo' ],
      [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 90 /*Z*/, 'redo' ],

      [ CKEDITOR.CTRL + 76 /*L*/, 'link' ],

      [ CKEDITOR.CTRL + 66 /*B*/, 'bold' ],
      [ CKEDITOR.CTRL + 73 /*I*/, 'italic' ],
      [ CKEDITOR.CTRL + 85 /*U*/, 'underline' ],

      [ CKEDITOR.ALT + 109 /*-*/, 'toolbarCollapse' ],
      [ CKEDITOR.ALT + 65 /*A*/, 'anchor' ],
      [ CKEDITOR.CTRL + 77 /*M*/, 'indent' ],
      [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 77 /*M*/, 'outdent' ],
      [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 88 /*X*/, 'strike' ],
      [ CKEDITOR.CTRL + 13 /*ENTER*/, 'pagebreak' ],
      [ CKEDITOR.ALT + 13 /*ENTER*/, 'pagebreak' ],
      [ CKEDITOR.CTRL + 56 /*8*/, 'bulletedlist' ],
      [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 56 /*8*/, 'bulletedListStyle' ],
      [ CKEDITOR.CTRL + 73 /*I*/, 'italic' ],
      [ CKEDITOR.CTRL + 74 /*J*/, 'justifyblock' ],
      [ CKEDITOR.CTRL + 69 /*E*/, 'justifycenter' ],
      [ CKEDITOR.CTRL + 76 /*L*/, 'justifyleft' ],
      [ CKEDITOR.CTRL + 82 /*R*/, 'justifyright' ],
      [ CKEDITOR.CTRL + 55 /*7*/, 'numberedlist' ],
      [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 55 /*7*/, 'numberedListStyle' ],
      [ CKEDITOR.CTRL + 89 /*Y*/, 'redo' ],
      [ CKEDITOR.ALT + 68 /*D*/, 'creatediv' ],
      [ CKEDITOR.ALT + 72 /*H*/, 'horizontalrule' ],
      [ CKEDITOR.CTRL + CKEDITOR.SHIFT + 70 /*F*/, 'find' ],
      [ CKEDITOR.CTRL + 113 /*F2*/, 'preview' ],
      [ CKEDITOR.CTRL + 49 /*1*/, 'button-h1' ],
      [ CKEDITOR.CTRL + 50 /*2*/, 'button-h2' ],
      [ CKEDITOR.CTRL + 51 /*3*/, 'button-h3' ],
      [ CKEDITOR.CTRL + 52 /*4*/, 'button-h4' ],
      [ CKEDITOR.CTRL + 53 /*5*/, 'button-h5' ],
      [ CKEDITOR.CTRL + 54 /*6*/, 'button-h6' ],
      [ CKEDITOR.ALT + 83 /*S*/, 'section' ]

  ];
};
