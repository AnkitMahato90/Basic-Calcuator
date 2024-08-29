const buttons=document.querySelectorAll("button");
const inputField=document.getElementById("result");

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click",()=>{
        const buttonValue=buttons[i].textContent;
        if(buttonValue === 'C'){
            clearResult();
        }else if(buttonValue === '='){
            calculateResult();
        }else if (buttonValue === "DEL") { // Assuming "DEL" button for delete
            deleteValue();
        }else{
            appendValue(buttonValue);
        }
    })
}

function clearResult(){
    inputField.value="";
}

function calculateResult(){
    //inputField.value= eval(inputField.value);
    try {
        const result = new Function("return " + inputField.value)();
        inputField.value = result;
    } catch (e) {
        inputField.value = "Error";
    }
}

function deleteValue() {
    inputField.value = inputField.value.slice(0,-1);
  }

function appendValue(buttonValue){
    inputField.value += buttonValue;
}