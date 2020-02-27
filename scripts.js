console.log("JS linked successfully. Dummy.");

//Create Global Variables
var ListArea = document.getElementById("ListArea");
var AddButton = document.getElementById("AddButton");
var ListCount = 0;

//Make Enter key activate the button
var input = document.getElementById("InputBox");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    AddButton.click();
  }
});


function addItem (){

  //Grab the text from the input box
  var InputText = document.getElementById("InputBox").value;

  //Check if Anything is written the box
  if (InputText == ""){
    return
  }

  //Create Checkbox
  var ListElement = document.createElement('input');
  ListElement.type = "checkbox";
  ListElement.id = "item" + ListCount.toString();
  ListElement.value = "item" + ListCount.toString();
  ListElement.classList.add("todo-item");

  //Create label for Checkbox
  var ListLabel = document.createElement('label');
  ListLabel.htmlFor = "item" + ListCount.toString();
  var ListText = document.createTextNode(InputText);
  ListLabel.classList.add("todo-label");
  ListLabel.appendChild(ListText);

  //Create Delete button
  var DelBtn = document.createElement('button');
  DelBtn.addEventListener("click", function removeItem(){
    this.parentNode.parentNode.removeChild(this.parentNode);
  });
  DelBtn.appendChild(document.createTextNode("Delete"));

  //Combine Label and Checkbox into div
  var ListAreaDiv = document.createElement('div');
  ListAreaDiv.classList.add("list-item")
  ListAreaDiv.appendChild(DelBtn);
  ListAreaDiv.appendChild(ListElement);
  ListAreaDiv.appendChild(ListLabel);


  //Add Label and Checkbox to the DOM
  ListArea.appendChild(ListAreaDiv);


  //Increment Counter
  ListCount = ListCount + 1;
  console.log(ListCount);

  //Clear input box
  document.getElementById("InputBox").value = "";
}
