//给网页绑定滚动事件

document.addEventListener('scroll', function () {

    // 1.获取被滚动条剪掉的距离
    let scrollTop = document.documentElement.scrollTop

    // 2.获取banner 轮播图和body的距离(没有定位元素，获取的是和body的距离)

    let offsetTop = document.querySelector('.banner')
        .offsetTop

    console.log(offsetTop)

    let kcb = document.querySelector('.banner div.wrapper .right')


    // 3.如果滚动条被减去的距离，大于了  banner 轮播图和body 的距离
    if (scrollTop >= offsetTop) {
        // 显示课程表

        kcb.style.display = 'block'

    } else {
        // 4.否则就隐藏
        kcb.style.display = 'none'

    }

})