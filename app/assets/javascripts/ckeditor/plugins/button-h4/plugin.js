(function(){
var a=
{
    exec:function(editor){
        var format = {
        element : "h4"
        };
    var style = new CKEDITOR.style(format);
    style.apply(editor.document);
    }
},

b="button-h4";
CKEDITOR.plugins.add(b,{
    init:function(editor){
    editor.addCommand(b,a);
    editor.ui.addButton(b,{
    label:"Heading 4",
    icon: this.path + "heading-4.png",
    command:b
    });
    }
});
})();
