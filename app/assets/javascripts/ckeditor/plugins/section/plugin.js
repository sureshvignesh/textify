(function() {
   var c = {
           exec: function(editor) {
               var a = CKEDITOR.instances.editor.getSelectedHtml();
               var c_length = a.$.children.length
               var merge_text = ""
               var first_line = ""
               for (i = 0; i < c_length; i++) {
                   merge_text += "<p>"
                   merge_text += a.$.children[i].textContent
                   merge_text += "</p>"
                   merge_text += "\n"
                   merge_text += "\n"
               }
               first_line = a.$.children[0].textContent
               var document_text = CKEDITOR.instances.editor.getData();
               var merge = merge_text.replace(/<p>/g, "");
               merge = merge_text.replace(/<\/?p[^>]*>/g, "");
               merge = "<div id="+first_line.split(' ')[0]+" >" + merge + "</div>"

               var text = document_text.replace(merge_text, merge);
               CKEDITOR.instances['editor'].setData(text);
               console.log(merge_text);
               console.log(merge);
           }
       },

       b = "section";
   CKEDITOR.plugins.add(b, {
       init: function(editor) {
           editor.addCommand(b, c);
           editor.ui.addButton(b, {
               label: "Section",
               icon: this.path + "section.png",
               command: b
           });

       }
   });
})();
