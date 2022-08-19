<template>

    <div>
        <!-- 原始的方式调用 -->
        <p>token值: {{$store.state.user.token}}</p>

        <!-- 基于getters快捷方式访问 -->
        <p>名称: {{name}}</p>


    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

    // 2.引入gettes中的数据
    computed: {
        ...mapGetters(['token','name'])
    }

}
</script>

        <!-- 
                      1.放置子模块的属性,每个子模块中同样都有自己的 state miutations actoins 

                     
                    /* 
                        1.放置的是所有vuex的计算属性
                        state参数指的就是当前store中的state
                    
                    */                    
                        getters: {
                            //建立快捷的访问方式(vuex中的计算属性)
                            token: state => state.user.token, //通过state.子模块名.属性名调用
                            name: state => state.setting.name,
                        },


                        //2. 放置子模块的属性,每个子模块中同样都有自己的 state miutations actoins 
                        modules: {
                            user: {
                            state: {
                                token: "12345"
                            }
                            },


                            setting: {
                            state: {
                                name: "Vuex实例"

                            }
                            }
                        }

                        })



         -->