
var numberOfInputs = document.querySelectorAll(".no-outline").length;

for(var i=0;i<numberOfInputs;i++){
    document.querySelectorAll(".no-outline")[i].addEventListener("input",function(event){
        let length = event.target.value;
        let type = this.parentElement.parentElement.classList;
        calculation(type,length,numberOfInputs);
    });
}

function calculation(type,length){
    if(type.contains("mCard")){
        document.getElementById('kiloOutput').value=length/1000;
        document.getElementById('centiOutput').value=length*100;
        document.getElementById('miliOutput').value=length*1000;
    }
    else if(type.contains("kmCard")){
        document.getElementById('meterOutput').value=length*1000;
        document.getElementById('centiOutput').value=length*100000;
        document.getElementById('miliOutput').value=length*100000000;
    }
    else if(type.contains("cmCard")){
        document.getElementById('kiloOutput').value=length/100000;
        document.getElementById('meterOutput').value=length/100;
        document.getElementById('miliOutput').value=length*10;
    }
    else if(type.contains("mmCard")){
        document.getElementById('kiloOutput').value=length/1000000;
        document.getElementById('meterOutput').value=length/1000;
        document.getElementById('centiOutput').value=length/10;
    }
    cleanInputs(length);    
}

function cleanInputs(length){
    if(length==""){ 
           var lengthInputs= document.getElementsByTagName('input');
           for(var i=0;i<lengthInputs.length;i++){
            lengthInputs[i].value="";
           }
        }
}

