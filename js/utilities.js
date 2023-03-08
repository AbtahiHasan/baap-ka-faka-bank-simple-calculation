export const inputMoney = (id) => {
    const input = document.getElementById(id);
    if(input.value === "") {
        alert("Input cannot blank");
    } else if (isNaN(input.value)) {
        alert("please valid number")
    }
    else if (input.value < 0) {
        alert("please valid positive amount")
    }
    else {
    const inputStrVal = input.value;
    input.value = "";
    return parseFloat(inputStrVal)
    }
    input.value = "";
    
}
export const textMoney = (id) => {
    const spanTag = document.getElementById(id),
    spanTagStrVal = spanTag.innerText;
    return parseFloat(spanTagStrVal)
}
export const setValue = (id, value) => {
    if(!isNaN(value)) {
        document.getElementById(id).innerText = value;
    }
}