(function(){
var a=
{
    exec:function(editor){
        var format = {
        element : "div"
        };
    var style = new CKEDITOR.style(format);
    style.apply(editor.document);
    }
},

b="section";
CKEDITOR.plugins.add(b,{
    init:function(editor){
    editor.addCommand(b,a);
    editor.ui.addButton(b,{
    label:"Section",
    icon: this.path + "section.png",
    command:b
    });
    }
});
})();
