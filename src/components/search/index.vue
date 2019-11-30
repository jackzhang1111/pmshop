<template>
<!-- 搜索界面 -->
    <div class="search">
        <div class="detailsHeader c-b-gray">
            <div class="logo">
                <van-icon name="arrow-left" size="17px" @click="$router.go(-1)"/>
            </div>
            <div class="search-input">
                <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    show-action
                    shape="round"
                    @search="onSearch"
                    :clearable="true"
                    @clear="cleartxt"
                    @focus="onocus"
                    @input="showInput"
                    >
                    <div slot="action" @click="onSearch" class="sousuo">搜索</div>
                </van-search>
            </div>
        </div>
        <div style="height:45px"></div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            value:'',
            iconShow:true
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
        //搜索按钮
        onSearch(){
            if(this.$route.name == '历史记录') {
                this.$router.push({name:'搜索商品1'})
            }else{
                this.$router.push({name:'收藏夹搜索商品'})
            }
            
            console.log(1234);
            //收藏夹搜索商品
        },
        cleartxt(){
            this.value = '';
        },
        onocus(){
            if(this.$route.name == '历史记录' || this.$route.name == '收藏夹历史记录') return
            this.$router.push({name:'历史记录'})
            
        },
        showInput(){
            console.log(88);
        }
    },
    components: {
        
    },
};
</script>

<style scoped lang="less">
.search{
    height: 100%;
    .detailsHeader{
        width: 100%;
        height: 88px;
        position: fixed;
        top:0;
        left:0;
        z-index: 1;
        .logo{
            position: absolute;
            left:30px;
            top:26px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .search-input{
            position: absolute;
            left:100px;
            top:6px;
            height: 68px;
            overflow: hidden;

            /deep/ .van-search{
                background: #F2F3F5 !important;
                .van-field{
                    width: 480px;
                    height: 60px;
                    line-height: 50px;
                }
                .van-field__clear{
                    font-size: 30px;
                }
            }

        }
        .sousuo{
            width:116px;
            height:58px;
            background:rgba(250,83,0,1);
            border-radius:29px;
            text-align: center;
            line-height: 58px;
            color: #fff;
            font-size:30px;
        }
    }
    // .search-record{
    //     position: relative;
    //     background-color: #fff;
    //     padding: 39px 30px 0;
    //     height: calc(100vh - 88px);
    //     box-sizing: border-box;
    //     .search-title{
    //         height: 60px;
    //         .title-p1{
    //             font-size: 30px;
    //             color: #333;
    //         }
    //         .van-icon{
    //             float: right;
    //             font-size: 40px;
    //         }
    //     }
        
    //     .search-labels{
    //         display: -webkit-flex;
    //         display: flex;
    //         -webkit-flex-wrap: wrap;
    //         flex-wrap: wrap;
    //         -webkit-align-content: center;
    //         align-content: flex-start;
    //         .label{
    //             display: inline-block;
    //             background-color: #F2F3F5;
    //             border-radius:25px;
    //             padding: 12px 26px;
    //             font-size: 26px;
    //             color: #333;
    //             margin:20px 20px 0px 0;
    //         }

    //     }
    // }
    
}
</style>
