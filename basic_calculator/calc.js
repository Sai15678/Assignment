let userinput = document.getElementById("input")
let expression =""
userinput.value=0

function click1(x){
    expression = expression+x
    userinput.value=expression

}
function equal(){
    expression=eval(expression)
    userinput.value=expression
}
function erase(){
    expression = ""
    userinput.value = expression

}