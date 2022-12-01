<template>
  <main>
    <img class="health_code" src="@/assets/healthCode.jpg" alt="">
    <div class="health_code_text">苏康码·绿码</div>
    <div class="name">陈二光</div>
    <div class="number">
      <div class="phoneNumber test">132****8691</div>
      <div class="idNumber test">342******559</div>
    </div>
    <div class="now_time">{{ nowTime }}</div>
    <div class="collect_date">{{hesuanTime}}核酸检测</div>
    <div class="result_date">{{hesuanTime}}核酸检测</div>
  </main>
</template>

<script src="./Home.js"></script>

<style lang="scss" scoped>
@import "./Home.scss";
</style>