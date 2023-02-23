function convertMoney() {
    let Amount = document.getElementById('Amount').value;
    let FromContr = document.getElementById('Form').value;
    let To = document.getElementById('To').value;
    let ketqua;
    if (FromContr == 'VND' && To == 'USD') {
        ketqua = Amount / 23000 + ' $'
    }
    else if (FromContr == 'USD' && To == 'VND') {
        ketqua = Amount * 23000 + ' VND'
    }
    else if (FromContr == 'VND' && To == 'VND'){
        ketqua = Amount + ' VND'
    }
    else if (FromContr == 'USD' && To == 'USD'){
        ketqua = Amount + ' $'
    }
    document.getElementById('Return').innerHTML = ketqua;
}