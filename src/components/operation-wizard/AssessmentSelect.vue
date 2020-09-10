<template>
  <div class="assessment-select-component">
    <div class="label">
      {{ $translate('operationAdding.assessment') }}
    </div>
    <div class="buttons">
      <button :class="[{selected: key === modelValue}, i.toLowerCase()]"
              v-for="(i, key) in assessments" :key="key"
              @click="onAssessmentClick(key)">
        {{ $translate(`assessment.short.${i.toLowerCase()}`) }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Enum from '@/utils/enum';
import { Assessment as AssessmentType } from '@/services/fieldService/models/Operation';

export enum AssessmentSelectEvents {
  VALUE_CHANGED = 'update:modelValue',
}

@Options({
  props: ['modelValue'],
})
export default class AssessmentSelect extends Vue {
  public onAssessmentClick(assessment: AssessmentType) {
    this.$emit(AssessmentSelectEvents.VALUE_CHANGED, assessment);
  }

  public get assessments() {
    return Enum.getKeys(AssessmentType);
  }
}
</script>

<style lang="less">
@import "../../assets/less/vars";

.assessment-select-component {
  .label {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.338461px;
    text-transform: uppercase;
  }

  .buttons {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    margin-top: 13px;

    button {
      border: none;
      background: #F9F9F9;
      width: 100%;
      padding: 10px 15px;
      cursor: pointer;
      font-weight: 500;
      font-size: 11px;
      line-height: 20px;
      text-align: center;
      letter-spacing: -0.338461px;
      text-transform: uppercase;

      &:not(:last-child) {
        border-right: 1px solid #EFF0F0;
      }

      &:focus, &:active {
        outline: none;
      }

      &.selected {
        color: #fff;

        &.excellent {
          background: @green;
        }

        &.satisfactorily {
          background: @yellow;
        }

        &.badly {
          background: @red;
        }
      }
    }
  }
}
</style>
