$(document).ready(function() {
    setInterval("autoSave()", 60000);
    $('#previewButton').click( function () {
        var contents = CKEDITOR.instances.editor.getData();
        var mywin = window.open("", "ckeditor_preview", "location=0,status=0,scrollbars=0,width=500,height=500");

        $(mywin.document.body).html(contents);
    });
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
