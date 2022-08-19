<template>
    <div>
        <van-button type="info" @click="btn">信息按钮</van-button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        async btn() {
        //    await this.$dialog.alert({
        //         message: '弹窗内容',
        //     });
           await this.$dialog.confirm({
                message: '确认弹窗',
            });

        }
    },
}
</script>

<style>
</style>