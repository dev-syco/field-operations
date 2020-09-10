<template>
  <div class="operation-type">
    {{ $translate(`operations.${operationName}`) }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { OperationType } from '@/services/fieldService/models/Operation';

@Options({
  props: {
    data: Number,
  },
})
export default class Type extends Vue<{ data: number }> {
  public get operationName() {
    const name = OperationType[this.$props.data];
    return name && name.toLowerCase();
  }
}
</script>

<style lang="less">
.operation-type {
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  letter-spacing: -0.47px;
}
</style>
