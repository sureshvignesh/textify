$(document).ready(function() {
    setInterval("autoSave()", 60000);
});

function autoSave() {
    var data = CKEDITOR.instances.editor.getData();
    var doc_name = $('#document_name').val()
    var doc_page_id = $('#document_page_id').val()
    $.ajax({
	        type: "post",
	        url: "autosave",
	        data: { doc_name: doc_name, doc_page_id: doc_page_id, autosave: data },
		});
}
