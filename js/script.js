import {inputMoney, textMoney,  setValue} from "./utilities.js";

const depositForm = document.getElementById("deposit-form"),
    withdrawForm = document.getElementById("withdraw-form");



const deposit = (e) => {
    e.preventDefault();
    const previusTotal = textMoney("deposit-total"),
        inputValue = inputMoney("deposit-input");
    const totalDeposit = previusTotal + inputValue;
    setValue("deposit-total", totalDeposit)
    setValue("total", totalDeposit)    
}
const withdraw = (e) => {
    e.preventDefault();
    const previusWithdrawTotal = textMoney("withdraw-total"),
        previusTotal = textMoney("total"),
    inputValue = inputMoney("withdraw-input");
    const totalWithdraw = previusWithdrawTotal + inputValue;
    const total = previusTotal - inputValue;
    setValue("withdraw-total", totalWithdraw)
    setValue("total", total)    
}

depositForm.addEventListener("submit", deposit)
withdrawForm.addEventListener("submit", withdraw)