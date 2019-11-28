<template>
<!-- 注册页面 -->
    <div class="register">
        <navar title="注册"></navar>
        <div class="item-title">创建用户</div>
        <div class="create-user">
            <van-cell-group>
                <van-field v-model="username" placeholder="用户名称"/>
                <div class="iphone-option">
                    <select name=""> 
                        <option value="0">+86</option> 
                    </select> 
                </div>
                <van-field v-model="username" placeholder="请输入您的手机号"  class="iphone-input"/>
                <van-field v-model="username" placeholder="请输入验证码" />
                <van-field v-model="username" placeholder="请输入您的邮箱(可不填）" class="register-otp">
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
                <van-field v-model="username" clearable right-icon="question-o" placeholder="请设置6至20位字符的登录密码" @click-right-icon="$toast('question')" class="password"/>
                <van-field v-model="username" placeholder="确认密码" />
            </van-cell-group>
        </div>


        <div class="item-title">公司信息</div>
        <div class="create-user">
            <van-cell-group class="m-10-b border-0">
                <van-field v-model="username" placeholder="公司名称"/>
            </van-cell-group>
            <van-cell-group class="m-10-b border-0 ">
                <van-field v-model="username" clearable right-icon="arrow" placeholder="公司地址" @click='showAddre' disabled/>
            </van-cell-group>
             <van-cell-group class="m-10-b border-0 textarea">
                <van-field
                    v-model="username"
                    rows="5"
                    autosize
                    type="textarea"
                    placeholder="详细地址"
                />
            </van-cell-group>
             <van-cell-group class="border-0">
                <van-field v-model="username" clearable right-icon="arrow" placeholder="主营业务"/>
            </van-cell-group>

            <div class="item-title">拍照上传</div>
            <div class="uploader">
                <van-row type="flex" justify="space-around">
                    <van-col span="8">
                        <van-uploader :after-read="afterRead" />
                        <div class="uploader-name">公司正面照</div>
                    </van-col>
                    <van-col span="8">
                        <van-uploader :after-read="afterRead" />
                        <div class="uploader-name">公司内部照</div>
                    </van-col>
                    <van-col span="8">
                        <van-uploader :after-read="afterRead" />
                        <div class="uploader-name">营业执照</div>
                    </van-col>
                </van-row>
                
            </div>
            <div class="uploader">
                <van-row type="flex" justify="space-around">
                    <van-col span="8">
                        <van-uploader :after-read="afterRead" />
                        <div class="uploader-name">法人/人像照</div>
                    </van-col>
                    <van-col span="8">
                        <van-uploader :after-read="afterRead" />
                        <div class="uploader-name">法人证件正面照</div>
                    </van-col>
                    <van-col span="8">
                        <van-uploader :after-read="afterRead" />
                        <div class="uploader-name">法人证件背面照</div>
                    </van-col>
                </van-row>
            </div>
            
                
            
                
        </div>
        <div class="agreement">
            <div class="checkbox"></div>
            <!-- <input type="checkbox"> -->
            <span>
                <span class="c1">我已阅读并同意网站的</span>
            </span>
        </div>
        <div class="confirm-btn">
            <van-button type="info" size="large" class="load-btn" @click="toRevise">注册</van-button>
        </div>
        <div class="to-login">
            已有账户,去登录
        </div>
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '30%' }">
            <van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']"/>
        </van-popup>
        <van-popup v-model="show2">
            <div class="revise-success">
                <img src="@/assets/img/login/icon@3x.png" alt="">
                <div class="txt1">恭喜您!</div>
                <div class="txt2">已注册成功</div>
            </div>
        </van-popup>
    </div>
</template>

<script>

import navar from '@/multiplexing/navar'
import areaList from '@/assets/json/address.js'
export default {
    props: {

    },
    data() {
        return {
            username:'',
            password:'',
            sms:'',
            areaList,
            show:false,
            show2:false
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
        afterRead(file) {
        // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        showAddre(){
            this.show = true;
        },
        toRevise(){
            this.show2 = true;
        }

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
    /deep/ .van-cell,.van-field{
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
    .iphone-option{
        width: 78px;
        height: 52px;
        position: absolute;
        top:115px;
        left:15px;
        z-index: 999999999999;
    }
    .create-user{
            .iphone-input{
            /deep/ .van-cell__value{
                .van-field__body{
                    margin-left: 100px;
                    .van-field__control{
                        
                    }
                }
            }
        }
    }
    /deep/ .register-otp{
        .van-field__body{
            .van-field__button{
                .van-button{
                    width: 180px;
                    height: 60px;
                    background-color: #F2F3F5;
                    color: #333333;
                    position: absolute;
                    top:-20px;
                    right: -350px;
                }
            }
        }
    }
    .password{
        /deep/ .van-cell__value{
            .van-field__body{
                width: 95%;
            }
        }
    }
    .m-10-b{
        margin-bottom: 10px;
    }
    .border-0{
        /deep/ .van-cell{
            .van-cell__value{
                border:0;
                .van-field__body{
                    width: 95%;
                }
            }
        }
    }
    .textarea{
        /deep/ .van-cell{
            height: 140px;
        }
    }
    .uploader{
        height: 220px;
        width: 100%;
        position: relative;
        /deep/ .van-uploader{
            transform: scale(2) translate(20px,30px);
            .van-uploader__upload{
                margin-left: 8px;
            }
        }
        /deep/ .van-row{
            .van-col{
                position: relative;
                .uploader-name{
                    position: absolute;
                    bottom: -125px;
                    width: 172px;
                    text-align: center;
                    font-size: 24px;
                    color: #666;
                }
            }
        }
    }
    .agreement{
        margin: 99px 0 29px;
        padding-right: 60px;
        font-size: 20px;
    }
    .checkbox{
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #999;

    }
    .confirm-btn{
        width: 670px;
        height:88px;
        .load-btn{
            height:100%;
            background-color: #999;
        }
    }
    .item-title{
        background-color: #666666;
        width:200px;
        height:60px;
        color: #fff;
        font-size: 36px;
        text-align: center;
        line-height: 60px;
        margin: 39px 0 20px;
        &:nth-child(2){
            margin-top:0
        }
    }
    .to-login{
        width: 100%;
        text-align: center;
        color: #FA5300;
        margin: 29px 0 88px 0;
    }
    .revise-success{
        width: 600px;
        height: 500px;
        background-color: #fff;
        text-align: center;
        img{
            width: 220px;
            height: 220px;
            margin-top:80px;
            // transform: translateY(-50%)
        }
        .txt1,.txt2{
            font-size:36px;
            font-weight:bold;
        }
        .txt1{
            margin-top: 49px;
        }
        .txt2{
            margin-top: 16px;
        }
    }
}
</style>
