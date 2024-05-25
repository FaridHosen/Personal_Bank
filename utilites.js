function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField);
    const inputFieldValueString = inputField.value ;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
   
}

function getTextElementValueByid(elementId){
    const textElement =document.getElementById(elementId);
    const textElementValueSting = textElement.innerText;
    const textElementValue = parseFloat(textElementValueSting);
    return textElementValue;
}

function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}