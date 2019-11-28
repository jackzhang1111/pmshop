<template>
<!-- 修改支付密码 -->
    <div class="edit-paypawo">
        <settings-header title="修改支付密码" title2=""></settings-header>
        <div class="edit-paypawo-content">
            <div class="m-b-19">
                <div class="cell">
                    <input type="search"  class="input-xt" placeholder="原支付密码">
                </div>
                <div class="cell">
                    <input type="search"  class="input-xt" placeholder="输入新支付密码">
                    <van-icon name="eye-o" class="pas-icon" v-if="eyeStuats" @click="eyeStuats = !eyeStuats"/>
                    <van-icon name="closed-eye"  class="pas-icon" v-else @click="eyeStuats = !eyeStuats"/>
                </div>
                <div class="cell">
                    <input type="search"  class="input-xt" placeholder="确认支付密码">
                </div>
            </div>
            <div class="btn">
                <div class="btn-save">
                    确定
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import settingsHeader from './itemComponents/settingsHeader'
export default {
    props: {

    },
    data() {
        return {
            eyeStuats:false
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
        settingsHeader
    },
};
</script>

<style scoped lang="less">
.edit-paypawo{
    .edit-paypawo-content{
        padding: 50px 30px 0;
        box-sizing: border-box;
    }
    .cell{
        height: 110px;
        line-height: 110px;
        padding: 0 30px;
        background-color: #fff;
        color: #999;
        position: relative;
        font-size: 26px;
        border-bottom: 1px solid #DCDCDC;
        margin-bottom: 20px;
        &:nth-last-child(1){
            border:0
        }
        .input-xt{
            height: 40px;
            border: 0;
            width: 85%;
            background-color: #fff;
        }
        .pas-icon{
            font-size: 40px;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            right:30px;
        }
    }
    .tips{
        padding: 0 30px;
        color: #999;
        font-size: 22px;
        margin-bottom: 39px;
    }
    .btn{
        height: 88px;
        text-align: center;
        line-height: 88px;
        color: #fff;
        font-size:34px;
        margin-top:40px;
        .btn-save{
            height:88px;
            background:rgba(250,83,0,1);
        }
    }
}
.m-b-19{
    margin-bottom: 19px;
}
</style>
