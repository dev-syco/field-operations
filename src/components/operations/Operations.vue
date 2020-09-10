<template>
  <div class="operation-table-component">
    <div class="heading">
      <div class="filters">
        <a :class="{selected: this.filter === value}"
           v-for="(value, key) in filterTypes" :key="value" @click="updateFilter(value)">
          {{ $translate(`tableView.filters.${key.toLowerCase()}`) }}
        </a>
      </div>
      <a-button class="create-operation" @click="onOperationCreateClick">
        <template v-slot:icon>
          <PlusCircleFilled/>
        </template>
        {{ $translate('tableView.addOperation') }}
      </a-button>
    </div>
    <a-spin :spinning="operations === null">
      <table>
        <thead>
        <tr>
          <td v-for="key of displayKeys" :key="key">
            <a :class="['sort', {'selected': sort.field === key}]" @click="toggleSort(key)">
              <span class="title">{{ $translate(`tableView.headers.${key}`) }}</span>
              <CaretUpOutlined v-if="sort.field === key && sort.order === operationSortOrder.DESC"/>
              <CaretDownOutlined v-else/>
            </a>
          </td>
          <td></td>
        </tr>
        </thead>
        <tbody v-if="operations instanceof Array">
        <tr v-for="operation of operations" :key="operation.id">
          <td v-for="key of displayKeys" :key="key">
            <component :is="key" :data="operation[key]"></component>
          </td>
          <td>
            <a-button :size="size" @click="onEditOperationClick(operation)">
              <template v-slot:icon>
                <FormOutlined/>
              </template>
            </a-button>
          </td>
        </tr>
        </tbody>
      </table>
    </a-spin>
    <OperationWizard :operation="operationWizard" @update="onWizardUpdate"
                     @close="onWizardClose"></OperationWizard>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {
  CaretDownOutlined, CaretUpOutlined, FormOutlined, PlusCircleFilled,
} from '@ant-design/icons-vue';
import { OperationsFilters } from '@/const';
import Operation, { OperationListSort, OperationListSortOrder } from '@/services/fieldService/models/Operation';
import Date from './type/Date.vue';
import Type from './type/Type.vue';
import Assessment from './type/Assessment.vue';
import Culture from './type/Culture.vue';
import OperationWizard from '../operation-wizard/OperationWizard.vue';

interface OperationsComponentProps {
  operations: Operation[];
  displayKeys: Array<keyof Operation>;
  filter: string;
  sort: OperationListSort;
}

export enum OperationsComponentEvents {
  FILTERS_CHANGED = 'filter-changed',
  SORT_CHANGED = 'sort-changed',
  OPERATIONS_CHANGED = 'operations-changed',
}

@Options({
  props: {
    operations: Array,
    displayKeys: Array,
    filter: String,
    sort: Object,
  },
  components: {
    formatDate: Date,
    type: Type,
    assessment: Assessment,
    culture: Culture,
    OperationWizard,
    CaretUpOutlined,
    CaretDownOutlined,
    PlusCircleFilled,
    FormOutlined,
  },
})
export default class Operations extends Vue<OperationsComponentProps> {
  public operationWizard: Operation | null = null;

  public get filterTypes() {
    return OperationsFilters;
  }

  public updateFilter(type: OperationsFilters) {
    this.$emit(OperationsComponentEvents.FILTERS_CHANGED, type);
  }

  public get operationSortOrder() {
    return OperationListSortOrder;
  }

  public toggleSort(key: string) {
    this.$emit(OperationsComponentEvents.SORT_CHANGED, key);
  }

  public onOperationCreateClick() {
    this.operationWizard = new Operation({
      date: {},
    });
  }

  public onEditOperationClick(operation: Operation) {
    this.operationWizard = operation;
  }

  public onWizardUpdate(operation: Operation) {
    this.$fieldService.saveOperation(operation).then(() => {
      this.$emit(OperationsComponentEvents.OPERATIONS_CHANGED);
      this.operationWizard = null;
    });
  }

  public onWizardClose() {
    this.operationWizard = null;
  }
}
</script>

<style lang="less">
@import './operations';
</style>
