<template>
    <div class="register">
        <navar title="注册"></navar>
        <div>创建用户</div>
        <div>
            <van-cell-group>
                <van-field v-model="username" placeholder="请输入用户名" />
                <van-field v-model="username" placeholder="请输入用户名" />
                <van-field v-model="username" placeholder="请输入用户名" />
            </van-cell-group>
        </div>
    </div>
</template>

<script>

import navar from '@/multiplexing/navar'
export default {
    props: {

    },
    data() {
        return {
            username:'',
            password:''
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
        navar
    },
};
</script>

<style scoped lang="less">
.register{
    padding:28px 40px 0 40px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    /deep/ .van-cell.van-field{
        height: 88px;
        .van-cell__value{
            position: relative;
            border-bottom: 1px solid #DCDCDC;
            .van-field__body{
                position: absolute;
                top:20px;
            }
        }
    }
}
</style>
