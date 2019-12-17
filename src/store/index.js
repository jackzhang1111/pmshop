import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);


const state = {
    count: 0,
    serchName:'',
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
        phone:''
    },
    posseObj:{},//编辑收货地址
    selectionShopCar:[]
    
}
const getters = {
    // getterCount(state) {
    //     // return (state.count += n)
    // }
}

const mutations = {
	SETSTOPCARLIST(state, arr=[]) {
        return (state.selectionShopCar = arr)
    },
}

const actions = {
	setstopcarlist(context, arr=[]) {
        console.log(context)
        return context.commit('SETSTOPCARLIST', arr)
    },
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})