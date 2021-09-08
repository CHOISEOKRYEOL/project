function add(num1, num2) {
    return num1 + num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2, 3); // add(2, 3), divide(2 ,3)
    console.log(result);
}

surprise(add);
surprise(divide);


