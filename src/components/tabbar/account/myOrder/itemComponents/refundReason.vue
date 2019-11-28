<template>
<!-- 退款原因 -->
    <div class="refund-reason">
        <van-overlay :show="show5" >
            <div class="cancel-order">
                <div class="cancel-list">
                    <div class="cancel-title">
                        <span>退款原因</span>
                        <van-icon name="cross" class="cross"/>
                    </div>
                    <div class="yuanyin-list" v-for="(reason,index) in reasonList" :key="index" @click="obtainText(reason.text)">
                        <span>{{reason.text}}</span>
                    </div>
                    
                </div>
                <div class="btns">
                    关闭
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
            show5:false,
            reasonList:[
                {
                    text:'商品描述的尺寸与实物不符'
                },
                {
                    text:'商品描述的颜色/款式与实物不符'
                },
                {
                    text:'商品描述的材质面料与实物不符'
                },
                {
                    text:'少件/漏发'
                },
                {
                    text:'包装/商品破损/污渍'
                },
                {
                    text:'卖家发错货'
                }
            ]
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
        obtainText(text){
            this.show5 = false
            console.log(text);
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.refund-reason{
    .cancel-order{
        position: fixed;
        bottom: 0;
        background-color: #fff;
        height: 850px;
        width: 100vw;
        box-sizing: border-box;
        .cancel-list{
            position: relative;
            height: 100%;
            padding: 0 30px;
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
            border:1px solid rgba(153,153,153,1);
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
            bottom: 0px;
            width: 100vw;
            background-color: #FA5300;
            height: 100px;
            line-height: 100px;
            font-size: 40px;
            color: #fff;
            text-align: center;
        }
    }
}
</style>
