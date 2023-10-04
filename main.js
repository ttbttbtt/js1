
function sum(){
    let num1=document.getElementsByClassName("number")[0].value
    let num2=document.getElementsByClassName("number")[1].value
    let sum=Number(num1)+Number(num2)
    let result=document.querySelector(".result")
    result.innerHTML="Результат: "+sum
}
function sr_ariph(){
    let num1=document.getElementsByClassName("number")[0].value
    let num2=document.getElementsByClassName("number")[1].value
    let sum=(Number(num1)+Number(num2))/2
    let result=document.querySelector(".result")
    result.innerHTML="Результат: "+sum
}
function sr_ariph_kv(){
    let num1=document.getElementsByClassName("number")[0].value
    let num2=document.getElementsByClassName("number")[1].value
    let sum=(Number(num1)**2+Number(num2)**2)/2
    let result=document.querySelector(".result")
    result.innerHTML="Результат: "+sum
}


function add(param){
    let sym=param
    let typing=document.querySelector(".typing")
    typing.innerHTML+=sym
}
function calcul(){
    // let mas=document.querySelector(".typing").innerText // так тоже работает !!!
    let mas=document.getElementsByClassName('typing')[0].innerHTML
    let sum=0
    let n1=0
    let znak='+'
    let n2=0
    let i=0
    for (i = 0; i < mas.length; i++) {
        if (mas[i]=='+' || mas[i]=='-' || mas[i]=='*' || mas[i]=='/'){
            n1=mas.substring(0,i)
            znak=mas.substring(i,i+1)
            n2=mas.substring(i+1)   // ,mas.length
            // console.log(n1)
            // console.log(znak)
            // console.log(n2)
            break
        }
    }
    if (znak=='+'){
        sum=Number(n1)+Number(n2)
    }
    else if (znak=='-'){
        sum=Number(n1)-Number(n2)
    }
    else if (znak=='*'){
        sum=Number(n1)*Number(n2)
    }
    else {
        sum=Number(n1)/Number(n2)
    }
    // console.log(sum)
    let typing=document.querySelector(".typing")
    typing.innerHTML=sum
}
function clean(){
    let sum=''
    let typing=document.querySelector(".typing")
    typing.innerHTML=sum
}