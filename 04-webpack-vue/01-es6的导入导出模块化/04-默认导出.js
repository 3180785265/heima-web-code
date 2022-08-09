

// 1.定义模块私有成员变量, 只要没有被export共享出去，外界都是访问不到的，都是私有的
let n1 = 10;
let n2 = 20;  //定义模块私有成员变量n2, (外界访问不到，因为它还没有被export 共享出去)


// 2.定义模块私有方法,必须要被export 导出，外界才能访问，否则是私有的
function show() {

}

// 3.使用export default 默认导出，向外共享 n1 和 show 两个成员
export default {
    n1,// 属性名和变量名一致，可以直接省略
    show
}

/*

        默认导出的语法
        export default 默认导出的成员


        注意事项： 默认导出，只能使用一次


 */