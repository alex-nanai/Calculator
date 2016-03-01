var txtInput, txtResult, btnPlus, btnMinus;

function initialize() {
    txtInput = document.getElementById("txtInput");
    txtResult = document.getElementById("txtResult");
    btnPlus = document.getElementById("btnPlus");
    btnMinus = document.getElementById("btnMinus");
    for (var i = 0; i < 10; i++) {
        document.getElementById("btn"+i).addEventListener("click", numberClick, false);
    }
    btnPlus.addEventListener("click", sumClick, false);

    txtResult.value = "0";
}

function numberClick() {
    var buttonClickedText = this.innerText;
    txtInput.value = !txtInput.value ?
        buttonClickedText :
        txtInput.value + buttonClickedText;
}

function sumClick() {
    txtResult.value = String(parseInt(txtResult.value) + parseInt(txtInput.value));
}