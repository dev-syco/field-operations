<template>
  <div class="field-component">
    <div class="icon"></div>
    <div class="info">
      <div class="label">Поле</div>
      <div class="name">112</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Field extends Vue {}
</script>

<style lang="less" scoped>
.field-component {
  display: flex;
  .icon {
    background: #73FF82;
    border: 1px solid #66CC66;
    width: 27px;
    height: 27px;
    margin-right: 10px;
  }
  .label {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    letter-spacing: -0.45px;
    color: #333333;
    text-transform: uppercase;
  }
  .name {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: -0.705882px;
  }
}
</style>
