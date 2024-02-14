function calculateTriangle(){
    inputOfBase = document.getElementById('baseInput');
    baseStringToNumber = parseFloat(inputOfBase.value)

    inputOfHeight = document.getElementById('heightInput');
    heightStringToNumber = parseFloat(inputOfHeight.value);

    triangleArea = 0.5 * baseStringToNumber * heightStringToNumber;

    triangleText = document.getElementById('triangle-area');
    triangleText.innerText = triangleArea;
}
function calculateRectangle(){
    rectangleArea = getTheElement('widthInput') * getTheElement('lengthInput');
    getTheResult('ractangel-area',rectangleArea);
    
}

function getTheElement(inputField){
    firstInput = document.getElementById(inputField);
    stringToNumber = parseFloat(firstInput.value);
    return stringToNumber;
}

function getTheResult(id , area){
    text = document.getElementById(id);
    text.innerText = area;
    //return text.innerText;
}