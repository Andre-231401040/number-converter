const button = document.querySelector("button");

button.addEventListener('click', async function(){
    const inputNumber = document.querySelector("#input-hexa");
    let condition = cekCondition(inputNumber.value);
    if(condition){
        alert("Enter a Valid Number");
    } else {
        const hexaNumbers = inputNumber.value;
        const decimalNumber = await convertHexaToDecimal(hexaNumbers);
        displayResult(decimalNumber);
    }

});

function cekCondition(inputNumber){
    if(isNaN(inputNumber)){
        let arrayOfInputNumber = Array.from(inputNumber);
        for(let i = 0; i < arrayOfInputNumber.length; i++){
            if(isNaN(arrayOfInputNumber[i]) && arrayOfInputNumber[i] !== 'a' && arrayOfInputNumber[i] !== 'A' && arrayOfInputNumber[i] !== 'b' && arrayOfInputNumber[i] !== 'B' && arrayOfInputNumber[i] !== 'c' && arrayOfInputNumber[i] !== 'C' && arrayOfInputNumber[i] !== 'd' && arrayOfInputNumber[i] !== 'D' && arrayOfInputNumber[i] !== 'e' && arrayOfInputNumber[i] !== 'E' && arrayOfInputNumber[i] !== 'f' && arrayOfInputNumber[i] !== 'F' ){
                return true;
            }
        }
    }
    return false;
}

function convertHexaToDecimal(hexaNumbers){
    let result = 0;
    let j = 0;
    const hexaNumber = Array.from(hexaNumbers);
    for(let i = hexaNumber.length - 1; i >= 0; i--){
        if(hexaNumber[j]==='A' || hexaNumber[j]==='a'){
            result += (16 ** i) * 10;
        }else if(hexaNumber[j]==='B' || hexaNumber[j]==='b'){
            result += (16 ** i) * 11;
        }else if(hexaNumber[j]==='C' || hexaNumber[j]==='c'){
            result += (16 ** i) * 12;
        }else if(hexaNumber[j]==='D' || hexaNumber[j]==='d'){
            result += (16 ** i) * 13;
        }else if(hexaNumber[j]==='E' || hexaNumber[j]==='e'){
            result += (16 ** i) * 14;
        }else if(hexaNumber[j]==='F' || hexaNumber[j]==='f'){
            result += (16 ** i) * 15;
        }else{
            result += (16 ** i) * hexaNumber[j];
        }  
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