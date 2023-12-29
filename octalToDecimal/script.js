const button = document.querySelector("button");

button.addEventListener('click', async function(){
    const inputNumber = document.querySelector("#input-octal");
    if(isNaN(inputNumber.value)){
        alert("Enter a Valid Number");
    } else {
        const octalNumbers = inputNumber.value;
        const decimalNumber = await convertOctalToDecimal(octalNumbers);
        displayResult(decimalNumber);
    }

});

function convertOctalToDecimal(octalNumbers){
    let result = 0;
    let j = 0;
    const octalNumber = Array.from(octalNumbers)
    for(let i = octalNumber.length - 1; i >= 0; i--){
        result += (8 ** i) * octalNumber[j];
        j++;
    }
    return result;
}

function displayResult(decimalNumber){
    const result = document.querySelector(".result");
    result.innerHTML = 
    `<h3>RESULT</h3>
    <p>${decimalNumber}</p>`;
}