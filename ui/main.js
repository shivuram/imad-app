//counter code
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
};
//Make a Request to counter endpoint
var request = new XMLHttpRequest();
request.onreadystatechange = function()
{
    if(request.readystate===XMLHttpRequest.DONE){
        if(request.state === 200){
            counter = counter+1;
            var span = document.getElementById('count');
            span.innerhtml = counter.tostring();
        }
    }
};