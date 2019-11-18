<template>
    <div class="forge-success">
        <navar title="Forgot Password"></navar>
        <div class="content">
            <div class="logo">
                <img src="@/assets/img/login/icon-02@3x.png">
            </div>
            <p>Congratulations!You have successfully set the password.</p>
            <div class="confirm-btn">
                <van-button round type="info" size="large" class="load-btn" @click="toLogin">Log In Now</van-button>
            </div>
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
        toLogin(){
            this.$router.push({name:'登录'})
        }
    },
    components: {
        navar
    },
};
</script>

<style scoped lang="less">
.forge-success{
    // position: relative;
    padding:28px 40px 0 40px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .content{
        position: relative;
        top:150px;
        width: 100%;
        .logo{
            width: 200px;
            height:200px;
            margin:0 auto 50px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            text-align: center;
            font-size: 34px;
            color: #333;
            margin: 0 0 138px;
        }
    }
    .confirm-btn{
        width: 670px;
        height:88px;
        .load-btn{
            height:100%;
            background-color: #999;
        }
    }
}
</style>
