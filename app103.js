var fistName = "Mark"; //global variable
function a() {
    //var msg: string = "Welcome to Typescript"; //local variable
    //var name:string = "Mark";
    var x = 30;
    return function b() {
        var y = x + 50;
        return y;
    };
}
//console.log(a()());//OK
var c = a();
console.log(c()); //OK
