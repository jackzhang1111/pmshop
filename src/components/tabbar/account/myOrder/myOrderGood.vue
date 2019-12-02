<template>
    <div class="my-order-good">
        <search-head @onfocus="onfocus" @getInputVal="getInputVal" @onSearch="onSearch"></search-head>
        <div>
            <!-- 待付款 -->
            <dfk></dfk>
            <!-- 待发货 -->
            <dfh></dfh>
        </div>
        
    </div>
</template>

<script>
import dfh from './itemComponents/dfh'
import dfk from './itemComponents/dfk'
import searchHead from '@/multiplexing/searchHead.vue'
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
         //输入框获得焦点时触发
        onfocus(){
            this.$router.go(-1)
        },
        //点击搜索按钮
        onSearch(){
            console.log(123);
            // this.$router.push({name:'搜索商品1'})
        },
        //输入框内容变化时触发
        getInputVal(value){
            // console.log(value);
        },
    },
    components: {
        dfh,
        dfk,
        searchHead
    },
};
</script>

<style scoped lang="less">
.my-order-good{
    padding: 20px 30px;
}
</style>
