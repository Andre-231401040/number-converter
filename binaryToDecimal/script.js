const button = document.querySelector("button");

button.addEventListener('click', async function(){
    const inputNumber = document.querySelector("#input-binary");
    if(isNaN(inputNumber.value)){
        alert("Enter a Valid Number");
    } else {
        const binaryNumbers = inputNumber.value;
        const decimalNumber = await convertBinaryToDecimal(binaryNumbers);
        displayResult(decimalNumber);
    }

});

function convertBinaryToDecimal(binaryNumbers){
    let result = 0;
    let j = 0;
    const binaryNumber = Array.from(binaryNumbers)
    for(let i = binaryNumber.length - 1; i >= 0; i--){
        result += (2 ** i) * binaryNumber[j];
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