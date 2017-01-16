(function(){
var a=
{
    exec:function(editor){
        var format = {
        element : "h6"
        };
    var style = new CKEDITOR.style(format);
    style.apply(editor.document);
    }
},

b="button-h6";
CKEDITOR.plugins.add(b,{
    init:function(editor){
    editor.addCommand(b,a);
    editor.ui.addButton(b,{
    label:"Heading 6",
    icon: this.path + "heading-6.png",
    command:b
    });
    }
});
})();
