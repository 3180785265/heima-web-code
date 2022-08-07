

//用户输入两个值   并输入+ 或者 -完成计算器

let num1 = prompt()
let num2 = prompt()
let f = prompt()




switch (f) {
    case '+':
        alert( parseFloat(num1)+parseFloat(num2))
        break;
    case '-':
        alert( parseFloat(num1)-parseFloat(num2))
        break;
    case '*':
        alert( parseFloat(num1)*parseFloat(num2))
        break;
    case '/':
        alert( parseFloat(num1)/parseFloat(num2))
        break;

    default:
        alert('错误')
}




