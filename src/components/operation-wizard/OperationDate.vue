<template>
  <a-date-picker v-model:value="value"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';
import TDate from '@/services/fieldService/models/TDate';
import { transformMomentToTDate, transformTDatToMoment } from '@/utils';

export enum OperationDateEvents {
  VALUE_CHANGED = 'update:modelValue',
}

@Options({
  props: ['modelValue'],
})
export default class OperationDate extends Vue<{ modelValue: TDate }> {
  readonly modelValue: TDate;

  public updated() {
    const { year, month, day } = this.modelValue;
    if (!year || !month || !day) {
      const defaultDate = transformMomentToTDate(transformTDatToMoment(this.modelValue));
      this.$emit(OperationDateEvents.VALUE_CHANGED, defaultDate);
    }
  }

  public get value() {
    return transformTDatToMoment(this.modelValue);
  }

  public set value(date: moment) {
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
