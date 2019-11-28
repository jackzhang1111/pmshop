<template>
<!-- 取消订单遮罩 -->
    <div class="cancel-order">
        <div class="cancel-list">
            <div class="cancel-title">
                <span>取消订单</span>
                <van-icon name="cross" class="cross"/>
            </div>
            <div class="yuanyin">
                请选择取消订单的原因
            </div>
            <div class="yuanyin-list">
                <span>我不想买了</span>
                <div class="yuan" v-if="istrue" @click="istrue =!istrue"></div>
                <div class="yuan-img" v-else @click="istrue =!istrue">
                    <img src="@/assets/img/confirmOrder/icon-02@2x.png">
                </div>
            </div>
            <div class="yuanyin-list">
                <span>信息填写错误，重新拍</span>
                <div class="yuan" v-if="istrue" @click="istrue =!istrue"></div>
                <div class="yuan-img" v-else @click="istrue =!istrue">
                    <img src="@/assets/img/confirmOrder/icon-02@2x.png">
                </div>
            </div>
            <div class="yuanyin-list">
                <span>卖家缺货</span>
                <div class="yuan" v-if="istrue" @click="istrue =!istrue"></div>
                <div class="yuan-img" v-else @click="istrue =!istrue">
                    <img src="@/assets/img/confirmOrder/icon-02@2x.png">
                </div>
            </div>
            <div class="yuanyin-list">
                <span>其他原因</span>
                <div class="yuan" v-if="istrue" @click="istrue =!istrue"></div>
                <div class="yuan-img" v-else @click="istrue =!istrue">
                    <img src="@/assets/img/confirmOrder/icon-02@2x.png">
                </div>
            </div>
            <div class="btns">
                <div class="btn-zbqx">
                    暂不取消
                </div>
                <div class="btn-qdqx">
                    确定取消
                </div>
            </div>
        </div>
        
        
        
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            istrue:false
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

    },
};
</script>

<style scoped lang="less">
.cancel-order{
    position: fixed;
    bottom: 0;
    background-color: #fff;
    height: 850px;
    width: 100vw;
    padding: 0 30px;
    box-sizing: border-box;
    .cancel-list{
        position: relative;
        height: 100%;
    }
    .cancel-title{
        height: 100px;
        text-align: center;
        line-height: 100px;
        font-size:36px;
        color: #333;
        position: relative;
    }
    .cross{
        position: absolute;
        right:45px;
        top:34px
    }
    .yuanyin{
        font-size:26px;
        color: #999;
        margin-bottom: 30px;
    }
    .yuanyin-list{
        height: 100px;
        line-height: 100px;
        font-size:30px;
        color: #333;
        border-bottom: 1px solid #DCDCDC;
        position: relative;
    }
    .yuan{
        width:40px;
        height:40px;
        position: absolute;
        border-radius: 50%;
        border:2px solid rgba(153,153,153,1);
        top:0;
        right:30px;
    }
    .yuan-img{
        width:40px;
        height:40px;
        position: absolute;
        top:0;
        right:30px;
        img{
            position: absolute;
            top:0;
            left:0
        }
    }
    .btns{
        position: absolute;
        bottom: 30px;
        width: 100%;
        .btn-zbqx{
            width:300px;
            height:100px;
            background:rgba(153,153,153,1);
            font-size:40px;
            color: #fff;
            line-height: 100px;
            text-align: center;
            float: left;
        }
        .btn-qdqx{
            width:300px;
            height:100px;
            background-color: #FA5300;
            font-size:40px;
            color: #fff;
            line-height: 100px;
            text-align: center;
            float: right;
        }
    }
}
</style>
