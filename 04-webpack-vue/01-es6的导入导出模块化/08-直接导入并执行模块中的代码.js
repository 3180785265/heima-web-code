
// 1.这是一个要被导入并执行的模块


for (let i = 0; i < 3; i++) {
    console.log(i)
}

/* 
    直接导入并执行模块中的代码
    如果只想单纯地执行某个模块中的代码，并不需要得到模块中向外共享的成员，此时，可以直接导入并执行模块代码


    直接执行模块中代码的语法:  
     import 模块路径

*/