var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var fields = [] //Array for all Fields
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

function generateFields() {
    var number = output.innerHTML;
    var renderWindow = document.getElementById("renderwindow");
    var renderWindowWidth = renderWindow.offsetWidth;
    var renderWindowHeight = renderWindow.offsetHeight;

    //Check if there is an existing set and delete it.
    if(document.getElementById("renderwindow").children.length > 0){
      while (document.getElementById("renderwindow").firstChild) {
        document.getElementById("renderwindow").removeChild(document.getElementById("renderwindow").firstChild);
      }
    }
   
    var fieldWidths = Math.floor(renderWindowWidth / number -1);
    var fWidth = String(fieldWidths) + "px";

    fields = []; // Emptys array
    var min = Math.ceil(15);
    var max = Math.floor(renderWindowHeight -1);
    
    

    for(c = 0; c < number; c++){
        var getRandomHeight = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        console.log(getRandomHeight);
        var field = document.createElement("div");
        field.className = "fieldObj";
        field.id = "f"+c;
        
        if(number<21){
          field.innerHTML = getRandomHeight;
        }
        fields.push(field);
        document.getElementById("renderwindow").appendChild(field);
        document.getElementById("f"+c).style.width = fWidth;
        document.getElementById("f"+c).style.height = getRandomHeight + "px";
    }

    
    
}