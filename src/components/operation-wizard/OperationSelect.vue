<template>
  <a-select
    v-model:value="value"
    ref="select"
    @change="handleChange"
  >
    <template v-slot:placeholder>
      <div class="placeholder-label">{{ $translate(`operationAdding.operation`) }}</div>
      <div class="placeholder-name">{{ $translate(`placeholder.select`) }}</div>
    </template>
    <a-select-option :value="key" :key="key" v-for="(value, key) in operations">
      {{ $translate(`operations.${value.toLowerCase()}`) }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { OperationType } from '@/services/fieldService/models/Operation';
import Enum from '@/utils/enum';

export enum OperationSelectEvents {
  VALUE_CHANGED = 'update:modelValue',
}

@Options({
  props: ['modelValue'],
  watch: {
    modelValue() {
      this.value = this.modelValue;
    },
  },
})
export default class OperationSelect extends Vue {
  public value: OperationType | null = null;

  public get operations() {
    return Enum.getKeys(OperationType);
  }

  public handleChange(value: OperationType) {
    this.$emit(OperationSelectEvents.VALUE_CHANGED, value);
  }
}
</script>

<style lang="less">
.ant-select {
  width: 100%;

  &-selection {
    border: none !important;

    &--single {
      height: 48px !important;
    }

    &__rendered {
      line-height: 48px !important;
    }

    &__placeholder {
      height: 48px !important;
      top: 45% !important;

      .placeholder-label {
        font-weight: 500;
        font-size: 8px;
        line-height: 11px;
        letter-spacing: -0.4px;
        color: #333333;
        opacity: 0.7;
        text-transform: uppercase;
      }

      .placeholder-name {
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.577778px;
        color: #333333;
        mix-blend-mode: normal;
        opacity: 0.7;
      }
    }
  }
}
</style>
