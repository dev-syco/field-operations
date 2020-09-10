<template>
  <div class="home-page">
    <Title>
      {{ this.$translate('tableView.title', { name: '112' }) }}
    </Title>
    <Operations :displayKeys="displayKeys" :operations="operations" :filter="filter" :sort="sort"
                @filter-changed="onFiltersChange" @sort-changed="onSortChange"
                @operations-changed="onOperationChange"></Operations>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Title from '@/components/Title.vue';
import Operations from '@/components/operations/Operations.vue';
import Operation, { OperationListSort, OperationListSortOrder } from '@/services/fieldService/models/Operation';
import { OperationsFilters } from '@/const';

@Options({
  components: {
    Title, Operations,
  },
  watch: {
    filter() {
      this.updateOperations();
    },
    sort: {
      handler: function () {
        this.updateOperations();
      },
      deep: true,
    },
  },
})
export default class Home extends Vue {
  public displayKeys: Array<keyof Operation> = ['formatDate', 'type', 'culture', 'assessment'];

  public operations: Operation[] | null = null;

  public filter: OperationsFilters = OperationsFilters.ALL;

  public sort: OperationListSort = {
    order: OperationListSortOrder.ASC,
    field: 'formatDate',
  };

  public onFiltersChange(type: OperationsFilters) {
    this.filter = type;
  }

  public onSortChange(field: string) {
    /* Toggling sorting */
    if (this.sort.field === field) {
      if (this.sort.order === OperationListSortOrder.DESC) {
        this.sort.field = '';
        this.sort.order = OperationListSortOrder.ASC;
      } else {
        this.sort.order = OperationListSortOrder.DESC;
      }
    } else {
      this.sort.field = field;
    }
  }

  public created() {
    this.updateOperations();
  }

  public onOperationChange() {
    this.updateOperations();
  }

  public async updateOperations() {
    this.operations = null;
    let filterCallback;
    switch (this.filter) {
      case OperationsFilters.FINISHED:
        filterCallback = (operation: Operation) => operation.assessment !== null;
        break;
      case OperationsFilters.PLANNED:
        filterCallback = (operation: Operation) => operation.assessment === null;
        break;
    }
    this.operations = await this.$fieldService.getOperations({ filterCallback, sort: this.sort });
  }
}
</script>
