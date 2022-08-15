

// 1.将所有的filter 写在单独的一个模块当中导出
// 2.导入moment.js日期模块
import moment from 'moment';

let reverseFileter = (val, str) => {
    return val.split("").reverse().join(str)
}


// 2.定义格式化日期的过滤器
function formatDate(val) {

    // 3.将日期对象,格式化为指定的字符串格式
    return moment(val).format('YYYY-MM-DD')

}



export default {
    reverseFileter,
    formatDate
}
