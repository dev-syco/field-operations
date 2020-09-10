<template>
  <div class="culture-component">
    <div class="info">
      <div class="label">Озимая пшеница</div>
      <div class="name">Победа 50</div>
    </div>
    <div class="icon"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Culture extends Vue {}
</script>

<style lang="less" scoped>
.culture-component {
  display: flex;
  .icon {
    background: url('../assets/img/CropWheat.png') 50% 50% no-repeat;
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }
  .label {
    font-size: 15px;
    line-height: 21px;
    text-align: right;
    letter-spacing: -1.17647px;
  }
  .name {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    text-align: right;
    letter-spacing: -0.45px;
    text-transform: uppercase;
  }
}
</style>
