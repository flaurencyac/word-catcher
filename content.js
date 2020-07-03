word_list = [];
definition_list = [];

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "save_me") {
      chrome.storage.sync.get(['value'], function(my_words) {
        chrome.storage.sync.get(['result'], function(my_definitions) {
        var word_list;
        var definition_list;
        if (typeof my_words.value === 'undefined') {
          word_list = [];
          definition_list = [];
        }
        else {
          word_list = my_words.value;
          definition_list = my_definitions.result;
        }
        var selected = (window.getSelection().toString()).split(" ");
        word_list.push(selected);
        definition_list.push(get_definition(selected));
        chrome.storage.sync.set({'value': word_list});
        chrome.storage.sync.set({'result': definition_list});
        alert("Your word has been saved.");
        });
      });
    }
  }
);

function get_definition(word) {
    var url = "https://owlbot.info/api/v2/dictionary/" + word;
    var wordrequest = new XMLHttpRequest();
  	wordrequest.open('GET', url, false);
  	wordrequest.send();
  	var dict = JSON.parse(wordrequest.responseText);
    var def = "(" + dict[0].type + ") " + dict[0].definition;
    return def;
}
