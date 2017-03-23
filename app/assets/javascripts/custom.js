$(document).ready(function() {
    // setInterval("autoSave()", 10000);
    // $('#previewButton').click( function () {
    //     var contents = CKEDITOR.instances.editor.getData();
    //     var mywin = window.open("", "ckeditor_preview", "location=0,status=0,scrollbars=0,width=500,height=500");
    //
    //     $(mywin.document.body).html(contents);
    // });
    var editor = CKEDITOR.instances.editor;
    editor.addCommand("mySimpleCommand", { // create named command
        exec: function(edt) {
        var a = CKEDITOR.instances.editor.getSelectedHtml();
        var c_length = a.$.children.length
        var merge_text = ""
        for (i= 0; i< c_length;i++){
          merge_text += a.$.children[i].textContent
          merge_text += " "
        }
        var range = CKEDITOR.instances.editor.getSelection().getRanges()[ 0 ];
        range.deleteContents();
        range.select();
        CKEDITOR.instances.editor.insertText(merge_text)

        }
    });
    editor.keystrokeHandler.keystrokes[CKEDITOR.ALT + 66 /* B */] = 'mySimpleCommand';
    // editor.on( 'contentDom', function() {
    //     var editable = editor.editable();
    //     editable.attachListener( editable, 'click', function() {
    //
    //         var range = editor.getSelection().getRanges()[ 0 ];
    //         var startNode = range.startContainer;
    //         var page_no = startNode.$.getAttributeNode("page_no").value;
    //         console.log(page_no);
    //     } );
    //
    // } );;

    // var element = CKEDITOR.document.getById('sidenote');
    // element.on('click', function (ev) {
    //
    //     alert("Click");
    // });
    //
    // var range = editor.getSelection().getRanges()[ 0 ];
    // var startNode = range.startContainer;
    // var page_no = startNode.$.getAttributeNode("page_no").value;
    // console.log(page_no);
});

function autoSave() {
    var data = CKEDITOR.instances.editor.getData();
    var doc_name = $('#document_name').val()
    var doc_page_id = $('#document_page_id').val()
    $.ajax({
	        type: "post",
	        url: "/home/autosave",
	        data: { doc_name: doc_name, doc_page_id: doc_page_id, autosave: data },
		});
}
