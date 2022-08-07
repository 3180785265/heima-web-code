//给网页绑定滚动事件

document.addEventListener('scroll', function () { //异步代码，等同步代码执行完，才执行

    console.log('12')

    let searchList = document.querySelector('.pc-search-items-list')

    // 获取浏览器滚动条后被剪切距离
    let scrollTop = this.documentElement.scrollTop;

    // 获取距离body的距离
    let offsetTop = searchList.offsetTop


    let assistSearch = document.querySelector('.assistSearch')
    if (scrollTop >= offsetTop) {
        assistSearch.style.top = 0
    } else {
        assistSearch.style.top = '-180px'

    }

})


// 同步代码
