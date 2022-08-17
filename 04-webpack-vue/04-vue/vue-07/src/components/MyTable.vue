<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>头像</th>
                </tr>
            </thead>
            <thead>
                <tr v-for="(obj,index) in arr" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ obj.name }}</td>
                    <td>{{ obj.age }}</td>
                    <td>

                        <!-- 1.将这个位置, 修改成插槽，可以根据不同的需求，插入不同的标签
                             2.给插槽使用变量,
                         -->

                        <slot :row="obj.headImgUrl">
                            <!-- 3.如果没有使用插槽，则默认显示这个 -->
                            {{ obj.headImgUrl }}

                        </slot>
                    </td>

                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        arr: {
            type: Array,
        
        }
    }
}
</script>