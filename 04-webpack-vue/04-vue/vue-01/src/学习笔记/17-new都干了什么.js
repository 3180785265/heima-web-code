
// 类：都是属性和方法模板的集合
function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex

}


// 所有的实例对象共享的方法- 共享内存
Person.prototype.say = function () { }




// new 调用构造函数，会return一个实例对象返回
let per = new Person('刘德华', 18, '男')


console.log(per)