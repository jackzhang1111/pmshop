<template>
    <div class="add-address">
        <settings-header title="添加收货地址" title2="保存"></settings-header>
        <div class="cell">
            <input type="search" :class="{'c-333':isBace}" class="input-xt" placeholder="收货人" v-model="shr" disabled>
        </div>
        <div class="cell">
            <input type="search" :class="{'c-333':isBace}" class="input-xt" placeholder="手机号码" v-model="sjhm">
            <span class="hm c-999">+86</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell">
            <span :class="{'c-333':isBace}">请选择国家</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell">
            <span :class="{'c-333':isBace}">州/省/地区</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell ">
            <span :class="{'c-333':isBace}">城市/县/镇</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="cell">
            <span :class="{'c-333':isBace}">县/区/街道</span>
            <van-icon name="arrow" class="arrow c-999"/>
        </div>
        <div class="top-textarea">
            <textarea placeholder="请输入详细地址"></textarea>
        </div>
        <div class="cell">
            <span class="c-333">设为默认地址</span>
            <van-switch v-model="checked" class="switch" active-color="#07c160" inactive-color="#999"/>
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
            checked:true,
            isBace:true,
            shr:123,
            sjhm:123,
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
.add-address{
    .cell{
        height: 88px;
        line-height: 88px;
        padding: 0 30px;
        background-color: #fff;
        color: #999;
        position: relative;
        font-size: 26px;
        border-bottom: 1px solid #DCDCDC;
        &:nth-last-child(1){
            border:0
        }
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
            height: 40px;
            border: 0;
            width: 80%;
            background-color: #fff;
        }
        .hm{
            position: absolute;
            right:80px;
            top:50%;
            transform: translateY(-50%);
        }
        .switch{
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            right:57px;
        }
    }
    .top-textarea{
        padding:36px 30px 0;
        background-color: #fff;
        margin-bottom: 40px;
        textarea{
            width: 100%;
            border:0;
            font-size: 26px;
            min-height: 199px;
        }
    }
}

</style>
