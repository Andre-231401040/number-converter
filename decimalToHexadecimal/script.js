const button = document.querySelector("button");

button.addEventListener('click', async function(){
    const inputNumber = document.querySelector("#input-decimal");
    if(isNaN(inputNumber.value)){
        alert("Enter a Valid Number");
    } else {
        const decimalNumber = inputNumber.value;
        const hexadecimalNumber = await convertDecimalToHexa(decimalNumber);
        displayResult(hexadecimalNumber);
    }

});

function convertDecimalToHexa(decimalNumber){
    let result = [];
    for(let i = 0; decimalNumber > 0; i++){
        let modulo = 0;
        modulo = decimalNumber % 16;
        if(modulo === 10){
            result.unshift('A');
        }else if(modulo === 11){
            result.unshift('B');
        }else if(modulo === 12){
            result.unshift('C');
        }else if(modulo === 13){
            result.unshift('D');
        }else if(modulo === 14){
            result.unshift('E');
        }else if(modulo === 15){
            result.unshift('F');
        }else{
            result.unshift(modulo);
        }
        decimalNumber /= 16;
        decimalNumber = Math.floor(decimalNumber);
    }

    return result.join("");
}

function displayResult(hexadecimalNumber){
    const result = document.querySelector(".result");
    result.innerHTML = 
    `<h3>RESULT</h3>
    <p>${hexadecimalNumber}</p>`;
}