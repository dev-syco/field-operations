<template>
  <div class="wizard">
    <a-drawer
      :title="title"
      width="320"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <template v-if="value">
        <div class="body">
          <div class="operation-wizard--information border-block">
            <Field></Field>
            <Culture></Culture>
          </div>
          <div class="operation-wizard--form border-block">
            <OperationSelect v-model="value.type"></OperationSelect>
            <OperationDate v-model="value.date"></OperationDate>
          </div>
          <div class="operation-wizard--comment border-block">
            <a-textarea v-model:value="value.comment"
                        :placeholder="$translate('placeholder.operationComment')" :rows="4"/>
          </div>
          <div class="operation-wizard--assessment border-block">
            <AssessmentSelect v-model="value.assessment"></AssessmentSelect>
          </div>
        </div>
        <div class="footer">
          <a-button @click="saveOperation">
            {{ actionLocale }}
          </a-button>
        </div>
      </template>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { cloneDeep } from 'lodash';
import Operation from '@/services/fieldService/models/Operation';
import Field from '../Field.vue';
import Culture from '../Culture.vue';
import OperationSelect from './OperationSelect.vue';
import AssessmentSelect from './AssessmentSelect.vue';
import OperationDate from './OperationDate.vue';

export enum OperationWizardEvents {
  OPERATION_CHANGED = 'update',
  CLOSE = 'close'
}

@Options({
  props: {
    operation: Object,
  },
  watch: {
    operation() {
      if (this.operation) {
        this.showDrawer();
        this.value = cloneDeep(this.$props.operation);
      } else {
        this.visible = false;
      }
    },
  },
  components: {
    Field, Culture, OperationSelect, AssessmentSelect, OperationDate,
  },
})
export default class OperationWizard extends Vue<{ operation: Operation }> {
  public visible = false;

  public value: Operation | null = null;

  public get title() {
    const { operation } = this.$props;
    const key = operation?.id ? 'editTitle' : 'addTitle';
    return this.$translate(`operationAdding.${key}`);
  }

  public get actionLocale() {
    const { operation } = this.$props;
    const key = operation?.id ? 'saveOperation' : 'addOperation';
    return this.$translate(`tableView.${key}`);
  }

  public showDrawer() {
    this.visible = true;
  }

  public saveOperation() {
    this.$emit(OperationWizardEvents.OPERATION_CHANGED, this.value);
  }

  public onClose() {
    this.visible = false;
    setTimeout(() => {
      this.$emit(OperationWizardEvents.CLOSE);
    }, 150);
  }
}
</script>

<style lang="less">
@import "./operation-wizard";
</style>
