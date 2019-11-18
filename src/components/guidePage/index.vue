<template>
  <div class="guidePage">
      <div class="logo"></div>
      <div class="title">TOSPINO</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
}
</script> 

<style scoped lang="less">
.guidePage{
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
  position: relative;
  .logo{
    width: 250px;
    height:250px;
    background-image:url('~@/assets/img/guidePage/logo.png');
    background-size: 100%;
    position: absolute;
    top:800px;
    left: 50%;
    right: 50%;
    transform: translate(-50%)
  }
  .title{
    width: 100%;
    position: absolute;
    top:1074px;
    font-size: 40px;
    text-align: center
  }
}

</style>
