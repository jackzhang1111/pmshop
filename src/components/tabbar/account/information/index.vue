<template >
  <!-- 消息订阅 -->
  <div class="news c-b-gray">
	<balance-header title="消息"></balance-header>
    <div class="plr30 ">
      <div class="time">2019-10-23 17:30</div>
      <div class="list" @click="$router.push({name:'消息详情'})">
        <img src="@/assets/img/confirmOrder/picture@2x.png"/>
        <div class="text plr30">
          <p>公告通知!!!</p>
          <span>三月份出海关，不用交税？！</span>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import balanceHeader from './itemComponents/balanceHeader'
export default {
	name: "HelloWorld",
	data() {
		return {};
	},
	methods: {},
	components:{
		balanceHeader
	}
};
</script> 

<style scoped lang="less">
.news {
  min-height: 100vh;
  text-align: center;
  .time {
    display: inline-block;
    margin: 60px 0 40px;
    padding: 11px 22px;
    background: rgba(220, 220, 220, 1);
    font-size: 26px;
    font-family: Helvetica;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 1;
  }
  .list {
    margin: 0 auto;
    width: 690px;

    background: rgba(255, 255, 255, 1);
    text-align: left;
    img {
      display: block;
      width: 100%;
    }
    .text {
      height: 110px;
      font-family: PingFang SC;
      font-weight: 500;
      p {
        font-size: 30px;
        color: rgba(51, 51, 51, 1);
        line-height: 27px;
        margin-bottom: 20px;
        margin-top: 20px;
      }
      span {
        font-size: 20px;
        color: rgba(153, 153, 153, 1);
        line-height: 27px;
      }
    }
  }
}
// 清除浮动
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: "";
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
.plr30 {
  box-sizing: border-box;
  padding: 0 30px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}

</style>
