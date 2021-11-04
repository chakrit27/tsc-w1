const num1: number = 1; //global variable;

function varDeclaration(){
    var num2: number = 2; //local variable
    if(num2 > num1) {
        console.log("True");
    }
}
varDeclaration();