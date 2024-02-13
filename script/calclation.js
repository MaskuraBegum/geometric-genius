function calculateTriangle(){
    inputOfBase = document.getElementById('baseInput');
    baseStringToNumber = parseFloat(inputOfBase.value)

    inputOfHeight = document.getElementById('heightInput');
    heightStringToNumber = parseFloat(inputOfHeight.value);

    triangleArea = 0.5 * baseStringToNumber * heightStringToNumber;

    triangleText = document.getElementById('triangle-area');
    triangleText.innerText = triangleArea;
}