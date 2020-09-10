<template>
  <div class="date">
    <span class="uppercase">{{ data.getDate() }}</span>
    <span class="uppercase">{{ $translate(`months.${data.getMonth()+1}`).substr(0, 3) }}</span>
    <span class="uppercase">{{ data.getFullYear() }}</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    data: Object,
  },
})
export default class Date extends Vue<{ data: Date }> {
}
</script>

<style lang="less" scoped>
.date {
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  /* identical to box height, or 118% */

  letter-spacing: -0.4px;
  text-transform: uppercase;

  color: #333333;

  mix-blend-mode: normal;
  opacity: 0.8;
}
.uppercase {
  text-transform: uppercase;
}
span:not(:last-child) {
  &:after {
    content: " ";
  }
}
</style>
