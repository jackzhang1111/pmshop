<template>
<!-- 重置密码 -->
    <div class="revise-password">
        <div class="content">
            <div class="line"></div>
            <div class="pass-word"> 
                <span>New password:</span>
                <div class="input-con">
                    <input type="text" class="name-input" placeholder="请输入6-20个字符的密码">
                    <img src="@/assets/img/login/hidden@3x.png" alt="图标" class="password-icon">
                </div>
                <div class="line"></div>
            </div>
            <div class="re-enter"> 
                <span>Re-enter:</span>
                <div class="input-con">
                    <input type="text" class="name-input" placeholder="请再次输入新密码">
                </div>
                 <div class="line"></div>
            </div>
            <div class="upload">
                <van-button type="info" size="large" class="load-btn" @click="confirm">Confirm</van-button>
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
        confirm(){
            this.$router.push({name:'支付密码设置成功'})
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.revise-password{
    width: 100%;
    height: 100%;
    padding:28px 40px 0 40px;
    box-sizing: border-box;
    .content{
        width: 100%;
        position: relative;
        .line{
            width: 100%;
            height: 2px;
            background-color: #DCDCDC;
        }
        .upload{
            width: 100%;
            padding:0;
            height:88px;
            position: absolute;
            top:258px;
            box-sizing: border-box;
            overflow: hidden;
            .load-btn{
                height:100%;
                background-color: #999;
            }
        }
        
    }
    .re-enter{
        width: 100%;
        position: absolute;
        top:130px;
        left:0;
        display: inline-block;
        .input-con{
            position: absolute;
            top:-5px;
            left:150px;
            width: 530px;
            height:60px;
            font-size: 26px;
            margin-bottom: 50px;
        }
        .name-input{
            position: absolute;
            width: 350px;
            border: 0;
            left:80px;
        }
        .password-icon{
            position: absolute;
            right: 30px;
            width: 40px;
            height: 40px;
        }
        span:nth-child(1){  
            font-size: 30px;
            color: #333333
        }
        .line{
            position: absolute;
            top:58px;
        }
    }
    .pass-word{
        width: 100%;
        position: absolute;
        top:30px;
        left:0;
        display: inline-block;
        .input-con{
            position: absolute;
            top:-5px;
            left:150px;
            width: 530px;
            height:60px;
            font-size: 26px;
            margin-bottom: 50px;
        }
        .name-input{
            position: absolute;
            width: 350px;
            border: 0;
            left:80px;
        }
        .password-icon{
            position: absolute;
            right: 30px;
            width: 40px;
            height: 40px;
        }
        span:nth-child(1){  
            font-size: 30px;
            color: #333333
        }
        .line{
            position: absolute;
            top:58px;
        }
    }
}
</style>
