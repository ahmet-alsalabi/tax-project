let changeTax = () => {
    
    let firInpValue = +document.getElementById("firInp").value;
    let secInpValue = +document.getElementById("secInp").value;
    

    let taxCalc = (secInpValue / 100) * firInpValue;
    let total = firInpValue + taxCalc;

    document.getElementById("result").textContent = total;

}