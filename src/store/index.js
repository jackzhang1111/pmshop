import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);


const state = {
    serchName:'',//搜索框输入的内容
    addreData:{
        lev1:{
            id:null,//国家城市1级ID
            name:null,
            areaCode:null
        },
        lev2:{
            id:null,//国家城市2级ID
            name:null,
            areaCode:null
        },
        lev3:{
            id:null,//国家城市3级ID
            name:null,
            areaCode:null
        },
        lev4:{
            id:null,//国家城市4级ID
            name:null,
            areaCode:null
        },
        name:'',
        phone:'',
    },
    posseObj:{},//编辑收货地址
    selectionShopCar:[],//购物车商品
    searchOrderFormData:{},//搜索订单需要的条件
    adressItem:{},//更换选择收货地址时存储

    orderTitleName:'我的订单',//orderTitle组件头部的标题
    
}
const getters = {
    
}

const mutations = {
	SETSTOPCARLIST(state, arr=[]) {
        return (state.selectionShopCar = arr)
    },
    SETORDERFORMDATA(state,obj={}){
        return (state.searchOrderFormData = obj)
    },
    SETADRESSITEM(state,obj={}){
        return (state.adressItem = obj)
    },
    ORDERTITLENAME(state,string){
        return state.orderTitleName = string
    }
}

const actions = {
	setstopcarlist(context, arr=[]) {
        return context.commit('SETSTOPCARLIST', arr)
    },
    setorderformdata(context,obj={}){
        return context.commit('SETORDERFORMDATA', obj)
    },
    setadressitem(context,obj={}){
        return context.commit('SETADRESSITEM', obj)
    },
    deladressitem(context,obj={}){
        return context.commit('SETADRESSITEM', obj)
    },
    ordertitlename(context,string){
        return context.commit('ORDERTITLENAME', string)
    }
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})