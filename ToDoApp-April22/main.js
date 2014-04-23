//destination += value
//var filling = "Andrew";
//'<p>' + filling + '</p>'
"use strict";
var toDoCounter = 0;

var elementDoSomething = function () {
    "use strict";
    toDoCounter = toDoCounter + 1;
    var inputValue = document.getElementById("todoInput");
    var outputOrderedList = document.getElementById("todoUnorderedList");

    outputOrderedList.innerHTML = outputOrderedList.innerHTML +
        '<li id="item' + toDoCounter + '" onclick="strikeOutListItem(\'item' + toDoCounter + '\');">' + inputValue.value + '</li>';
};

var strikeOutListItem = function (listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
};