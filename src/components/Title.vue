<template>
  <h1 class="title-component">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Title extends Vue {}
</script>

<style lang="less">
.title-component {
  font-weight: 500;
  font-size: 25px;
  line-height: 31px;
  letter-spacing: -0.8px;
  margin: 0;
}
</style>
