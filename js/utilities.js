export const inputMoney = (id) => {
    const input = document.getElementById(id),
    inputStrVal = input.value;
    input.value = "";
    return parseFloat(inputStrVal)
}
export const textMoney = (id) => {
    const spanTag = document.getElementById(id),
    spanTagStrVal = spanTag.innerText;
    spanTag.value = "";
    return parseFloat(spanTagStrVal)
}
export const setValue = (id, value) => {
    document.getElementById(id).innerText = value;
}