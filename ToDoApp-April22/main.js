//destination += value
//var filling = "Andrew";
//'<p>' + filling + '</p>'
"use strict";
var toDoCounter = 0;
var toDoListArray = [];

var tableObject = {
    top: 'Shiny',
    legs: 4,
    surface: 'Wooden',
    screws: {phillips: 5, flathead: 15},
    dimensions: [12, 36, 60],
    inUse: true,
    foldUp: function () {
        return this.legs = 0;
    },
    unFold: function () {
        this.legs = 4;
    }
};

var result = tableObject['foldUp']();

var result2 = tableObject['unFold']();

for (var tablePropName in tableObject) {
    tableObject[tablePropName];
}



var elementDoSomething = function () {
    "use strict";
    //Setup
    toDoCounter = toDoCounter + 1;
    var inputValue = document.getElementById("todoInput");
    var outputOrderedList = document.getElementById("todoUnorderedList");

    //Grab value from document and push into array
    toDoListArray.push(document.getElementById("todoInput").value);

    document.getElementById("todoUnorderedList").innerHTML = " ";

    //Sending a single list item to page
    for (var i = 0; i < toDoListArray.length; i++) {
    outputOrderedList.innerHTML = outputOrderedList.innerHTML +
        '<li id="item' + toDoCounter + '" onclick="strikeOutListItem(\'item' + toDoCounter + '\');">' + toDoListArray[i] + '</li>';
    }
    

};

var strikeOutListItem = function (listItemId) {
    "use strict";
    document.getElementById(listItemId).setAttribute("class", "strikethrough");
};