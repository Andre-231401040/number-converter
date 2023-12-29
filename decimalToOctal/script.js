const button = document.querySelector("button");

button.addEventListener('click', async function(){
    const inputNumber = document.querySelector("#input-decimal");
    if(isNaN(inputNumber.value)){
        alert("Enter a Valid Number");
    } else {
        const decimalNumber = inputNumber.value;
        const octalNumber = await convertDecimalToOctal(decimalNumber);
        displayResult(octalNumber);
    }

});

function convertDecimalToOctal(decimalNumber){
    let result = [];
    for(let i = 0; decimalNumber > 0; i++){
        result.unshift(decimalNumber % 8);
        decimalNumber /= 8;
        decimalNumber = Math.floor(decimalNumber);
    }

    return result.join("");
}

function displayResult(octalNumber){
    const result = document.querySelector(".result");
    result.innerHTML = 
    `<h3>RESULT</h3>
    <p>${octalNumber}</p>`;
}