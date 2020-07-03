chrome.storage.sync.get(['value'], function(my_words) {
  chrome.storage.sync.get(['result'], function(my_definitions) {
    var definition_list = my_definitions.result;
    var word_list = my_words.value;
    for (i = 0; i < word_list.length; i++) {
      var node = document.createElement("LI");
      var close = document.createElement("SPAN");
      var word_para = document.createElement("BODY");
      var def_para = document.createElement("BODY");
      close.className = "close";
      word_para.className = "word";
      def_para.className = "definition";
      var word_node = document.createTextNode(word_list[i]);
      var def_node = document.createTextNode(definition_list[i]);
      var close_node = document.createTextNode('\u00d7');
      word_para.appendChild(word_node);
      def_para.appendChild(def_node);
      close.appendChild(close_node);
      close.addEventListener('click', function() { //adds in event listener
        this.parentElement.style.display = 'none';
      });
      node.appendChild(word_para);
      node.appendChild(def_para);
      node.appendChild(close);
      document.getElementById("my_list").appendChild(node);
    }
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//     var exes = document.getElementsByClassName("close");
//     alert(exes.length);
//     for (i = 0; i < exes.length; i++) {
//       alert("HEY1");
//        exes[i].addEventListener('click', function() {
//            alert("HEY!!");
//        });
//      }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var link = document.getElementById('link');
//     // onClick's logic below:
//     link.addEventListener('click', function() {
//         hellYeah('xxx');
//     });
// });
