<template>
  <div class="culture-name" v-if="cultureName">
    <i class="icon"/>
    {{ $translate(`culture.${cultureName}`) }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Culture as CultureType } from '@/services/fieldService/models/Operation';

@Options({
  props: {
    data: Number,
  },
})
export default class Culture extends Vue<{ data: number }> {
  public get cultureName() {
    const name = CultureType[this.$props.data];
    return name && name.toLowerCase();
  }
}
</script>

<style lang="less" scoped>
.culture-name {
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.338461px;
}
.icon {
  background: url('../../../assets/img/CropWheat.png') 50% 50% no-repeat;
  width: 30px;
  height: 30px;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
</style>
