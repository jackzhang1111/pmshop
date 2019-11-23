<template>
<!-- 忘记密码点击下一步 =>输入验证码页 -->
  <div class="forget-password">
        <navar title="Forgot Password"></navar>
        <div class="b-50">
            <h1>Authentication Required</h1>
            <div class="line"></div>
            <div>
                <p class="tips">
                    For your security, we need to authenticate your request. We have sent a One Time Password (OTP) to your phone .
                    <span class="o-c">+86 13813131313</span>
                </p>
            </div>
            <div class="otp">
                <div class="otp-txt">OTP:</div>
                <div class="input-con">
                    <input type="text" class="name-input" placeholder="Please enter the OTP">
                </div>
                <div class="count-down">
                    <van-button type="primary" class="count-down-btn">Resend after 59s</van-button>
                </div>
            </div>
            <div class="confirm-btn">
                <van-button round type="info" size="large" class="load-btn" @click='toRevise'>Confirm</van-button>
            </div>
        </div>

  </div>
</template>

<script>
import navar from '@/multiplexing/navar'
export default {
    name: 'HelloWorld',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
       toRevise(){
            console.log(123);
            this.$router.push({name:'修改密码'})
        }
    },
    components: {
        navar
    },
}
</script> 

<style scoped lang="less">
.forget-password{
    width: 100%;
    height: 100%;
    padding:28px 40px 0 40px;
    box-sizing: border-box;
    .nav-bar{
        width: 100%;
        height: 88px;
        position: relative;
        .icon{
            width: 40px;
            height:40px;
            position: absolute;
            top:28px;
        }
        .title{
            text-align: center;
            font-size: 36px;
            color: #000;
        }
    }
    .otp{
        width: 100%;
        height:75px;
        position: relative;
        border-bottom: 1px solid #dcdcdc;
        margin-bottom: 30px;
        .otp-txt{
            position: absolute;
            top:0;
            left:0;
            font-size: 30px;
            color: #333;
        }
        .input-con{
            position: absolute;
            left:140px;
            width: 530px;
            height:60px;
            font-size: 20px;
            .name-input{
                position: absolute;
                width: 240px;
                border: 0;
            }
        }
        .count-down{
            position: absolute;
            right:0px;
            top:-10px;
            .count-down-btn{
                width: 280px;
                height:68px;
                font-size: 30px;
                color: #999;
                background-color: #DCDCDC;
            }
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
    h1{
        font-size: 36px;
        color:#333;
        margin-bottom: 40px;
    }
    .line{
        width: 670px;
        height: 2px;
        background-color: #dcdcdc;
        margin-bottom: 60px;

    }
    .tips{
        font-size: 26px;
        color: #333;
        line-height: 40px;
        margin-bottom: 62px;
    }
    .o-c{
        color: #fa5300;
        font-size: 30px;
    }
    
}
</style>
