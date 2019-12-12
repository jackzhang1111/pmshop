<template>
<!-- 退款页面 -->
    <div class="refund">
        <div class="good-information">
            <div class="good-detail" >
                <div class="good-detail-header">
                    <span>商品信息</span>
                </div>
                <div class="good-detail-content" v-for="i in 2" :key="i">
                    <div class="good-detail-img">
                        <img src="@/assets/img/tabbar/shoppingCart/product-03@2x.png">
                    </div>
                    <div class="good-detail-title">
                        <span class="name">啄木鸟女包2019新款时尚休闲单肩斜挎包百搭手提包大容量女...</span>
                        <div class="guige">
                            红色/L码
                        </div>
                        <div class="tkje">
                            退款金额:
                        </div>
                    </div>
                    <div class="price">
                        <div class="p3">
                            ￥596.00
                        </div>
                        <div class="p4 fl-right">
                            x1
                        </div>
                        <div>
                            ￥596.00
                        </div>
                    </div>
                    <div style="height:35px;"></div>
                </div>
            </div>
            <div class="cell" @click="showReason">
                <span>退款原因</span>
                <span class="text " :class="{'c-999':reasonText=='请选择'}">{{reasonText}}</span>
                <van-icon name="arrow" class="arrow c-999"/>
            </div>
            <div class="cell">
                <span>退款金额</span>
                <span class="text-tk c-orange f-30">
                    ￥596.00
                    <span class="c-999 f-22">(含运费）</span>
                </span>
            </div>
        </div>
        <div class="cell">
            <span>退款说明</span>
            <input type="text" class="input-xt" placeholder="选填">
        </div>
        <div class="up-load">
            <div class="title">
                上传凭证
            </div>
            <div class="uploader">
                <upload-all @getfilePathList="getfilePathList" :maxCount="6"></upload-all>
            </div>
        </div>
        <div class="btn-submit">
            提交
        </div>
        <!-- 退款原因 -->
        <refundReason ref="refundReason" @getReasonText="getReasonText"></refundReason>
    </div>
</template>

<script>
import refundReason from './itemComponents/refundReason.vue'
import uploadAll from '@/multiplexing/uploadAll.vue'
export default {
    props: {

    },
    data() {
        return {
            fileList:[],
            show1:false,
            reasonText:'请选择',
            uploadList:[]
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
        //弹出退款原因弹窗
        showReason(){
            this.$refs.refundReason.closeStatu = true
        },
        //获取退款原因
        getReasonText(text){
            this.reasonText = text
        },
        //获取上传图片列表
        getfilePathList(list){
            this.uploadList = list
            console.log(this.uploadList,'this.uploadList');
        }
    },
    components: {
        refundReason,
        uploadAll
    },
};
</script>

<style scoped lang="less">
.refund{
    .cell{
        height: 88px;
        line-height: 88px;
        padding: 0 30px;
        background-color: #fff;
        color: #333;
        position: relative;
        font-size: 26px;
        margin-bottom: 20px;
        .arrow{
            position: absolute;
            right:30px;
            top:50%;
            transform: translateY(-50%);
            
        }
        .text{
            position: absolute;
            right:60px;
        }
        .text-tk{
            position: absolute;
            right:30px;
        }
        .input-xt{
            margin-left:40px;
            height: 40px;
            border: 0;
        }
    }
    .btn-submit{
        width: 100vw;
        height:100px;
        background:rgba(250,83,0,1);
        font-size:36px;
        line-height: 100px;
        text-align: center;
        color: #fff;
    }
}
.good-detail{
    margin-bottom: 20px;
    .good-detail-header{
        width: 100%;
        height: 79px;
        line-height: 79px;
        font-size:26px;
        color: #333;
        background-color: #fff;
        padding-left: 30px;
        box-sizing: border-box;
        border-bottom: 1px solid #F2F3F5;
        .dfk{
            float: right;
            margin-right: 30px;
        }
    }
    .good-detail-content{
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 30px;
        position: relative;
        border-bottom: 1px solid #F2F3F5;
        .good-detail-img{
            width: 150px;
            height: 150px;
            position: relative;
            top:30px;
            left:0px;
            display: inline-block;
        }
        .good-detail-title{
            display: inline-block;
            position: absolute;
            width: 336px;
            top:30px;
            left:200px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            .name{
                display: inline-block;
                margin-bottom: 24px;
                color: #333;
                font-size: 22px
            }
            .guige{
                color: #999;
                font-size: 18px;
                display: inline-block;
                margin-bottom: 28px;
            }
            .tkje{
                color: #999;
                font-size: 22px;
            }
        }
        .price{
            position: absolute;
            top:30px;
            right:30px;
            text-align: right;
            font-size: 26px;
            .p3{
                font-size:26px;
                color: #333;
                margin-bottom: 5px;
            }
            .p4{
                color: #999;
                font-size: 20px;
                margin-bottom: 90px;
            }
            .selection-right-stepper{
                position: relative;
                width: 100%;
                height: 156px;
                .add-btn{
                    position: absolute;
                    top:20px;
                    right:0;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                    background-color: #EEEEEE;
                    color: #666;
                }
                .reduce-btn{
                    position: absolute;
                    top:20px;
                    right:128px;
                    width: 40px;
                    height: 40px;
                    border: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                    background-color: #EEEEEE;
                    color: #666;
                }
                .num{
                    position: absolute;
                    top:20px;
                    right:40px;
                    width: 88px;
                    height: 40px;
                    border-top: 1px solid #999999;
                    border-bottom: 1px solid #999999;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
    }
    .good-detail-footer{
        height: 100px;
        border-top: 1px solid #F2F3F5;
        font-size: 30px;
        color: #666;
        background-color: #fff;
        .lan{
            height: 100%;
        }
        .btn-qzf{
            width:150px;
            height:60px;
            border:1px solid rgba(250,83,0,1);
            border-radius:30px;
            line-height: 60px;
            text-align: center;
            position: relative;
            top:50%;
            transform: translateY(-50%)

        }
        .btn-qxdd,.btn-xgdz{
            width:180px;
            height:60px;
            border:1px solid rgba(153,153,153,1);
            border-radius:30px;
            line-height: 60px;
            text-align: center;
            position: relative;
            top:50%;
            transform: translateY(-50%);
            margin-right:20px;
        }
    }
}
.up-load{
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 40px;
    .title{
        margin-bottom: 32px;
        font-size: 26px;
    }
    .uploader{
        width: 100%;
        position: relative;
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
}
.f-30{
    font-size: 30px;
}
.f-22{
    font-size: 22px;
}
.f-26{
    font-size: 26px;
}

</style>
