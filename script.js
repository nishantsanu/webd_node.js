
var buttons=document.getElementsByClassName('button');
var display=document.getElementById("display");
var operand1=0;
var operand2=null;
var operator=null;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
    var value=this.getAttribute('data-value');
    
    if(value=='ac'){
        operand1=0;
        operand2=null;
        operator=null;
        display.innerText='';
    }
    else if(value=='sign'){
        if(!display.textContent==''){
        display.innerText=-1*parseFloat(display.textContent);
        }
    }
    else if(value=='+'||value=='-'||value=='*'||value=='/'){
        operator=value;
        if(!display.textContent==''){
            operand1=parseFloat(display.textContent);
            display.innerText='';
        }
       
    }
    else if(value=='%'){
        if(!display.textContent==''){
            parseFloat(display.textContent)*.01;
            display.innerText=parseFloat(display.textContent)*.01;
        }
    }
    else if(value=='='){
        operand2=parseFloat(display.textContent);
        var ans=eval(operand1 +" "+ operator + " " + operand2);
        display.innerText=ans;
        operand1=ans;
    }
    else{
        console.log('hey');
        display.innerText +=value;
    }





    });
}