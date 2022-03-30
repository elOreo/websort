var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var fields = [] //Array for all Fields
output.innerHTML = slider.value; // Display the default slider value
var interval = setInterval(bubbleInside, 800);
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
function clearRenderWindow(){
   //Check if there is an existing set and delete it.
   if(document.getElementById("renderwindow").children.length > 0){
    while (document.getElementById("renderwindow").firstChild) {
      document.getElementById("renderwindow").removeChild(document.getElementById("renderwindow").firstChild);
    }
  }
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function generateFields() {
    clearInterval(interval);
    var number = output.innerHTML;
    var renderWindow = document.getElementById("renderwindow");
    var renderWindowWidth = renderWindow.offsetWidth;
    var renderWindowHeight = renderWindow.offsetHeight;

    clearRenderWindow();
   
    var fieldWidths = Math.floor(renderWindowWidth / number -1);
    var fWidth = String(fieldWidths) + "px";

    fields = []; // Emptys array
    var min = Math.ceil(15);
    var max = Math.floor(renderWindowHeight -1);
    
    

    for(c = 0; c < number; c++){
        var getRandomHeight = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
        var field = document.createElement("div");
        field.className = "fieldObj";
        field.id = "f"+c;
        
        if(number<31){
          field.innerHTML = getRandomHeight;
        }
        else{
          field.innerHTML = "&nbsp;";
        }
        
        fields.push(field);
        document.getElementById("renderwindow").appendChild(field);
        document.getElementById("f"+c).style.width = fWidth;
        document.getElementById("f"+c).style.height = getRandomHeight + "px";
    }   
}

var checked;


function bubbleSort(){
  if(fields.length === 0){
    return;
  }
  let len = fields.length;
  interval = setInterval(bubbleInside, 400);
  
}

function bubbleInside(){
  let len = fields.length;
  checked = false;
  for (let i= 0; i<len-1; i++){
    if(fields[i].style.height > fields[i+1].style.height){
      let tmp = fields[i];
      fields[i] = fields[i+1];
      fields[i+1] = tmp;
      checked = true;
      clearRenderWindow();
      for(let j=0; j<len; j++){
          
        document.getElementById("renderwindow").appendChild(fields[j]);
      }
    }
  }
}

function test(){
  console.log("start");
  sleep(2000);
  console.log("fin");
}