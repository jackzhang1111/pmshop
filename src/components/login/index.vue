<template>
<!-- 登录页 -->
    <div class="login">
        <div class="logo"></div>
        <div class="user-name">
            <img src="@/assets/img/login/user@3x.png" alt="图标" class="name-icon">
            <div class="input-con">
                <input type="text" class="name-input" placeholder="请输入用户名">
            </div>
        </div>
        <div class="pass-word">
             <img src="@/assets/img/login/password@3x.png" alt="图标" class="name-icon">
             <div class="input-con">
                <input type="text" class="name-input" placeholder="请输入密码">
                <img src="@/assets/img/login/hidden@3x.png" alt="图标" class="password-icon">
            </div>
        </div>
        <div class="forgetPassword">
            <span class="c1" @click="toForgot">Forgot Password？</span>
        </div>
        <div class="upload">
            <div class="load-btn" @click="logIn">
                Log In
            </div>
        </div>
        <div class="remarks-option">
            <span class="c2" @click="toRegister">Create Account</span>
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
import {aaa,bbb} from '@/api/login/login';
export default {
    props: {

    },
    data() {
        return {
            value:'',
            search:{
            "addressAreaId": 111111,
            "addressId": 1111,
            "addressStatus": 1,
            "areaCode": "DS",
            "createTime": "",
            "isDefault": 0,
            "name": "SA",
            "phoneNumber": "ASS",
            "userAddress": "SAS",
            "userId": 8
            },
            search1:{
                username:'132123',
                password:'23123'
            }
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
        toForgot(){
            this.$router.push({name:'忘记密码'})
            // bbb(this.search).then(res => {
            //     console.log(this.search);
            // })
        },


        toRegister(){
            this.$router.push({name:'注册'})
            // aaa(this.search1).then(res => {
            //     // console.log(this.search);
            // })
        },
        //登录按钮
        logIn(){
            this.$router.push({name:'首页'})
        }
        
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
            width: 40px;
            height: 40px;
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
