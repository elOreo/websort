var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
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
    
    var fieldWidths = renderWindowWidth / number -1;

    var fields = []; // add array element mit array.push("element")
    
    for(c = 0; c < number; c++){
        var field = document.createElement("li");
        field.className = "fieldObj";
        fields.push(field);
        document.getElementById("fieldList").appendChild(field);
    }
    
}