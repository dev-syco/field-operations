<template>
  <a-date-picker v-model:value="value"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment, { Moment } from 'moment';
import TDate from '@/services/fieldService/models/TDate';
import { transformMomentToTDate, transformTDatToMoment } from '@/utils';

export enum OperationDateEvents {
  VALUE_CHANGED = 'update:modelValue',
}

@Options({
  props: ['modelValue'],
})
export default class OperationDate extends Vue<{ modelValue: TDate }> {
  public updated() {
    const { year, month, day } = this.$props.modelValue;
    if (!year || !month || !day) {
      const defaultDate = transformMomentToTDate(transformTDatToMoment(this.$props.modelValue));
      this.$emit(OperationDateEvents.VALUE_CHANGED, defaultDate);
    }
  }

  public get value() {
    return transformTDatToMoment(this.$props.modelValue);
  }

  public set value(date: Moment) {
    this.$emit(OperationDateEvents.VALUE_CHANGED, transformMomentToTDate(date));
  }
}
</script>

<style lang="less">
.ant-calendar-picker {
  margin-top: 5px !important;
 .ant-input {
   border: none;
 }
}
</style>
