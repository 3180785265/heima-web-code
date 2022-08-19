<template>

    <div>
        <van-form @submit="onSubmit" ref="from">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名', validator: usernameValidator }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true,  message: '请填写密码' }, { validator:passwordValidator, message: '必须包含大小写字母和数字组成,可以使用特殊字符,长度在8-10之间' }]" />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            username: '',
            password: '',
            pattern: '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$'
        };
    },
    methods: {
        passwordValidator(password){
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(password)
        },
        usernameValidator(username) {
            // 1.如果用户名的长度，小于6位数，大于10位数

            if (username.length < 6 || username.length > 10) {

                return new Promise((resolve, reject) => {
                    reject(false)
                });

            }


        },
        onSubmit(values) {
            console.log('submit', values);


        },
    },
}
</script>
 

       
       
            <!-- 
                        1.Rule数据结构:使用Field组件的rules属性可以定义校验规则
                            required	是否为必选字段，当值为空字符串、空数组、undefined、null 时，校验不通过	boolean
                            message  	错误提示文案	string | (value, rule) => string
                            validator 	通过函数进行校验	(value, rule) => boolean | Promise
                            pattern 	通过正则表达式进行校验



                 
             -->
