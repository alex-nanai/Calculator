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

test("Add test", function () {
    expect(1);
    txtInput.value = "20";
    txtResult.value = "30";
    QUnit.triggerEvent(btnPlus, "click");
    equal(txtResult.value, "50");
});