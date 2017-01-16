(function(){
var a=
{
    exec:function(editor){
        var format = {
        element : "h2"
        };
    var style = new CKEDITOR.style(format);
    style.apply(editor.document);
    }
},

b="button-h2";
CKEDITOR.plugins.add(b,{
    init:function(editor){
    editor.addCommand(b,a);
    editor.ui.addButton(b,{
    label:"Heading 2",
    icon: this.path + "heading-2.png",
    command:b
    });
    }
});
})();
