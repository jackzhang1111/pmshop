<template>
<!-- 支付密码忘记密码 => 输入验证码 -->
    <div class="parrwordOtp">
        <balanceHeader></balanceHeader>
        <div class="parrwordOtp-text">
            <div class="p1 czjz spjz">我们已发送验证码短信到您的手机：</div>
            <div class="p2">+86 131******00</div>
        </div>
        <div class="paymen-content">
            <van-password-input
            :value="value"
            :focused="showKeyboard"
            :length="4"
            info="收短信大约需要59秒"
            @focus="showKeyboard = true"
            :mask="false"
            />
            <!-- 数字键盘 -->
            <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
            delete-button-text ='X'
            close-button-text="完成"
            :hide-on-click-outside="false"
            theme='custom'
            @close="wancheng"
            />
            
        </div>
        
    </div>
</template>

<script>
import balanceHeader from './itemComponents/balanceHeader'
export default {
    props: {

    },
    data() {
        return {
            show2:true,
            value: '',
            showKeyboard: true
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
        onInput(key) {
            this.value = (this.value + key).slice(0, 6);
        },
        onDelete() {
            this.value = this.value.slice(0, this.value.length - 1);
        },
        toparrwordOtp(){
            this.$router.push({name:'支付密码输入验证码'})
        },
        wancheng(){
            this.$router.push({name:'重置支付密码'})
        }
    },
    components: {
        balanceHeader
    },
};
</script>

<style scoped lang="less">
.parrwordOtp{
    border-radius: 0;
    .parrwordOtp-text{
        height: 270px;
        position: relative;
        text-align: center;
        .p1{
            width: 100%;
            position: absolute;
            top:80px;
            font-size:36px;
            color: #666;

        }
        .p2{
            width: 100%;
            position: absolute;
            top:153px;
            font-size:44px;
            color: #333;
            font-weight:bold;
        }
        
    }
    .paymen-content{
        width: 100%;
        height: 800px;
        box-sizing: border-box;
        padding:80px 30px 0;
        position: relative;
        font-size:34px;
        color: #333;
        text-align: center;
        span{
            &:nth-child(2){
                display: inline-block;
                margin-top:39px;
                font-size:30px;
            }
            
        }
        /deep/ .van-password-input__security{
            height: 90px;
            li{
                border:1px solid #999999;
                line-height: 90px;
                font-size: 60px;
            }
        }
        /deep/ .van-password-input__info{
            margin-top:60px;
        }
        /deep/ .van-number-keyboard__body{
            height: 600px;
            .van-hairline{
                height: 148px;
                line-height: 109px;
                font-size: 60px;

            }
            .van-key--extra{
                background-color: #F2F3F5;
            }
        }
        /deep/ .van-number-keyboard__sidebar{
            .van-hairline{
                height: 300px;
                width: 195px;
                top:-386px;
                line-height: 300px;
                font-size: 60px;
           }
            .van-key--delete{
               background-color: #DCDCDC;
               color: #fff;
            }
            .van-key--close{
                background-color: #fff;
                color: #000;

            }
        }
    }
    
}
</style>
