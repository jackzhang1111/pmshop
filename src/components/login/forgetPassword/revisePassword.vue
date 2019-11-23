<template>
<!-- 输入验证码点击确定 => 修改密码页 -->
    <div class="revise-password">
        <navar title="Forgot Password"></navar>
        <div class="content">
            <p>Reset A New Password</p>
            <div class="line"></div>
            <div class="pass-word"> 
                <span>New password:</span>
                <div class="input-con">
                    <input type="text" class="name-input" placeholder="请输入6-20个字符的密码">
                    <img src="@/assets/img/login/hidden@3x.png" alt="图标" class="password-icon">
                </div>
                <div class="line"></div>
            </div>
            <div class="re-enter"> 
                <span>Re-enter:</span>
                <div class="input-con">
                    <input type="text" class="name-input" placeholder="请再次输入新密码">
                </div>
                 <div class="line"></div>
            </div>
            <div class="upload">
                <van-button type="info" size="large" class="load-btn" @click="confirm">Confirm</van-button>
            </div>
            <div class="tips">
                <span>Secure Password Tips:</span>
                <p class="spot">&nbsp;&nbsp;Use at least 6 characters, a combination of numbers and letters is best.</p>
                <p class="spot">&nbsp;&nbsp;Do not use the same password you have used with us previously.</p>
                <p class="spot">&nbsp;&nbsp;Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</p>
                <p class="spot">&nbsp;&nbsp;Use at least 6 characters, a combination of numbers and letters is best.</p>
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
        confirm(){
            this.$router.push({name:'修改密码成功'})
        }
    },
    components: {
        navar
    },
};
</script>

<style scoped lang="less">
.revise-password{
    width: 100%;
    height: 100%;
    padding:28px 40px 0 40px;
    box-sizing: border-box;
    .content{
        width: 100%;
        position: relative;
        p{
            font-size: 36px;
            color:#333333;
            margin-bottom: 38px;
        }
        .line{
            width: 100%;
            height: 2px;
            background-color: #DCDCDC;
        }
        .upload{
            width: 100%;
            padding:0;
            height:88px;
            position: absolute;
            top:358px;
            box-sizing: border-box;
            overflow: hidden;
            .load-btn{
                height:100%;
                background-color: #999;
            }
        }
        .tips{
            position: absolute;
            top:500px;
            p{
                margin-top: 13px;
                font-size: 18px;
                color: #666666
            }
            span{
                color: #333333;
                font-size: 26px;
                font-weight:600;
            }
            .spot{
                 position: relative;
                 &:after {
                    content: ' ';
                    position: absolute;
                    left: 0px;
                    top: 10px;
                    width: 6px;
                    height: 6px;
                    background-color: #666666;
                    border-radius: 6px;
                }
            }
        }
    }
    .re-enter{
        width: 100%;
        position: absolute;
        top:247px;
        left:0;
        display: inline-block;
        .input-con{
            position: absolute;
            top:-5px;
            left:150px;
            width: 530px;
            height:60px;
            font-size: 26px;
            margin-bottom: 50px;
        }
        .name-input{
            position: absolute;
            width: 350px;
            border: 0;
            left:80px;
        }
        .password-icon{
            position: absolute;
            right: 30px;
            width: 40px;
            height: 40px;
        }
        span:nth-child(1){  
            font-size: 30px;
            color: #333333
        }
        .line{
            position: absolute;
            top:58px;
        }
    }
    .pass-word{
        width: 100%;
        position: absolute;
        top:130px;
        left:0;
        display: inline-block;
        .input-con{
            position: absolute;
            top:-5px;
            left:150px;
            width: 530px;
            height:60px;
            font-size: 26px;
            margin-bottom: 50px;
        }
        .name-input{
            position: absolute;
            width: 350px;
            border: 0;
            left:80px;
        }
        .password-icon{
            position: absolute;
            right: 30px;
            width: 40px;
            height: 40px;
        }
        span:nth-child(1){  
            font-size: 30px;
            color: #333333
        }
        .line{
            position: absolute;
            top:58px;
        }
    }
}
</style>
