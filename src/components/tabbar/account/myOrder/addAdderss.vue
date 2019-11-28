<template>
<!-- 注册页面 -->
    <div class="register">
        <div class="create-user">
            <van-cell-group class="border-0">
                <van-field v-model="username" placeholder="收货人"/>
            </van-cell-group>
            <van-cell-group class="border-0">
                <van-field v-model="username" clearable right-icon="arrow" placeholder="手机号码"/>
            </van-cell-group>
            <van-cell-group class="border-0">
                <van-field v-model="username" clearable right-icon="arrow" placeholder="请选择国家"/>
            </van-cell-group>
            <van-cell-group class="border-0">
                <van-field v-model="username" clearable right-icon="arrow" placeholder="州/省/地区"/>
            </van-cell-group>
            <van-cell-group class="border-0">
                <van-field v-model="username" clearable right-icon="arrow" placeholder="城市/县/镇"/>
            </van-cell-group>
            <van-cell-group class="border-0">
                <van-field v-model="username" clearable right-icon="arrow" placeholder="县/区/街道"/>
            </van-cell-group>
            <van-cell-group class="border-0 textarea">
                <van-field
                    v-model="username"
                    rows="5"
                    autosize
                    type="textarea"
                    placeholder="请输入详细地址"
                />
            </van-cell-group>
        </div>
        <div class="footer">
            保存地址
        </div>
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '30%' }">
            <van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']"/>
        </van-popup>
    </div>
</template>

<script>

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
        
    },
};
</script>

<style scoped lang="less">
.register{
    padding:28px 0 0 0;
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
    .create-user{
        /deep/ .van-cell__value{
            .van-field__body{
                .van-field__control{
                    font-size: 28px;
                }
            }
        }
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
    .footer{
        position: fixed;
        width: 100vw;
        height: 100px;
        background-color: #FA5300;
        text-align: center;
        line-height: 100px;
        color: #fff;
        font-size:36px;
        bottom: 0;
    }
}
</style>
