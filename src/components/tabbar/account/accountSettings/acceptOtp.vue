<template>
    <div class="accept-otp">
        <settings-header title="验证信息"></settings-header>
        <div class="content">
            <div class="accept-otp-top">
                <div class="top-p1">
                    我们已通过短信方式发送验证码至手机号
                </div>
                <div class="top-p2">
                    +86 15646161665
                </div>
            </div>
            <div class="accept-otp-middle">
                <input type="search" class="input-xt" placeholder="请输入验证码">
                <span class="count-down">Resend after 59s</span>
            </div>
            <div class="accept-otp-btn">
                确定
            </div>
        </div>
        
    </div>
</template>

<script>
import settingsHeader from './itemComponents/settingsHeader'
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

    },
    components: {
        settingsHeader
    },
};
</script>

<style scoped lang="less">
.accept-otp{
    .content{
        padding: 0 30px;
        .accept-otp-top{
            height: 209px;
            box-sizing: border-box;
            padding-top: 59px;
            .top-p1{
                font-size:30px;
                color: #333;
                margin-bottom: 20px;
            }
            .top-p2{
                font-size:32px;
                color: #999;
            }
        }
        .accept-otp-middle{
            height: 88px;
            background-color: #fff;
            line-height: 88px;
            padding: 0 30px;
            position: relative;
            margin-bottom: 40px;
            .input-xt{
                height: 40px;
                border: 0;
                width: 60%;
                background-color: #fff;
                display: inline-block;
                
            }
            .count-down{
                width:220px;
                height:60px;
                background:rgba(220,220,220,1);
                display: inline-block;
                line-height: 60px;
                position: absolute;
                right:30px;
                top:50%;
                transform: translateY(-50%);
                text-align: center;
            }
        }
        .accept-otp-btn{
            width:690px;
            height:88px;
            background:rgba(153,153,153,1);
            line-height: 88px;
            text-align: center;
            font-size:34px;
            color: #fff;
        }
    }
}
</style>
