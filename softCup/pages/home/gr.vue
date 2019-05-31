<template>
  <view>
    <cmd-nav-bar back title="信息设置"></cmd-nav-bar>
    <cmd-page-body type="top">
      <cmd-transition name="fade-up">
        <view>
          <cmd-cel-item title="头像" slot-right arrow>
            <cmd-avatar src="../static/imgs/fx1.png"></cmd-avatar>
          </cmd-cel-item>
          <cmd-cel-item title="积分" addon="566" arrow></cmd-cel-item>
          <cmd-cel-item title="昵称" addon="Slimmer" arrow></cmd-cel-item>
          <cmd-cel-item title="姓名" addon="Lich" arrow></cmd-cel-item>
          <cmd-cel-item title="联系方式" addon="15676109501" arrow></cmd-cel-item>
          <cmd-cel-item title="证件号码" addon="450112xxxxxxxx2017" arrow></cmd-cel-item>
          <cmd-cel-item title="我的地址" addon="广西壮族自治区南宁市西乡塘区大学西路29号" arrow></cmd-cel-item>
          <cmd-cel-item title="修改密码" @click="fnClick('modify')" arrow></cmd-cel-item>
          <button class="btn-logout">退出登录</button>
        </view>
      </cmd-transition>
    </cmd-page-body>
  </view>
</template>

<script>

  export default {
   

    data() {
      return {};
    },

    mounted() {},
    
    methods:{
     
 
    }
  }
</script>

<style>
  .btn-logout {
    margin-top: 100upx;
    width: 80%;
    border-radius: 50upx;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(to right, #365fff, #36bbff);
  }

  .btn-logout-hover {
    background: linear-gradient(to right, #365fdd, #36bbfa);
  }
</style>
