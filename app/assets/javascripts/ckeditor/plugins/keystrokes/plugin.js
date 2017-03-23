// Keyboard shortcuts for headings 1-6, p
( function() {
      CKEDITOR.plugins.add( 'keystrokes', {
        init: function( editor ) {
            editor.setKeystroke( CKEDITOR.CTRL + 81, '' ); // CTRL+Q
        }
    } );
} )();
