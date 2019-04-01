// Note that we aren't querying .getElement everytime in the code
// Instead we are storing it in a variable (as an object?) for faster processing time
// So we retrieve the element data ONCE and then use the variables
var enterBtn = document.getElementById("enterBtn");
var listField = document.getElementById("userInput");
var shoppingList = document.querySelector("ul");
var shoppingListArray = document.querySelectorAll("li");

// After code has been refactored, each piece of functionality has been
// broken down into individual functions; total of 5 shown below
function addToList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(listField.value));
  shoppingList.appendChild(li);
  listField.value = "";
}

// Is the field value length greather than zero aka is there ~something~ typed in?
function validInput() {
  return listField.value.length;
}

// Handling mouse click events
function clickEvent() {
  if (validInput() > 0) {
    addToList();
  }
}

// Handling keyboard press (enter) events
function keyEvent(event) {
  // See above, it thas the (event) parameter, and this is required for keyboard items but I'm
  // not really sure why that's needed....but it's required for the code to function properly
  if (validInput() > 0 && event.which === 13) {
    addToList();
  }
}

// Here we actually add the event listener for the mouse click or keyboard press
// and these reference the functions above
enterBtn.addEventListener("click", clickEvent);
listField.addEventListener("keypress", keyEvent);

shoppingList.addEventListener("click", function() {
  for (var i = event.path[1].children.length - 1; i >= 0; i--) {
    if (event.path[0].innerText === event.path[1].children[i].innerText) {
      shoppingListArray[i].classList.toggle("done");
      break;
    }
  }
});
