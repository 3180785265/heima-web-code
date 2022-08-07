
/**
解释：
找到跟小括号里数据全等的case值，并执行里面对应的代码
若是没有全等=== 的 则执行default中的代码
例如： 数据若跟值2全等，则执行代码2 

switch case 一般用于等值判断，不适合区间判断
一般配置brek关键字使用，没有brek会造成case穿透


 */


// 会输入 2 ，

switch (2) {
    case 1:
        alert('1')
        break  //直接brek结束，否则他会继续向下执行造成case穿透

    case 2:
        alert('2')
        break
    case 3:
        alert('3')
        break

    default:
        alert('没有数据') // 如果没有匹配的case，则匹配到defulat ,类似else

}


let b = '星期一'

switch (b) {
    case '星期1':
        alert('1')
        break;
    case '星期2':
        alert('2')
        break;
    case '星期3':
        alert('3')
        break;
    case '星期4':
        alert('4')
        break;
}
