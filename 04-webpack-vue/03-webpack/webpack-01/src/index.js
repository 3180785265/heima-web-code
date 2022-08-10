import $ from "jquery";

// 用es6 的导入语法，将css样式表导入过来，才能将css文件打包压缩
import './style/index.css'
import './style/index.less'
import './style/insex.scss'
$(function () {
    // 选中奇数 
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css('backgroundColor', 'red')

})


// js的高级语法

class Person{
    static info='a'
}