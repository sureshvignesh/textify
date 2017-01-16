(function(){
var a=
{
    exec:function(editor){
        var format = {
        element : "h1"
        };
    var style = new CKEDITOR.style(format);
    style.apply(editor.document);
    }
},

b="button-h1";
CKEDITOR.plugins.add(b,{
    init:function(editor){
    editor.addCommand(b,a);
    editor.ui.addButton(b,{
    label:"Heading 1",
    icon: this.path + "heading-1.png",
    command:b
    });
    }
});
})();
