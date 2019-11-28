<template>
    <div class="posse-address">
        <div class="address-content">
            <div class="content-p1">
                <span class="name">路人甲</span>
                <span class="phone">+86 15056161646</span>
                <span class="dqmr">当前默认</span>
            </div>
            <div class="content-p2">
                <span>收货地址：中国-北京市 市辖区 朝阳区 北京市朝阳区曙光西里甲5号院17号楼</span>
            </div>
            <div class="content-p3">
                <span>邮政编码：100020</span>
            </div>
            <div class="content-btns">
                <div class="btn-bj">编辑</div>
                <div class="btn-sc" @click="deleteCli">删除</div>
            </div>
        </div>

        <van-overlay :show="redordshow" @click="redordshow = false" >
            <!-- 删除历史记录 -->
            <div class="overlay-wrapper" @click.stop>
                <div class="overlay-wrapper-p1">
                    您确认要删除这个地址吗？
                </div>
                <div class="overlay-wrapper-p2">
                    请注意：删除该地址不会删除任何等待发送到该地址的订单,为确保未来的订单旅行不受影响,请使用此地址更新所有愿望清单及订阅和保存设置。
                </div>
                <div class="overlay-wrapper-btns">
                    <span class="btn-no">否</span>
                    <span class="btn-yes"> 是</span>
                </div>
            </div>
        </van-overlay>


    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            redordshow:true
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
        deleteCli(){

        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.posse-address{
    padding: 0 30px;
    .address-content{
        width:690px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(153,153,153,1);
        padding: 29px 30px 20px 39px;
        box-sizing: border-box;
        margin-top:30px;
        .content-p1{
            color: #333;
            margin-bottom: 30px;
            .name{
                font-size: 36px;
                margin-right:33px;
            }
            .phone{
                font-size:28px;
                color: #999;
            }
            .dqmr{
                float: right;
                color: #DB9000;
                font-size:24px;
            }
        }
        .content-p2,.content-p3{
            font-size:24px;
            line-height:36px;
            color: #333;
            margin-bottom: 20px;
        }
        .content-btns{
            position: relative;
            height: 40px;
            .btn-bj{
                width:100px;
                height:40px;
                border:1px solid rgba(51,51,51,1);
                line-height: 40px;
                text-align: center;
                position: absolute;
                left:176px;
            }
            .btn-sc{
                width:100px;
                height:40px;
                border:1px solid rgba(51,51,51,1);
                line-height: 40px;
                text-align: center;
                position: absolute;
                right: 215px;
            }
        }
    }
}
.van-overlay{
    .overlay-wrapper{
        width: 550px;
        background-color: #fff;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        padding: 49px 30px 40px;
        box-sizing: border-box;
        .overlay-wrapper-p1{    
            font-size:36px;
            color: #333;
            margin-bottom: 30px;
        }
        .overlay-wrapper-p2{
            font-size: 20px;
            color: #666;
            margin-bottom: 49px;
        }
        .overlay-wrapper-btns{
            font-size:34px;
            .btn-no{
                float: left;
                width:146px;
                height:58px;
                background:rgba(220,220,220,1);
                color: #333;
                text-align: center;
                line-height: 58px;
                margin-left:54px;
            }
            .btn-yes{
                float: right;
                width:146px;
                height:58px;
                background:#FA5300;
                text-align: center;
                line-height: 58px;
                margin-right:54px;
            }
        }
    }
}
</style>
