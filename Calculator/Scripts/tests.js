module("Calculator test suite", { setup: function () { initialize(); }});

test("Number button click should add number to txtInput", function () {
    expect(20);
    for (var i = 0; i < 10; i++) {
        var btn = document.getElementById("btn" + i);
        QUnit.triggerEvent(btn, "click");
        var value = txtInput.value;
        var lastDigit = value[value.length-1];
        equal(lastDigit, i);
        equal(value.length, i<2 ? 1 : i);
    }
});

test("Initial result is 0", function() {
    expect(1);
    equal(txtInput.value, "0");
});

test("Add test", function () {
    expect(1);
    txtInput.value = "20";
    txtResult.value = "30";
    QUnit.triggerEvent(btnPlus, "click");
    equal(txtResult.value, "50");
});

test("Input is cleared after each operation", function() {
    expect(1);
    txtInput.value = "20";
    QUnit.triggerEvent(btnPlus, "click");
    equal(txtInput.value, "");
    //txtInput.value = "20";
    //QUnit.triggerEvent(btnMinus, "click");
    //equal(txtInput.value, "");
});