<template>
<!-- 地址列表 -->
    <div class="address-list">
        <div class="address" @click="toEditAddress">
            <div class="address-text">
                <div class="address-text-top">
                    <span>收货人：陆丰</span>
                    <span class="fl-right">15246616466</span>
                </div>
                <div class="address-text-bottom">
                    <span>收货地址：中国-广东省-深圳市马田街道南环大道禾仓路格雅大厦格雅表1栋3楼307</span>
                </div>
            </div>
            <div class="yuan" v-if="istrue" @click="istrue =!istrue"></div>
            <div class="yuan-img" v-else @click="istrue =!istrue">
                <img src="@/assets/img/confirmOrder/icon@2x.png">
            </div>
        </div>
        <div class="footer" @click="toAddAddress">
            新增地址
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
        toEditAddress(){
            this.$router.push({name:'我的订单修改地址'})
        },
        toAddAddress(){
            this.$router.push({name:'新增地址'})
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.address-list{
    .address{
        height: 200px;
        background-color: #FFF;
        position: relative;
        padding:50px 30px 0;
        box-sizing: border-box;
        .address-text{
            width:597px;
            color: #333;
            .address-text-top{
                margin-bottom: 14px;
                font-size: 30px;
            }
            .address-text-bottom{
                line-height:33px;
                font-size: 22px;
            }
        }
        .yuan{
            width:40px;
            height:40px;
            border-radius: 50%;
            border:1px solid rgba(153,153,153,1);
            position: absolute;
            top:50%;
            right:30px;
        }
        .yuan-img{
            width:40px;
            height:40px;
            position: absolute;
            top:50%;
            right:30px;
            img{
                position: absolute;
                top:0;
                left:0
            }
        }
    }
    .footer{
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 100px;
        background-color: #FA5300;
        font-size: 36px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }
}
</style>
