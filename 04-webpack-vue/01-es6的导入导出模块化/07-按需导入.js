
//1. 导入模块成员, 并使用as 进行重命名
import info, { s1 as str1, s2 as str2, say } from './06-按需导出.js'

console.log(str1)
console.log(str2)
console.log(say)


// 2. 使用 node ./07-按需导入.js   执行查看结果


/* 

    按需导入的语法: import {s1} from '模块标识符'




    按需导出和按需导入的注意事项
    1.每个模块中可以使用多次按需导出
    2.按需导入的成员成名必须和按需导出的名称保持一致
    3.按需导入时，可以使用as关键字进行重命名
    4.按需导入可以和默认导入一起使用




*/