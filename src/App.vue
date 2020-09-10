<template>
  <div class="wrapper">
    <header></header>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
@import "./assets/less/vars";

@headerHeight: 80px;

header {
  background: @headerBg;
  height: @headerHeight;
  width: 100%;
}

.content {
  min-height: calc(100% - @headerHeight);
  background: #FFFFFF;
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.1);
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
}
</style>
