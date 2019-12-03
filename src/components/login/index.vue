<template>
<!-- 登录页 -->
    <div class="login">
        <div class="logo"></div>
        <div class="user-name">
            <img src="@/assets/img/login/user@3x.png" alt="图标" class="name-icon">
            <div class="input-con">
                <input type="text" class="name-input" placeholder="请输入用户名" v-model="userData.username">
            </div>
        </div>
        <div class="pass-word">
             <img src="@/assets/img/login/password@3x.png" alt="图标" class="name-icon">
             <div class="input-con">
                <input :type="inputType" class="name-input" placeholder="请输入密码" v-model="userData.password">
                <van-icon :name="eyeName" class="password-icon" size="20px" @click="eyeStatus = !eyeStatus"/>
            </div>
        </div>
        <div class="forgetPassword">
            <span class="c1" @click="jumpRouter('忘记密码')">Forgot Password？</span>
        </div>
        <div class="upload">
            <div class="load-btn" @click="logIn" :style="{backgroundColor:(disabledSubmit?'#FA5300':'#999')}">
                Log In
            </div>
        </div>
        <div class="remarks-option">
            <span class="c2" @click="jumpRouter('注册')">Create Account</span>
        </div>
        <div class="footer">
            <div class="line left-80"></div>
            <div class="other">Or join with</div> 
            <div class="line right-80"></div>
            <div class="icons">
                <van-row type="flex" justify="space-between">
                    <van-col span="8" style="text-align:center">
                        <img src="@/assets/img/login/weixin@3x.png">
                    </van-col>
                    <van-col span="8" style="text-align:center">
                        <img src="@/assets/img/login/weixin@3x.png">
                    </van-col>
                    <van-col span="8" style="text-align:center">
                        <img src="@/assets/img/login/weixin@3x.png">
                    </van-col>
                </van-row>
            </div>
            <div class="agreement">
                <input type="checkbox" class="checkbox">
                <span>
                    <span class="c1">You agree to the TOSPINO Law Aggrement and the Privacy Notice.</span>
                </span>
            </div>
        </div>
        
    </div>
</template>

<script>
import {loginApi} from '@/api/login/index';
import {accReg,passReg} from '@/common/reg.js'
export default {
    props: {

    },
    data() {
        return {
            inputType:'password',
            eyeName:'closed-eye',
            eyeStatus:Boolean,
            userData:{
                username:'',
                password:'',
            },
            rules:{
                username:{
                    required: true,
                    messages: "姓名格式不正确"
                },
                password:{
                    required: true,
                    messages: "姓名格式不正确"
                }
               
            }
        };
    },
    computed: {
        disabledSubmit() {
            return !this.$fn.isDisabled(this.userData,this.rules);
        }
    },
    created() {
        
    },
    mounted() {
        
    },
    watch: {
        eyeStatus:{
            handler:function(newVal, oldVal){
                this.eyeStatus ? this.eyeName = 'eye-o':this.eyeName = 'closed-eye'
                this.eyeStatus ? this.inputType = 'text':this.inputType = 'password'
            },
        },
    },
    methods: {
        //登录按钮
        logIn(){
            if(this.disabledSubmit){
                loginApi(this.userData).then(res => {
                    if(res.code == 0){
                        localStorage.token = res.token
                        this.$router.push({name:'首页'})
                    }
                })
            }
        },
        jumpRouter(name){
            this.$router.push({name})
        },
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.login{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    .logo{
        width: 250px;
        height:250px;
        background-image:url('~@/assets/img/guidePage/logo.png');
        background-size: 100%;
        position: absolute;
        top:150px;
        left: 50%;
        right: 50%;
        transform: translate(-50%)
    }
    .user-name{
        width: 100%;
        position: absolute;
        top:484px;
        .name-icon{
            width: 40px;
            height: 40px;
            position: absolute;
            left:80px;
        }
        .input-con{
            position: absolute;
            left:140px;
            width: 530px;
            height:60px;
            border-bottom: 1px solid #999;
            font-size: 26px;
        }
        .name-input{
            position: absolute;
            width: 450px;
            border: 0;
        }
    }
    .pass-word{
        width: 100%;
        position: absolute;
        top:594px;
        .name-icon{
            width: 40px;
            height: 40px;
            position: absolute;
            left:80px;
        }
        .input-con{
            position: absolute;
            left:140px;
            width: 530px;
            height:60px;
            border-bottom: 1px solid #999;
            font-size: 26px;
        }
        .name-input{
            position: absolute;
            width: 450px;
            border: 0;
        }
        .password-icon{
            position: absolute;
            right: 30px;
        }
    }
    .forgetPassword{
        position: absolute;
        top:692px;
        right:80px;
    }
    .upload{
        width: 100%;
        padding:0 80px;
        height:88px;
        position: absolute;
        top:742px;
        box-sizing: border-box;
        overflow: hidden;
        line-height: 88px;
        text-align: center;
        .load-btn{
            height:100%;
            background-color: #999;
            border-radius:44px;
            color: #fff;
            font-size:40px;
        }
    }
    .remarks-option{
        width: 100%;
        position: absolute;
        top:860px;
        left:290px;
        font-size: 24px;
    }
    .footer{
        width: 100%;
        // height:100px;
        position: absolute;
        bottom: 260px;
        .other{
            position: absolute;
            top:0;
            left:306px;
            font-size: 24px;
            color: #999
        }
        .icons{
            position: absolute;
            top:50px;
            width: 100%;
            height:200px;
            box-sizing: border-box;
            overflow: hidden;
            padding:0 100px;
        }
        /deep/ .van-row{
            img{
                width: 80px;
                height:80px;
            }
        }
        .agreement{
            padding-right: 60px;
            position: absolute;
            top: 182px;
            left: 162px;
            font-size: 20px;
        }
    }
    .checkbox{
        vertical-align: middle
    }
    .c1{
        color: #999
    }
    .c2{
        color: #fa5300
    }
    .line{
        width: 206px;
        background-color: #999;
        height:2px;
    }
    .left-80{
        position: absolute;
        left:80px;
        top:10px;
    }
    .right-80{
        position: absolute;
        right:80px;
        top:10px;
    }
}
</style>
