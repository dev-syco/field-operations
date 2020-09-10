<template>
  <div :class="['assessment', assessmentName, {grayscale: !assessmentName}]">
    <i/>
    <span>
    {{ $translate(`assessment.${assessmentName}`) }}
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Assessment as AssessmentType } from '@/services/fieldService/models/Operation';

@Options({
  props: {
    data: Number,
  },
})
export default class Assessment extends Vue<{ data: number }> {
  public get assessmentName() {
    const name = AssessmentType[this.$props.data];
    return name && name.toLowerCase();
  }
}
</script>

<style lang="less">
@import "../../../assets/less/vars";
.assessment {
  font-size: 11px;
  line-height: 19px;
  letter-spacing: -0.293333px;
  &.excellent i {
    background: @green;
  }
  &.satisfactorily i {
    background: @yellow;
  }
  &.badly i {
    background: @red;
  }
  i {
    display: inline-block;
    width: 20px;
    height: 10px;
    border-radius: 5px;
    vertical-align: middle;
    margin-right: 10px;
    background: @gray;
  }
  &.grayscale {
    color: #dbdbdb;
    i {
      background: #EDEEEE;
    }
  }
  span {
    display: inline-block;
  }
}
</style>
