var num1 = 1;
function letDeclaration() {
    var num2 = 2;
    if (num2 > num1) {
        var num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        var num4 = 4;
        num1++;
    }
    console.log(num1); //OK
    console.log(num2); //OK
    console.log(num3); //Compiler Error: connot find name 'num3'
    console.log(num4); //Compiler Error: connot find name 'num4'
}
letDeclaration();
