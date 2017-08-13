//counter code
var button = document.getElementById('counter');
var counter = 0; 
button.onclick = function(){
//Make a Request to counter endpoint

//capture the response and store it in variable

//Render the variable in coreect span
counter = counter +1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
};